"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useSession, signOut as nextAuthSignOut } from "next-auth/react"

export interface User {
  id: string
  name: string
  email: string
  college?: string
  department?: string
  avatar: string
  bio: string
  joinedDate: string
  role: "student" | "committee_admin"
  committee?: string // For committee admins
  sessionId?: string // Session ID for student login
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string, collegeOrCommittee: string) => Promise<void>
  signup: (
    name: string,
    email: string,
    password: string,
    collegeOrCommittee: string,
    departmentOrRole: string,
    role: "student" | "committee_admin",
  ) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status, update } = useSession()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Expose update function to refresh session
  useEffect(() => {
    // Store update function globally so it can be called from login
    if (typeof window !== "undefined") {
      (window as any).__refreshAuthSession = update
    }
  }, [update])

  // Sync NextAuth session with AuthContext
  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true)
      return
    }

    if (status === "authenticated" && session?.user) {
      // Convert NextAuth session to User format
      const sessionUser = session.user as any
      const authUser: User = {
        id: sessionUser.id || sessionUser.email || "",
        name: sessionUser.name || "",
        email: sessionUser.email || "",
        college: sessionUser.college,
        department: sessionUser.department,
        avatar: sessionUser.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${sessionUser.email}`,
        bio: sessionUser.role === "committee_admin" ? "Committee Administrator" : "Member of the community",
        joinedDate: new Date().toISOString(),
        role: sessionUser.role || "student",
        committee: sessionUser.committee,
        sessionId: sessionUser.sessionId,
      }
      setUser(authUser)
      // Also store in localStorage for backward compatibility
      localStorage.setItem("currentUser", JSON.stringify(authUser))
    } else if (status === "unauthenticated") {
      // Check localStorage as fallback
      const storedUser = localStorage.getItem("currentUser")
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (e) {
          localStorage.removeItem("currentUser")
          setUser(null)
        }
      } else {
        setUser(null)
      }
    }
    setIsLoading(false)
  }, [session, status])

  const login = async (email: string, password: string, collegeOrCommittee: string) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    const role = email.includes("committee") ? "committee_admin" : "student"

    const mockUser: User = {
      id: `user-${Date.now()}`,
      name: email.split("@")[0],
      email,
      ...(role === "student"
        ? { college: collegeOrCommittee, department: "Computer Science" }
        : { committee: collegeOrCommittee }),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      bio: role === "committee_admin" ? "Committee Administrator" : "Passionate about tech and community",
      joinedDate: new Date().toISOString(),
      role,
    }

    setUser(mockUser)
    localStorage.setItem("currentUser", JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const signup = async (
    name: string,
    email: string,
    password: string,
    collegeOrCommittee: string,
    departmentOrRole: string,
    role: "student" | "committee_admin",
  ) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    const mockUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      ...(role === "student"
        ? { college: collegeOrCommittee, department: departmentOrRole }
        : { committee: collegeOrCommittee }),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      bio: role === "committee_admin" ? "Committee Administrator" : "New member of the community",
      joinedDate: new Date().toISOString(),
      role,
    }

    setUser(mockUser)
    localStorage.setItem("currentUser", JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem("currentUser")
    // Also sign out from NextAuth
    await nextAuthSignOut({ redirect: false })
  }

  return <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
