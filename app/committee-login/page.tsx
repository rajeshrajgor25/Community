"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { AlertCircle } from "lucide-react"

const committees = [
  "Tech Club",
  "Design Club",
  "Event Management",
  "Content Writing",
  "Finance Club",
  "Sports Committee",
]

export default function CommitteeLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [committee, setCommittee] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Demo: Use committee email format for testing
      const committeeEmail = `${committee.toLowerCase().replace(/\s+/g, "-")}-admin@communityhere.com`
      await login(committeeEmail, password, committee)
      router.push("/admin/dashboard")
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              CH
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Committee Admin</h1>
            <p className="text-gray-600 mt-2">Manage events, polls & recruitment</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Committee</label>
              <select
                value={committee}
                onChange={(e) => setCommittee(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select your committee</option>
                {committees.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@committee.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full gradient-primary text-white py-2 rounded-lg font-medium hover:shadow-lg transition-shadow disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Login as Admin"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm mb-4">Don't have an admin account?</p>
            <Link
              href="/committee-signup"
              className="block w-full text-center px-4 py-2 border-2 border-teal-600 text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors"
            >
              Sign Up as Committee
            </Link>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-600">
              <strong>Demo:</strong> Use any committee name and any credentials to test the admin panel.
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/login" className="text-teal-600 hover:text-teal-700 font-medium">
            ← Back to Student Login
          </Link>
        </div>
      </div>
    </div>
  )
}
