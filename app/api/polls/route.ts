import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db("communityhere")
    const pollsCollection = db.collection("polls")

    const polls = await pollsCollection.find({}).toArray()

    return NextResponse.json({ polls }, { status: 200 })
  } catch (error) {
    console.error("Get polls error:", error)
    return NextResponse.json({ error: "Failed to fetch polls" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const pollData = await request.json()

    const client = await clientPromise
    const db = client.db("communityhere")
    const pollsCollection = db.collection("polls")

    const result = await pollsCollection.insertOne({
      ...pollData,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      {
        message: "Poll created successfully",
        pollId: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Create poll error:", error)
    return NextResponse.json({ error: "Failed to create poll" }, { status: 500 })
  }
}
