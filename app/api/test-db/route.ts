import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { 
          success: false, 
          error: "MONGODB_URI is not set in environment variables",
          message: "Please create a .env.local file with MONGODB_URI=mongodb://localhost:27017/communityhere"
        },
        { status: 500 }
      )
    }

    // Try to connect
    const client = await clientPromise
    await client.db("admin").command({ ping: 1 })
    
    // Try to access the database
    const db = client.db("CommunityHere")
    const collections = await db.listCollections().toArray()

    return NextResponse.json({
      success: true,
      message: "MongoDB connection successful!",
      database: "communityhere",
      collections: collections.map((c) => c.name),
      connectionString: process.env.MONGODB_URI?.replace(/\/\/[^:]+:[^@]+@/, "//***:***@"), // Hide credentials
    })
  } catch (error: any) {
    console.error("Database test error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
        message: "Failed to connect to MongoDB. Please check:",
        checks: [
          "1. Is MongoDB running? (Check MongoDB Compass)",
          "2. Is MONGODB_URI correct in .env.local?",
          "3. Is the connection string format correct?",
          `4. Current URI format: ${process.env.MONGODB_URI ? "Set" : "Not set"}`,
        ],
      },
      { status: 500 }
    )
  }
}

