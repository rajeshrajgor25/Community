"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { dataStore } from "@/lib/data-store"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"

export default function CreatePoll() {
  const { user } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    question: "",
    eventId: "",
    options: ["", ""],
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      question: e.target.value,
    }))
  }

  const handleEventIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      eventId: e.target.value,
    }))
  }

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...formData.options]
    newOptions[index] = value
    setFormData((prev) => ({
      ...prev,
      options: newOptions,
    }))
  }

  const addOption = () => {
    setFormData((prev) => ({
      ...prev,
      options: [...prev.options, ""],
    }))
  }

  const removeOption = (index: number) => {
    if (formData.options.length > 2) {
      setFormData((prev) => ({
        ...prev,
        options: prev.options.filter((_, i) => i !== index),
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const validOptions = formData.options.filter((opt) => opt.trim())

      if (validOptions.length < 2) {
        alert("Please provide at least 2 options")
        setIsLoading(false)
        return
      }

      const newPoll = {
        id: `poll-${Date.now()}`,
        eventId: formData.eventId || `event-${Date.now()}`,
        question: formData.question,
        options: validOptions.map((text, index) => ({
          id: `opt-${index}`,
          text,
          votes: 0,
        })),
        status: "active" as const,
        totalVotes: 0,
      }

      dataStore.addPoll(newPoll)
      router.push("/admin/dashboard?success=Poll created successfully!")
    } catch (error) {
      console.error("Error creating poll:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!user || user.role !== "committee_admin") {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/admin/dashboard" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-4">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Create New Poll</h1>
          <p className="text-gray-600 mt-1">Create a poll to gather feedback from the community</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          {/* Question */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Poll Question *</label>
            <input
              type="text"
              value={formData.question}
              onChange={handleQuestionChange}
              placeholder="e.g., Which framework would you like to learn next?"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Event ID (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event ID (Optional)</label>
            <input
              type="text"
              value={formData.eventId}
              onChange={handleEventIdChange}
              placeholder="Link to an event (e.g., event-1)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Leave empty to create a standalone poll</p>
          </div>

          {/* Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Poll Options *</label>
            <div className="space-y-3">
              {formData.options.map((option, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      placeholder={`Option ${index + 1}`}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  {formData.options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addOption}
              className="mt-4 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 font-medium"
            >
              <Plus size={18} />
              Add Option
            </button>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Tip:</strong> Create polls to engage your community and gather valuable feedback on events,
              preferences, and more.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Creating Poll..." : "Create Poll"}
            </button>
            <Link
              href="/admin/dashboard"
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
