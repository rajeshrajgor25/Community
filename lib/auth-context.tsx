"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

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
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

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

  const logout = () => {
    setUser(null)
    localStorage.removeItem("currentUser")
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
