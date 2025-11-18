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
        const db = client.db("communityhere")
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
        const db = client.db("communityhere")
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role || "student"
        token.college = (user as any).college
        token.department = (user as any).department
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id
        (session.user as any).role = token.role
        (session.user as any).college = token.college
        (session.user as any).department = token.department
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
