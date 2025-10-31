"use client"

import { leaderboard } from "@/lib/mockData"
import { Trophy, Medal } from "lucide-react"

export default function LeaderboardPage() {
  const podium = leaderboard.slice(0, 3)
  const rest = leaderboard.slice(3)

  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 to-yellow-600"
      case 2:
        return "from-gray-300 to-gray-500"
      case 3:
        return "from-orange-400 to-orange-600"
      default:
        return "from-teal-400 to-blue-600"
    }
  }

  const getMedalIcon = (rank: number) => {
    if (rank <= 3) return <Medal size={24} />
    return <Trophy size={24} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Leaderboard</h1>
          <p className="text-gray-600 text-lg">Top performers in our community</p>
        </div>

        {/* Podium View */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 2nd Place */}
            {podium[1] && (
              <div className="flex flex-col items-center">
                <div
                  className={`bg-gradient-to-br ${getMedalColor(2)} rounded-xl p-8 w-full text-white text-center mb-4 card-shadow`}
                >
                  <div className="text-5xl font-bold mb-2">2</div>
                  <div className="flex justify-center mb-2">{getMedalIcon(2)}</div>
                  <h3 className="text-xl font-bold">{podium[1].name}</h3>
                  <p className="text-sm opacity-90">{podium[1].department}</p>
                </div>
                <div className="bg-white rounded-lg p-4 w-full card-shadow">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Score</span>
                    <span className="font-bold text-gray-900">{podium[1].score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Events</span>
                    <span className="font-bold text-gray-900">{podium[1].events}</span>
                  </div>
                </div>
              </div>
            )}

            {/* 1st Place */}
            {podium[0] && (
              <div className="flex flex-col items-center md:order-first">
                <div
                  className={`bg-gradient-to-br ${getMedalColor(1)} rounded-xl p-8 w-full text-white text-center mb-4 card-shadow transform md:scale-110`}
                >
                  <div className="text-6xl font-bold mb-2">1</div>
                  <div className="flex justify-center mb-2 text-3xl">{getMedalIcon(1)}</div>
                  <h3 className="text-2xl font-bold">{podium[0].name}</h3>
                  <p className="text-sm opacity-90">{podium[0].department}</p>
                </div>
                <div className="bg-white rounded-lg p-4 w-full card-shadow">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Score</span>
                    <span className="font-bold text-gray-900">{podium[0].score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Events</span>
                    <span className="font-bold text-gray-900">{podium[0].events}</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {podium[2] && (
              <div className="flex flex-col items-center">
                <div
                  className={`bg-gradient-to-br ${getMedalColor(3)} rounded-xl p-8 w-full text-white text-center mb-4 card-shadow`}
                >
                  <div className="text-5xl font-bold mb-2">3</div>
                  <div className="flex justify-center mb-2">{getMedalIcon(3)}</div>
                  <h3 className="text-xl font-bold">{podium[2].name}</h3>
                  <p className="text-sm opacity-90">{podium[2].department}</p>
                </div>
                <div className="bg-white rounded-lg p-4 w-full card-shadow">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Score</span>
                    <span className="font-bold text-gray-900">{podium[2].score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Events</span>
                    <span className="font-bold text-gray-900">{podium[2].events}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full Table */}
        <div className="bg-white rounded-xl overflow-hidden card-shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="gradient-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Rank</th>
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Department</th>
                  <th className="px-6 py-4 text-right font-semibold">Score</th>
                  <th className="px-6 py-4 text-right font-semibold">Events</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, index) => (
                  <tr
                    key={entry.rank}
                    className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                      index < 3 ? "bg-gradient-to-r from-teal-50 to-blue-50" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${getMedalColor(entry.rank)} flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {entry.rank}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{entry.name}</td>
                    <td className="px-6 py-4 text-gray-600">{entry.department}</td>
                    <td className="px-6 py-4 text-right font-bold text-teal-600">{entry.score}</td>
                    <td className="px-6 py-4 text-right font-bold text-blue-600">{entry.events}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
