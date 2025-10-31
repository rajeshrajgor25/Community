"use client"

import Link from "next/link"
import { CheckCircle, Calendar, MapPin, Ticket } from "lucide-react"
import { events } from "@/lib/mockData"

export default function RegistrationConfirmationPage({ params }: { params: { eventId: string } }) {
  const event = events.find((e) => e.id === params.eventId)

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow text-center mb-8">
          <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-6">
            <CheckCircle size={48} />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-2">Registration Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">You're all set for this amazing event.</p>

          {/* Event Details */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{event.title}</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <Calendar className="text-teal-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-teal-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-gray-900">{event.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Ticket className="text-teal-600 flex-shrink-0" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Confirmation Number</p>
                  <p className="font-semibold text-gray-900 font-mono">
                    EVT-{event.id}-{Date.now().toString().slice(-6)}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600 mb-2">Category</p>
              <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-semibold">
                {event.category}
              </span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-gray-900 mb-4">Next Steps</h3>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary text-white flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <span className="text-gray-700">Check your email for event details and updates</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary text-white flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <span className="text-gray-700">Arrive 15 minutes early on the event day</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary text-white flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <span className="text-gray-700">Bring your confirmation number for check-in</span>
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/events"
              className="flex-1 border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Explore More Events
            </Link>
            <Link
              href="/"
              className="flex-1 gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-gray-600">
          <p>Have questions? Contact us at info@communityhere.com</p>
        </div>
      </div>
    </div>
  )
}
