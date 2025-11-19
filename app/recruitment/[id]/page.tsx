"use client"

import { useState } from "react"
import Link from "next/link"
import { recruitments } from "@/lib/mockData"
import { ArrowLeft, Briefcase, Calendar, CheckCircle, Clock } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { dataStore } from "@/lib/data-store"

export default function RecruitmentDetailPage({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const recruitment = recruitments.find((r) => r.id === params.id)
  const [applied, setApplied] = useState(false)

  if (!recruitment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recruitment drive not found</h1>
          <Link href="/recruitment" className="text-teal-600 hover:text-teal-700 font-semibold">
            Back to Recruitment
          </Link>
        </div>
      </div>
    )
  }

  const handleApply = () => {
    if (!user) {
      router.push("/login")
      return
    }

    if (user.role === "committee_admin") {
      alert("Committee admins cannot apply for recruitment. Please use a student account.")
      return
    }

    dataStore.applyForRecruitment(recruitment.id, user.id)
    setApplied(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/recruitment" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft size={20} />
          Back to Recruitment
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl overflow-hidden card-shadow mb-8">
          <div className="h-48 gradient-primary flex items-center justify-center text-white">
            <Briefcase size={64} />
          </div>
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{recruitment.committee}</h1>
                <span
                  className={`inline-block px-4 py-2 rounded-full font-semibold ${
                    recruitment.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {recruitment.status === "active" ? "Active" : "Closed"}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-6">{recruitment.description}</p>

            {/* Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <Calendar className="text-teal-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Start Date</p>
                  <p className="font-semibold text-gray-900">{new Date(recruitment.startDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-teal-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">End Date</p>
                  <p className="font-semibold text-gray-900">{new Date(recruitment.endDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-teal-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Interview Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(recruitment.interviewDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <button
              onClick={handleApply}
              disabled={applied || recruitment.status === "closed"}
              className={`w-full mt-8 py-3 rounded-lg font-semibold text-white transition-all ${
                applied
                  ? "gradient-primary opacity-75 cursor-not-allowed"
                  : recruitment.status === "closed"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "gradient-primary hover:shadow-lg"
              }`}
            >
              {applied ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle size={20} />
                  Application Submitted!
                </span>
              ) : recruitment.status === "closed" ? (
                "Recruitment Closed"
              ) : !user ? (
                "Login to Apply"
              ) : (
                "Apply Now"
              )}
            </button>
          </div>
        </div>

        {/* Positions */}
        <div className="bg-white rounded-xl p-8 card-shadow mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recruitment.positions.map((position) => (
              <div key={position} className="border-2 border-teal-200 rounded-lg p-4 bg-teal-50">
                <h3 className="font-bold text-gray-900">{position}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl p-8 card-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
          <ul className="space-y-3">
            {recruitment.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
