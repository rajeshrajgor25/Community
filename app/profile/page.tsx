"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { Mail, MapPin, Calendar, LogOut } from "lucide-react"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sign in to view your profile</h1>
          <Link
            href="/login"
            className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow inline-block"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-primary py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">My Profile</h1>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl card-shadow p-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-gray-200">
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              className="w-32 h-32 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-4">{user.bio}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={18} />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{user.college}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="font-semibold">Department:</span>
                  <span>{user.department}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>Joined {new Date(user.joinedDate).toLocaleDateString()}</span>
                </div>
                {user.sessionId && (
                  <div className="flex items-center gap-2 text-gray-600 md:col-span-2">
                    <span className="font-semibold">Session ID:</span>
                    <span className="font-mono text-sm bg-gray-100 px-3 py-1 rounded border">{user.sessionId}</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-50 text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-100 transition-colors"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6">
              <p className="text-gray-600 text-sm font-semibold mb-2">Discussions Started</p>
              <p className="text-3xl font-bold text-teal-600">0</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
              <p className="text-gray-600 text-sm font-semibold mb-2">Replies Posted</p>
              <p className="text-3xl font-bold text-blue-600">0</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
              <p className="text-gray-600 text-sm font-semibold mb-2">Likes Received</p>
              <p className="text-3xl font-bold text-purple-600">0</p>
            </div>
          </div>
        </div>

        {/* College Community Info */}
        <div className="mt-8 bg-white rounded-xl card-shadow p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Your College Community</h3>
          <p className="text-gray-600 mb-6">
            You're connected with students from <span className="font-semibold">{user.college}</span>. Explore
            discussions, events, and opportunities specific to your college.
          </p>
          <Link
            href="/discussions"
            className="inline-block gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            View College Discussions
          </Link>
        </div>
      </div>
    </div>
  )
}
