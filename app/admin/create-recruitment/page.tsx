"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { dataStore } from "@/lib/data-store"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"

export default function CreateRecruitment() {
  const { user } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    positions: [""],
    description: "",
    requirements: [""],
    interviewDate: "",
    endDate: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      description: e.target.value,
    }))
  }

  const handlePositionChange = (index: number, value: string) => {
    const newPositions = [...formData.positions]
    newPositions[index] = value
    setFormData((prev) => ({
      ...prev,
      positions: newPositions,
    }))
  }

  const addPosition = () => {
    setFormData((prev) => ({
      ...prev,
      positions: [...prev.positions, ""],
    }))
  }

  const removePosition = (index: number) => {
    if (formData.positions.length > 1) {
      setFormData((prev) => ({
        ...prev,
        positions: prev.positions.filter((_, i) => i !== index),
      }))
    }
  }

  const handleRequirementChange = (index: number, value: string) => {
    const newRequirements = [...formData.requirements]
    newRequirements[index] = value
    setFormData((prev) => ({
      ...prev,
      requirements: newRequirements,
    }))
  }

  const addRequirement = () => {
    setFormData((prev) => ({
      ...prev,
      requirements: [...prev.requirements, ""],
    }))
  }

  const removeRequirement = (index: number) => {
    if (formData.requirements.length > 1) {
      setFormData((prev) => ({
        ...prev,
        requirements: prev.requirements.filter((_, i) => i !== index),
      }))
    }
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const validPositions = formData.positions.filter((pos) => pos.trim())
      const validRequirements = formData.requirements.filter((req) => req.trim())

      if (validPositions.length === 0) {
        alert("Please provide at least one position")
        setIsLoading(false)
        return
      }

      const newRecruitment = {
        id: `rec-${Date.now()}`,
        committee: user?.committee || "Unknown Committee",
        positions: validPositions,
        status: "active" as const,
        startDate: new Date().toISOString().split("T")[0],
        endDate: formData.endDate,
        description: formData.description,
        requirements: validRequirements,
        interviewDate: formData.interviewDate,
      }

      dataStore.addRecruitment(newRecruitment)
      router.push("/admin/dashboard?success=Recruitment posted successfully!")
    } catch (error) {
      console.error("Error creating recruitment:", error)
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
          <h1 className="text-3xl font-bold text-gray-900">Create Recruitment Drive</h1>
          <p className="text-gray-600 mt-1">Post recruitment opportunities for your committee</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              value={formData.description}
              onChange={handleDescriptionChange}
              placeholder="Describe the recruitment drive and what you're looking for..."
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Positions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Positions *</label>
            <div className="space-y-3">
              {formData.positions.map((position, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={position}
                      onChange={(e) => handlePositionChange(index, e.target.value)}
                      placeholder={`Position ${index + 1} (e.g., President, Vice President)`}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  {formData.positions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePosition(index)}
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
              onClick={addPosition}
              className="mt-4 px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2 font-medium"
            >
              <Plus size={18} />
              Add Position
            </button>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Requirements</label>
            <div className="space-y-3">
              {formData.requirements.map((requirement, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={requirement}
                      onChange={(e) => handleRequirementChange(index, e.target.value)}
                      placeholder={`Requirement ${index + 1} (e.g., Leadership skills)`}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  {formData.requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRequirement(index)}
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
              onClick={addRequirement}
              className="mt-4 px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2 font-medium"
            >
              <Plus size={18} />
              Add Requirement
            </button>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interview Date *</label>
              <input
                type="date"
                name="interviewDate"
                value={formData.interviewDate}
                onChange={handleDateChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Application Deadline *</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleDateChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-900">
              <strong>Tip:</strong> Make sure to set realistic deadlines and interview dates to give students enough
              time to apply.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Creating Recruitment..." : "Post Recruitment"}
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
