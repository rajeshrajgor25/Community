"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { recruitments } from "@/lib/mockData"
import { dataStore } from "@/lib/data-store"
import { Filter, Briefcase, Calendar } from "lucide-react"
import type { Recruitment } from "@/lib/mockData"

export default function RecruitmentPage() {
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [allRecruitments, setAllRecruitments] = useState<Recruitment[]>(recruitments)

  useEffect(() => {
    dataStore.initialize()
    const dynamicRecruitments = dataStore.getRecruitments()
    setAllRecruitments([...recruitments, ...dynamicRecruitments])
  }, [])

  const statuses = ["All", "active", "closed"]

  const filteredRecruitments = useMemo(() => {
    if (selectedStatus === "All") return allRecruitments
    return allRecruitments.filter((rec) => rec.status === selectedStatus)
  }, [selectedStatus, allRecruitments])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recruitment Drives</h1>
          <p className="text-gray-600 text-lg">Join our committees and help shape the community</p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-xl p-6 mb-8 card-shadow">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-gray-600" />
            <span className="font-semibold text-gray-900">Status</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedStatus === status
                    ? "gradient-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {status === "active" ? "Active" : status === "closed" ? "Closed" : "All"}
              </button>
            ))}
          </div>
        </div>

        {/* Recruitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRecruitments.map((recruitment) => (
            <Link key={recruitment.id} href={`/recruitment/${recruitment.id}`}>
              <div className="bg-white rounded-xl overflow-hidden card-shadow cursor-pointer hover:scale-105 transition-transform h-full">
                <div className="h-32 gradient-primary flex items-center justify-center text-white">
                  <Briefcase size={48} />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{recruitment.committee}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2 ${
                        recruitment.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {recruitment.status === "active" ? "Active" : "Closed"}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{recruitment.description}</p>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase size={16} />
                      <span>{recruitment.positions.length} positions available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>Interview: {new Date(recruitment.interviewDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recruitment.positions.slice(0, 2).map((position) => (
                      <span
                        key={position}
                        className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded"
                      >
                        {position}
                      </span>
                    ))}
                    {recruitment.positions.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                        +{recruitment.positions.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredRecruitments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No recruitment drives found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
