"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@communityhere.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9 AM - 5 PM",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "College Campus",
      description: "Main Building, Room 101",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div key={index} className="bg-white rounded-xl p-8 card-shadow text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-teal-600 mb-2">{info.value}</p>
                <p className="text-gray-600">{info.description}</p>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl p-8 md:p-12 card-shadow max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
