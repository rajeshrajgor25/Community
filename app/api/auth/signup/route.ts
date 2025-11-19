import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, college, department, role } = await request.json()

    // Validation
    if (!name || !email || !password || !college || !department) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    // Check MongoDB connection
    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI is not set in environment variables")
      return NextResponse.json({ error: "Database configuration error. Please contact administrator." }, { status: 500 })
    }

    let client
    try {
      client = await clientPromise
    } catch (connectionError: any) {
      console.error("MongoDB connection error:", connectionError)
      return NextResponse.json({ 
        error: process.env.NODE_ENV === "development" 
          ? `Database connection failed: ${connectionError.message}` 
          : "Database connection failed. Please check your MongoDB connection." 
      }, { status: 500 })
    }

    const db = client.db("CommunityHere")
    const usersCollection = db.collection("users")

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      college,
      department,
      role: role || "student",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error("Signup error:", error)
    // Return more detailed error message in development
    const errorMessage = process.env.NODE_ENV === "development" 
      ? error.message || "Internal server error"
      : "Internal server error"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
