import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcryptjs"
import { Db } from "mongodb"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials")
        }

        const client = await clientPromise
        const db = client.db("CommunityHere")
        const usersCollection = db.collection("users")

        const user = await usersCollection.findOne({ email: credentials.email })

        if (!user) {
          throw new Error("No user found with this email")
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          college: user.college,
          department: user.department,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const client = await clientPromise
        const db = client.db("CommunityHere")
        const usersCollection = db.collection("users")

        const existingUser = await usersCollection.findOne({ email: user.email })

        if (!existingUser) {
          // Create new user on first Google sign-in
          await usersCollection.insertOne({
            email: user.email,
            name: user.name,
            college: "Not Set",
            department: "Not Set",
            role: "student",
            password: "",
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        }
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      // After Google OAuth, redirect to discussions page
      if (url.startsWith(baseUrl)) {
        return url
      }
      // Default redirect to discussions after login
      return `${baseUrl}/discussions`
    },
    async jwt({ token, user, account }) {
      // Initial sign in - fetch full user data from MongoDB
      if (user) {
        const client = await clientPromise
        const db = client.db("CommunityHere")
        const usersCollection = db.collection("users")
        
        // Fetch full user data from MongoDB
        const dbUser = await usersCollection.findOne({ email: user.email })
        
        if (dbUser) {
          token.id = dbUser._id.toString()
          token.name = dbUser.name || user.name
          token.email = dbUser.email || user.email
          token.role = dbUser.role || "student"
          token.college = dbUser.college
          token.department = dbUser.department
          token.committee = dbUser.committee
        } else {
          // Fallback to user data from provider
          token.id = user.id || user.email || ""
          token.name = user.name || ""
          token.email = user.email || ""
          token.role = (user as any).role || "student"
          token.college = (user as any).college
          token.department = (user as any).department
        }
        
        // Generate session ID for student login
        if (!token.sessionId) {
          token.sessionId = `SESS-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
        }
      }
      
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        const user = session.user as any
        const tokenData = token as any
        user.id = tokenData.id
        user.role = tokenData.role || "student"
        user.college = tokenData.college
        user.department = tokenData.department
        user.committee = tokenData.committee
        user.sessionId = tokenData.sessionId
        // Ensure name and email are set
        if (!user.name && tokenData.name) {
          user.name = tokenData.name as string
        }
        if (!user.email && tokenData.email) {
          user.email = tokenData.email as string
        }
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
