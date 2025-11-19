"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { threads } from "@/lib/mockData"
import { Heart, MessageCircle, Eye, Pin, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DiscussionsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCollege, setSelectedCollege] = useState("All")

  const categories = ["All", "Learning", "Career", "Projects", "Opportunities"]
  const collegeList = ["All", ...new Set(threads.map((t) => t.userCollege))]

  const filteredThreads = useMemo(() => {
    return threads.filter((thread) => {
      const matchesSearch =
        thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.content.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || thread.category === selectedCategory
      const matchesCollege = selectedCollege === "All" || thread.userCollege === selectedCollege

      return matchesSearch && matchesCategory && matchesCollege
    })
  }, [searchQuery, selectedCategory, selectedCollege])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Community Discussions</h1>
              <p className="text-teal-100">Connect, share ideas, and learn from your peers</p>
            </div>
            {user ? (
              <Link
                href="/discussions/create"
                className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Start Discussion
              </Link>
            ) : (
              <Link
                href="/login"
                className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Sign In to Start Discussion
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === cat
                        ? "gradient-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">College</h3>
              <select
                value={selectedCollege}
                onChange={(e) => setSelectedCollege(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {collegeList.map((col) => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Threads List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredThreads.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No discussions found. Be the first to start one!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredThreads.map((thread) => (
              <Link key={thread.id} href={`/discussions/${thread.id}`}>
                <div className="bg-white rounded-xl card-shadow p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <img
                      src={thread.userAvatar || "/placeholder.svg"}
                      alt={thread.userName}
                      className="w-12 h-12 rounded-full flex-shrink-0"
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-900 text-lg">{thread.title}</h3>
                            {thread.isPinned && <Pin size={16} className="text-purple-600" />}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="font-medium">{thread.userName}</span>
                            <span>•</span>
                            <span>{thread.userCollege}</span>
                            <span>•</span>
                            <span>
                              {new Date(thread.timestamp).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                        <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                          {thread.category}
                        </span>
                      </div>

                      <p className="text-gray-600 line-clamp-2 mb-3">{thread.content}</p>

                      {/* Stats */}
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart size={16} />
                          <span>{thread.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={16} />
                          <span>{thread.replies.length}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={16} />
                          <span>{thread.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
