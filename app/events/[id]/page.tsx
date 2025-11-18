"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowLeft, CheckCircle } from "lucide-react"
import { events } from "@/lib/mockData"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { dataStore } from "@/lib/data-store"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { user } = useAuth()
  const [event, setEvent] = useState<any>(null)
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    const mockEvent = events.find((e) => e.id === params.id)
    if (mockEvent) {
      setEvent(mockEvent)
      return
    }

    const dynamicEvent = dataStore.getEvents().find((e) => e.id === params.id)
    if (dynamicEvent) {
      setEvent(dynamicEvent)
    }
  }, [params.id])

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event not found</h1>
          <Link href="/events" className="text-teal-600 hover:text-teal-700 font-semibold">
            Back to Events
          </Link>
        </div>
      </div>
    )
  }

  const handleRegister = () => {
    if (!user) {
      router.push("/login")
      return
    }

    if (user.role === "committee_admin") {
      alert("Committee admins cannot register for events. Please use a student account.")
      return
    }

    dataStore.registerForEvent(event.id, user.id)
    setIsRegistered(true)
    setTimeout(() => {
      router.push(`/registration-confirmation/${event.id}`)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/events" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft size={20} />
          Back to Events
        </Link>

        {/* Event Header */}
        <div className="bg-white rounded-xl overflow-hidden card-shadow mb-8">
          <div className="h-64 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white">
            <Calendar size={64} />
          </div>
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{event.title}</h1>
                <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-semibold">
                  {event.category}
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-6">{event.description}</p>

            {/* Event Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 py-6 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <Calendar className="text-teal-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-semibold text-gray-900">{new Date(event.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-teal-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-gray-900">{event.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-teal-600" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Attendees</p>
                  <p className="font-semibold text-gray-900">
                    {event.attendees}/{event.capacity}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag: string) => (
                  <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Registration Button */}
            <button
              onClick={handleRegister}
              disabled={isRegistered}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                isRegistered ? "gradient-primary opacity-75 cursor-not-allowed" : "gradient-primary hover:shadow-lg"
              }`}
            >
              {isRegistered ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle size={20} />
                  Registration Confirmed!
                </span>
              ) : !user ? (
                "Login to Register"
              ) : (
                "Register for Event"
              )}
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl p-8 card-shadow mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Timeline</h2>
          <div className="space-y-6">
            {event.timeline &&
              event.timeline.map((item: any, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full gradient-primary" />
                    {index < event.timeline.length - 1 && <div className="w-1 h-12 bg-gray-300 mt-2" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.phase}</h3>
                    <p className="text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl p-8 card-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {event.faq &&
              event.faq.map((item: any, index: number) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
