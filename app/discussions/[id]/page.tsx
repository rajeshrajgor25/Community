"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { threads } from "@/lib/mockData"
import { Heart, MessageCircle, Share2, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ThreadDetailPage({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const [replyText, setReplyText] = useState("")
  const [liked, setLiked] = useState(false)

  const thread = threads.find((t) => t.id === params.id)

  if (!thread) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Thread not found</h1>
          <Link href="/discussions" className="text-teal-600 hover:text-teal-700 font-semibold">
            Back to Discussions
          </Link>
        </div>
      </div>
    )
  }

  // Discussions are now viewable without login, but replies require login

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault()
    if (!replyText.trim()) return
    // In a real app, this would save to database
    setReplyText("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-4"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Thread */}
        <div className="bg-white rounded-xl card-shadow p-8 mb-8">
          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={thread.userAvatar || "/placeholder.svg"}
              alt={thread.userName}
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h3 className="font-bold text-gray-900">{thread.userName}</h3>
              <p className="text-sm text-gray-500">
                {thread.userCollege} • {new Date(thread.timestamp).toLocaleDateString()}
              </p>
            </div>
            <span className="ml-auto bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
              {thread.category}
            </span>
          </div>

          {/* Title & Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{thread.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{thread.content}</p>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 font-semibold transition-colors ${
                liked ? "text-red-600" : "text-gray-600 hover:text-red-600"
              }`}
            >
              <Heart size={20} fill={liked ? "currentColor" : "none"} />
              <span>{thread.likes + (liked ? 1 : 0)}</span>
            </button>
            <div className="flex items-center gap-2 text-gray-600 font-semibold">
              <MessageCircle size={20} />
              <span>{thread.replies.length}</span>
            </div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-teal-600 font-semibold transition-colors">
              <Share2 size={20} />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Replies Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">{thread.replies.length} Replies</h2>

          {/* Reply Form - Only show if user is logged in */}
          {user ? (
            <form onSubmit={handleReply} className="bg-white rounded-xl card-shadow p-6">
              <div className="flex gap-4 mb-4">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.college}</p>
                </div>
              </div>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                rows={4}
              />
              <button
                type="submit"
                disabled={!replyText.trim()}
                className="mt-4 gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
              >
                Post Reply
              </button>
            </form>
          ) : (
            <div className="bg-white rounded-xl card-shadow p-6 text-center">
              <p className="text-gray-600 mb-4">Sign in to reply to this discussion</p>
              <Link
                href="/login"
                className="inline-block gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Sign In
              </Link>
            </div>
          )}

          {/* Replies List */}
          {thread.replies.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-600">No replies yet. Be the first to reply!</p>
            </div>
          ) : (
            thread.replies.map((reply) => (
              <div key={reply.id} className="bg-white rounded-xl card-shadow p-6">
                <div className="flex gap-4 mb-4">
                  <img
                    src={reply.userAvatar || "/placeholder.svg"}
                    alt={reply.userName}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-gray-900">{reply.userName}</p>
                      <span className="text-xs text-gray-500">{reply.userCollege}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(reply.timestamp).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{reply.content}</p>
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold transition-colors">
                  <Heart size={16} />
                  <span className="text-sm">{reply.likes}</span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
