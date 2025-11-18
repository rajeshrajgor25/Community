"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, LogOut, User } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const studentLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/polls", label: "Polls" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/discussions", label: "Discussions" },
    { href: "/contact", label: "Contact" },
  ]

  const adminLinks = [
    { href: "/admin/dashboard", label: "Admin Dashboard" },
    { href: "/", label: "View Student Site" },
  ]

  const links = user?.role === "committee_admin" ? adminLinks : studentLinks

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={user?.role === "committee_admin" ? "/admin/dashboard" : "/"} className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
              CH
            </div>
            <span className="font-bold text-lg hidden sm:inline">CommunityHere</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-8 h-8 rounded-full" />
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">
                      {user.role === "committee_admin" ? user.committee : user.college}
                    </p>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-red-600 transition-colors flex items-center gap-1"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-teal-600 border border-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors"
                >
                  Student Login
                </Link>
                <Link
                  href="/committee-login"
                  className="gradient-primary text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  Committee Admin
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} />
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-4 py-2 text-teal-600 border border-teal-600 rounded-lg font-medium text-center hover:bg-teal-50"
                  onClick={() => setIsOpen(false)}
                >
                  Student Login
                </Link>
                <Link
                  href="/committee-login"
                  className="block px-4 py-2 gradient-primary text-white rounded-lg font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Committee Admin
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
