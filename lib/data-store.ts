import type { Event, Poll, Recruitment } from "./mockData"

// Store for dynamically created content
let dynamicEvents: Event[] = []
let dynamicPolls: Poll[] = []
let dynamicRecruitments: Recruitment[] = []

let eventRegistrations: { [eventId: string]: string[] } = {}
let recruitmentApplications: { [recruitmentId: string]: string[] } = {}
let pollVotes: { [pollId: string]: { [userId: string]: string } } = {}

export const dataStore = {
  // Events
  addEvent: (event: Event) => {
    dynamicEvents.push(event)
    localStorage.setItem("dynamicEvents", JSON.stringify(dynamicEvents))
  },
  getEvents: () => dynamicEvents,
  clearEvents: () => {
    dynamicEvents = []
    localStorage.removeItem("dynamicEvents")
  },

  // Polls
  addPoll: (poll: Poll) => {
    dynamicPolls.push(poll)
    localStorage.setItem("dynamicPolls", JSON.stringify(dynamicPolls))
  },
  getPolls: () => dynamicPolls,
  clearPolls: () => {
    dynamicPolls = []
    localStorage.removeItem("dynamicPolls")
  },

  voteInPoll: (pollId: string, userId: string, optionId: string) => {
    if (!pollVotes[pollId]) {
      pollVotes[pollId] = {}
    }
    pollVotes[pollId][userId] = optionId
    localStorage.setItem("pollVotes", JSON.stringify(pollVotes))
  },

  getPollVotes: (pollId: string) => {
    return pollVotes[pollId] || {}
  },

  // Recruitments
  addRecruitment: (recruitment: Recruitment) => {
    dynamicRecruitments.push(recruitment)
    localStorage.setItem("dynamicRecruitments", JSON.stringify(dynamicRecruitments))
  },
  getRecruitments: () => dynamicRecruitments,
  clearRecruitments: () => {
    dynamicRecruitments = []
    localStorage.removeItem("dynamicRecruitments")
  },

  registerForEvent: (eventId: string, userId: string) => {
    if (!eventRegistrations[eventId]) {
      eventRegistrations[eventId] = []
    }
    if (!eventRegistrations[eventId].includes(userId)) {
      eventRegistrations[eventId].push(userId)
      localStorage.setItem("eventRegistrations", JSON.stringify(eventRegistrations))
    }
  },

  getEventRegistrations: (eventId: string) => {
    return eventRegistrations[eventId] || []
  },

  getTotalEventRegistrations: () => {
    return Object.values(eventRegistrations).reduce((sum, regs) => sum + regs.length, 0)
  },

  applyForRecruitment: (recruitmentId: string, userId: string) => {
    if (!recruitmentApplications[recruitmentId]) {
      recruitmentApplications[recruitmentId] = []
    }
    if (!recruitmentApplications[recruitmentId].includes(userId)) {
      recruitmentApplications[recruitmentId].push(userId)
      localStorage.setItem("recruitmentApplications", JSON.stringify(recruitmentApplications))
    }
  },

  getRecruitmentApplications: (recruitmentId: string) => {
    return recruitmentApplications[recruitmentId] || []
  },

  getTotalRecruitmentApplications: () => {
    return Object.values(recruitmentApplications).reduce((sum, apps) => sum + apps.length, 0)
  },

  // Initialize from localStorage
  initialize: () => {
    const storedEvents = localStorage.getItem("dynamicEvents")
    const storedPolls = localStorage.getItem("dynamicPolls")
    const storedRecruitments = localStorage.getItem("dynamicRecruitments")
    const storedRegistrations = localStorage.getItem("eventRegistrations")
    const storedApplications = localStorage.getItem("recruitmentApplications")
    const storedVotes = localStorage.getItem("pollVotes")

    if (storedEvents) dynamicEvents = JSON.parse(storedEvents)
    if (storedPolls) dynamicPolls = JSON.parse(storedPolls)
    if (storedRecruitments) dynamicRecruitments = JSON.parse(storedRecruitments)
    if (storedRegistrations) eventRegistrations = JSON.parse(storedRegistrations)
    if (storedApplications) recruitmentApplications = JSON.parse(storedApplications)
    if (storedVotes) pollVotes = JSON.parse(storedVotes)
  },
}
