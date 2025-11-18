import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise
    const db = client.db("communityhere")
    const leaderboardCollection = db.collection("leaderboard")

    const leaderboard = await leaderboardCollection.find({}).sort({ score: -1 }).toArray()

    return NextResponse.json({ leaderboard }, { status: 200 })
  } catch (error) {
    console.error("Get leaderboard error:", error)
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 })
  }
}
