import Link from "next/link"
import { ArrowRight, Calendar, Zap } from "lucide-react"
import { events, leaderboard } from "@/lib/mockData"

export default function Home() {
  const upcomingEvents = events.slice(0, 3)
  const topParticipants = leaderboard.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Connect, Compete & Grow Together
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover amazing events, join competitions, connect with peers, and build your college experience with
              CommunityHere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/events"
                className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow inline-flex items-center justify-center gap-2"
              >
                Explore Events <ArrowRight size={20} />
              </Link>
              <Link
                href="/committee-registration"
                className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Join Committee
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="gradient-primary rounded-2xl h-96 flex items-center justify-center text-white text-center p-8">
              <div>
                <Zap size={64} className="mx-auto mb-4" />
                <p className="text-2xl font-bold">Your Community Awaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <p className="text-gray-600">Events Annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-gray-600">Competitions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">20+</div>
              <p className="text-gray-600">Committees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 text-lg">Don't miss out on these amazing opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {upcomingEvents.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <div className="bg-white rounded-xl overflow-hidden card-shadow cursor-pointer h-full hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white">
                  <Calendar size={48} />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-900 flex-1">{event.title}</h3>
                    <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      {event.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                    <p>👥 {event.attendees} attending</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/events" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700">
          View All Events <ArrowRight size={20} />
        </Link>
      </section>

      {/* Top Participants */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Participants</h2>
            <p className="text-gray-600 text-lg">Celebrating our most active community members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {topParticipants.map((participant) => (
              <div key={participant.rank} className="bg-white rounded-xl p-6 card-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {participant.rank}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{participant.name}</h3>
                    <p className="text-sm text-gray-500">{participant.department}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Score</span>
                    <span className="font-bold text-teal-600">{participant.score}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Events</span>
                    <span className="font-bold text-blue-600">{participant.events}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/leaderboard"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
          >
            View Full Leaderboard <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg mb-8 opacity-90">
            Register as a committee member and help organize amazing events for your college.
          </p>
          <Link
            href="/committee-registration"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
}
