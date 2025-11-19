"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Calendar, MessageSquare, Briefcase, Plus, Users, FileText } from "lucide-react"
import { useEffect, useState } from "react"
import { dataStore } from "@/lib/data-store"

export default function AdminDashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState({
    events: 0,
    polls: 0,
    recruitments: 0,
    totalRegistrations: 0,
    totalApplications: 0,
  })
  const [eventDetails, setEventDetails] = useState<Array<{ id: string; title: string; registrations: number }>>([])
  const [recruitmentDetails, setRecruitmentDetails] = useState<
    Array<{ id: string; positions: string[]; applications: number }>
  >([])

  useEffect(() => {
    if (!user || user.role !== "committee_admin") {
      router.push("/committee-login")
      return
    }

    dataStore.initialize()

    const events = dataStore.getEvents()
    const polls = dataStore.getPolls()
    const recruitments = dataStore.getRecruitments()
    const totalRegistrations = dataStore.getTotalEventRegistrations()
    const totalApplications = dataStore.getTotalRecruitmentApplications()

    setStats({
      events: events.length,
      polls: polls.length,
      recruitments: recruitments.length,
      totalRegistrations,
      totalApplications,
    })

    const eventDetailsData = events.map((event) => ({
      id: event.id,
      title: event.title,
      registrations: dataStore.getEventRegistrations(event.id).length,
    }))
    setEventDetails(eventDetailsData)

    const recruitmentDetailsData = recruitments.map((rec) => ({
      id: rec.id,
      positions: rec.positions,
      applications: dataStore.getRecruitmentApplications(rec.id).length,
    }))
    setRecruitmentDetails(recruitmentDetailsData)
  }, [user, router])

  if (!user || user.role !== "committee_admin") {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage events, polls, and recruitment for {user.committee}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Logged in as</p>
              <p className="font-semibold text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500 mt-1">ID: {user.id}</p>
              {user.sessionId && (
                <p className="text-xs text-gray-500 font-mono">Session: {user.sessionId}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-teal-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Events</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.events}</p>
              </div>
              <Calendar className="text-teal-500" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Polls</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.polls}</p>
              </div>
              <MessageSquare className="text-blue-500" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Recruitments</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.recruitments}</p>
              </div>
              <Briefcase className="text-purple-500" size={40} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Event Registrations</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalRegistrations}</p>
              </div>
              <Users className="text-green-500" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Recruitment Applications</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalApplications}</p>
              </div>
              <FileText className="text-orange-500" size={40} />
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Create Event */}
          <Link href="/admin/create-event">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="text-teal-600 group-hover:scale-110 transition-transform" size={32} />
                <Plus className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create Event</h3>
              <p className="text-gray-600 text-sm">Post a new event for students to discover and register</p>
              <div className="mt-4 text-teal-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Create Event →
              </div>
            </div>
          </Link>

          {/* Create Poll */}
          <Link href="/admin/create-poll">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <MessageSquare className="text-blue-600 group-hover:scale-110 transition-transform" size={32} />
                <Plus className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create Poll</h3>
              <p className="text-gray-600 text-sm">Create a poll to gather feedback from the community</p>
              <div className="mt-4 text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Create Poll →
              </div>
            </div>
          </Link>

          {/* Create Recruitment */}
          <Link href="/admin/create-recruitment">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-8 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <Briefcase className="text-purple-600 group-hover:scale-110 transition-transform" size={32} />
                <Plus className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create Recruitment</h3>
              <p className="text-gray-600 text-sm">Post recruitment opportunities for your committee</p>
              <div className="mt-4 text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Create Recruitment →
              </div>
            </div>
          </Link>
        </div>

        {eventDetails.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Event Registrations Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Event Title</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Registrations</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {eventDetails.map((event) => (
                    <tr key={event.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900">{event.title}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {event.registrations} students
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-600">Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {recruitmentDetails.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recruitment Applications Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Positions</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Applications</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recruitmentDetails.map((rec) => (
                    <tr key={rec.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900">{rec.positions.join(", ")}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                          {rec.applications} applications
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-600">Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/events"
              className="p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-colors"
            >
              <p className="font-medium text-gray-900">View All Events</p>
              <p className="text-sm text-gray-600 mt-1">See all events posted by committees</p>
            </Link>
            <Link
              href="/polls"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <p className="font-medium text-gray-900">View All Polls</p>
              <p className="text-sm text-gray-600 mt-1">Check active and closed polls</p>
            </Link>
            <Link
              href="/recruitment"
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              <p className="font-medium text-gray-900">View All Recruitments</p>
              <p className="text-sm text-gray-600 mt-1">Browse all recruitment drives</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
