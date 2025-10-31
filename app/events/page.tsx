"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Search, Filter, Calendar } from "lucide-react"
import { events } from "@/lib/mockData"
import { dataStore } from "@/lib/data-store"
import type { Event } from "@/lib/mockData"

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [allEvents, setAllEvents] = useState<Event[]>(events)

  useEffect(() => {
    dataStore.initialize()
    const dynamicEvents = dataStore.getEvents()
    setAllEvents([...events, ...dynamicEvents])
  }, [])

  const categories = ["All", "Workshop", "Competition", "Seminar", "Networking", "Hackathon", "Webinar"]

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, allEvents])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Events</h1>
          <p className="text-gray-600 text-lg">Find and join events that interest you</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-6 mb-8 card-shadow">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Filter size={18} className="text-gray-600" />
              <span className="font-semibold text-gray-900">Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? "gradient-primary text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <div className="bg-white rounded-xl overflow-hidden card-shadow cursor-pointer hover:scale-105 transition-transform h-full">
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
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                      <p>🕐 {event.time}</p>
                      <p>📍 {event.location}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm font-semibold text-gray-700">
                        {event.attendees}/{event.capacity} attending
                      </span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full gradient-primary"
                          style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
