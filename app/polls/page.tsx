"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { polls, events } from "@/lib/mockData"
import { dataStore } from "@/lib/data-store"
import { CheckCircle, Filter } from "lucide-react"
import type { Poll } from "@/lib/mockData"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

export default function PollsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [userVotes, setUserVotes] = useState<Record<string, string>>({})
  const [allPolls, setAllPolls] = useState<Poll[]>(polls)

  useEffect(() => {
    dataStore.initialize()
    const dynamicPolls = dataStore.getPolls()
    setAllPolls([...polls, ...dynamicPolls])
  }, [])

  const statuses = ["All", "active", "closed"]

  const filteredPolls = useMemo(() => {
    if (selectedStatus === "All") return allPolls
    return allPolls.filter((poll) => poll.status === selectedStatus)
  }, [selectedStatus, allPolls])

  const handleVote = (pollId: string, optionId: string) => {
    if (!user) {
      router.push("/login")
      return
    }

    if (user.role === "committee_admin") {
      alert("Committee admins cannot vote in polls. Please use a student account.")
      return
    }

    dataStore.voteInPoll(pollId, user.id, optionId)
    setUserVotes((prev) => ({
      ...prev,
      [pollId]: optionId,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Polls</h1>
          <p className="text-gray-600 text-lg">Vote on what matters to our community</p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-xl p-6 mb-8 card-shadow">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-gray-600" />
            <span className="font-semibold text-gray-900">Status</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedStatus === status
                    ? "gradient-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {status === "active" ? "Active" : status === "closed" ? "Closed" : "All"}
              </button>
            ))}
          </div>
        </div>

        {/* Polls */}
        <div className="space-y-6">
          {filteredPolls.map((poll) => {
            const event = events.find((e) => e.id === poll.eventId)
            const userVote = userVotes[poll.id]
            const maxVotes = Math.max(...poll.options.map((opt) => opt.votes))

            return (
              <div key={poll.id} className="bg-white rounded-xl p-8 card-shadow">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{poll.question}</h2>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        poll.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {poll.status === "active" ? "Active" : "Closed"}
                    </span>
                  </div>
                  {event && (
                    <Link
                      href={`/events/${event.id}`}
                      className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                    >
                      Related to: {event.title}
                    </Link>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-4 mb-6">
                  {poll.options.map((option) => {
                    const percentage = (option.votes / poll.totalVotes) * 100
                    const isSelected = userVotes[poll.id] === option.id

                    return (
                      <button
                        key={option.id}
                        onClick={() => poll.status === "active" && handleVote(poll.id, option.id)}
                        disabled={poll.status === "closed" || !user}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          isSelected ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:border-gray-300 bg-white"
                        } ${poll.status === "closed" || !user ? "cursor-not-allowed opacity-75" : "cursor-pointer"}`}
                        title={!user ? "Login to vote" : ""}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-900">{option.text}</span>
                          <div className="flex items-center gap-2">
                            {isSelected && <CheckCircle size={20} className="text-teal-600" />}
                            <span className="text-sm font-semibold text-gray-600">
                              {option.votes} ({percentage.toFixed(1)}%)
                            </span>
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full gradient-primary transition-all" style={{ width: `${percentage}%` }} />
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Stats */}
                <div className="text-sm text-gray-600 text-center">
                  Total votes: <span className="font-semibold">{poll.totalVotes}</span>
                </div>
              </div>
            )
          })}
        </div>

        {filteredPolls.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No polls found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
