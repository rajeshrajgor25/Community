"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { colleges } from "@/lib/mockData"
import { ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [college, setCollege] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      if (!email || !password) {
        setError("Please fill in all fields")
        setIsLoading(false)
        return
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError(result.error)
        setIsLoading(false)
        return
      }

      router.push("/discussions")
    } catch (err) {
      setError("Login failed. Please try again.")
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    await signIn("google", { redirect: true, callbackUrl: "/discussions" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl card-shadow p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              CH
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your CommunityHere account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full gradient-primary text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <text x="12" y="20" textAnchor="middle" fontSize="10" fill="currentColor">
                Google
              </text>
            </svg>
            Sign in with Google
          </button>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">Don't have an account?</p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
            >
              Create Account <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-8 bg-white rounded-xl p-6 card-shadow">
          <h3 className="font-semibold text-gray-900 mb-3">Demo Credentials</h3>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Email:</strong> demo@example.com
          </p>
          <p className="text-sm text-gray-600">
            <strong>Password:</strong> demo123
          </p>
        </div>
      </div>
    </div>
  )
}
