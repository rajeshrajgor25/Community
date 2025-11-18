export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  image: string
  attendees: number
  capacity: number
  tags: string[]
  timeline: { phase: string; date: string }[]
  faq: { question: string; answer: string }[]
}

export interface Poll {
  id: string
  eventId: string
  question: string
  options: { id: string; text: string; votes: number }[]
  status: "active" | "closed"
  totalVotes: number
}

export interface LeaderboardEntry {
  rank: number
  name: string
  department: string
  score: number
  events: number
}

export interface Recruitment {
  id: string
  committee: string
  positions: string[]
  status: "active" | "closed"
  startDate: string
  endDate: string
  description: string
  requirements: string[]
  interviewDate: string
}

export const events: Event[] = [
  {
    id: "1",
    title: "Web Development Workshop",
    description:
      "Learn modern web development with React and Next.js. Perfect for beginners and intermediate developers.",
    date: "2024-11-15",
    time: "10:00 AM",
    location: "Tech Lab, Building A",
    category: "Workshop",
    image: "/web-development-workshop.png",
    attendees: 45,
    capacity: 100,
    tags: ["React", "Next.js", "Web Dev"],
    timeline: [
      { phase: "Registration Opens", date: "2024-11-01" },
      { phase: "Workshop Day", date: "2024-11-15" },
      { phase: "Certificates Issued", date: "2024-11-20" },
    ],
    faq: [
      { question: "Do I need prior experience?", answer: "Basic HTML/CSS knowledge is recommended but not required." },
      {
        question: "Will certificates be provided?",
        answer: "Yes, all participants will receive completion certificates.",
      },
    ],
  },
  {
    id: "2",
    title: "Annual Coding Competition",
    description: "Compete with peers in a 4-hour coding challenge. Win prizes and recognition!",
    date: "2024-11-20",
    time: "2:00 PM",
    location: "Computer Lab, Building B",
    category: "Competition",
    image: "/coding-competition.png",
    attendees: 120,
    capacity: 150,
    tags: ["Coding", "Competition", "Prizes"],
    timeline: [
      { phase: "Registration Opens", date: "2024-11-05" },
      { phase: "Competition Day", date: "2024-11-20" },
      { phase: "Results Announced", date: "2024-11-22" },
    ],
    faq: [
      { question: "What languages are allowed?", answer: "C++, Python, Java, and JavaScript are supported." },
      { question: "Can I participate solo?", answer: "Yes, both individual and team participation is allowed." },
    ],
  },
  {
    id: "3",
    title: "Tech Talk: AI & Machine Learning",
    description: "Industry experts discuss the latest trends in AI and ML. Q&A session included.",
    date: "2024-11-25",
    time: "4:00 PM",
    location: "Auditorium, Main Building",
    category: "Seminar",
    image: "/ai-machine-learning-seminar.jpg",
    attendees: 200,
    capacity: 300,
    tags: ["AI", "Machine Learning", "Tech Talk"],
    timeline: [
      { phase: "Registration Opens", date: "2024-11-10" },
      { phase: "Tech Talk", date: "2024-11-25" },
      { phase: "Recording Available", date: "2024-11-26" },
    ],
    faq: [
      {
        question: "Will the talk be recorded?",
        answer: "Yes, recordings will be available for registered participants.",
      },
      { question: "Do I need to register in advance?", answer: "Yes, registration is required for attendance." },
    ],
  },
  {
    id: "4",
    title: "Networking Mixer",
    description: "Connect with industry professionals, alumni, and fellow students. Light refreshments provided.",
    date: "2024-11-28",
    time: "6:00 PM",
    location: "Student Center, Ground Floor",
    category: "Networking",
    image: "/networking-event.png",
    attendees: 85,
    capacity: 200,
    tags: ["Networking", "Career", "Social"],
    timeline: [
      { phase: "Registration Opens", date: "2024-11-15" },
      { phase: "Mixer Event", date: "2024-11-28" },
    ],
    faq: [
      { question: "Is this event free?", answer: "Yes, completely free for all students." },
      { question: "What should I bring?", answer: "Just bring yourself and your business cards if you have them." },
    ],
  },
  {
    id: "5",
    title: "Design Thinking Workshop",
    description: "Learn design thinking methodology and apply it to real-world problems.",
    date: "2024-12-02",
    time: "11:00 AM",
    location: "Innovation Hub, Building C",
    category: "Workshop",
    image: "/design-thinking-workshop.png",
    attendees: 60,
    capacity: 80,
    tags: ["Design", "Innovation", "Workshop"],
    timeline: [
      { phase: "Registration Opens", date: "2024-11-18" },
      { phase: "Workshop Day", date: "2024-12-02" },
      { phase: "Project Showcase", date: "2024-12-09" },
    ],
    faq: [
      {
        question: "Do I need design experience?",
        answer: "No, this workshop is for everyone regardless of background.",
      },
      { question: "Will we work on real projects?", answer: "Yes, you will work on real-world case studies." },
    ],
  },
]

export const polls: Poll[] = [
  {
    id: "poll-1",
    eventId: "1",
    question: "Which framework would you like to learn next?",
    options: [
      { id: "opt-1", text: "Vue.js", votes: 24 },
      { id: "opt-2", text: "Angular", votes: 18 },
      { id: "opt-3", text: "Svelte", votes: 32 },
      { id: "opt-4", text: "Remix", votes: 15 },
    ],
    status: "active",
    totalVotes: 89,
  },
  {
    id: "poll-2",
    eventId: "2",
    question: "Best time for next competition?",
    options: [
      { id: "opt-1", text: "Morning (9 AM)", votes: 45 },
      { id: "opt-2", text: "Afternoon (2 PM)", votes: 78 },
      { id: "opt-3", text: "Evening (6 PM)", votes: 32 },
    ],
    status: "active",
    totalVotes: 155,
  },
  {
    id: "poll-3",
    eventId: "3",
    question: "Most interesting AI topic?",
    options: [
      { id: "opt-1", text: "Generative AI", votes: 120 },
      { id: "opt-2", text: "Computer Vision", votes: 85 },
      { id: "opt-3", text: "NLP", votes: 95 },
      { id: "opt-4", text: "Reinforcement Learning", votes: 60 },
    ],
    status: "closed",
    totalVotes: 360,
  },
]

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Arjun Sharma", department: "CSE", score: 2850, events: 12 },
  { rank: 2, name: "Priya Patel", department: "IT", score: 2720, events: 11 },
  { rank: 3, name: "Rahul Kumar", department: "CSE", score: 2650, events: 10 },
  { rank: 4, name: "Neha Singh", department: "ECE", score: 2480, events: 9 },
  { rank: 5, name: "Vikram Reddy", department: "CSE", score: 2350, events: 8 },
  { rank: 6, name: "Anjali Gupta", department: "IT", score: 2200, events: 8 },
  { rank: 7, name: "Rohan Verma", department: "CSE", score: 2100, events: 7 },
  { rank: 8, name: "Divya Nair", department: "ECE", score: 1950, events: 7 },
  { rank: 9, name: "Aditya Joshi", department: "IT", score: 1850, events: 6 },
  { rank: 10, name: "Shreya Desai", department: "CSE", score: 1750, events: 6 },
]

export const recruitments: Recruitment[] = [
  {
    id: "rec-1",
    committee: "Tech Club",
    positions: ["President", "Vice President", "Technical Lead"],
    status: "active",
    startDate: "2024-11-01",
    endDate: "2024-11-30",
    description: "Join our tech club leadership team and lead innovative projects.",
    requirements: ["Active participation in events", "Technical knowledge", "Leadership skills"],
    interviewDate: "2024-12-05",
  },
  {
    id: "rec-2",
    committee: "Design Club",
    positions: ["Design Lead", "Content Creator"],
    status: "active",
    startDate: "2024-11-05",
    endDate: "2024-12-05",
    description: "Help us create amazing visual content and lead design initiatives.",
    requirements: ["Portfolio of work", "Design software proficiency", "Creative thinking"],
    interviewDate: "2024-12-10",
  },
  {
    id: "rec-3",
    committee: "Event Management",
    positions: ["Event Coordinator", "Logistics Manager", "Sponsorship Lead"],
    status: "active",
    startDate: "2024-11-10",
    endDate: "2024-12-10",
    description: "Organize and manage college events with a dynamic team.",
    requirements: ["Event planning experience", "Communication skills", "Organizational ability"],
    interviewDate: "2024-12-15",
  },
  {
    id: "rec-4",
    committee: "Content Writing",
    positions: ["Editor", "Writer", "Social Media Manager"],
    status: "closed",
    startDate: "2024-10-15",
    endDate: "2024-11-15",
    description: "Create engaging content for our community.",
    requirements: ["Writing skills", "Social media knowledge", "Creativity"],
    interviewDate: "2024-11-20",
  },
  {
    id: "rec-5",
    committee: "Finance Club",
    positions: ["Treasurer", "Finance Analyst"],
    status: "active",
    startDate: "2024-11-08",
    endDate: "2024-12-08",
    description: "Manage finances and organize finance-related events.",
    requirements: ["Financial knowledge", "Analytical skills", "Attention to detail"],
    interviewDate: "2024-12-12",
  },
  {
    id: "rec-6",
    committee: "Sports Committee",
    positions: ["Sports Coordinator", "Event Organizer"],
    status: "active",
    startDate: "2024-11-12",
    endDate: "2024-12-12",
    description: "Organize sports events and manage athletic programs.",
    requirements: ["Sports enthusiasm", "Organizational skills", "Team player mentality"],
    interviewDate: "2024-12-18",
  },
]

export interface Reply {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  timestamp: string
  likes: number
  userCollege: string
}

export interface Thread {
  id: string
  userId: string
  userName: string
  userAvatar: string
  userCollege: string
  title: string
  content: string
  category: string
  timestamp: string
  likes: number
  replies: Reply[]
  views: number
  isPinned: boolean
}

export const colleges = [
  "IIT Delhi",
  "IIT Bombay",
  "IIT Madras",
  "IIT Kanpur",
  "IIT Kharagpur",
  "NIT Trichy",
  "BITS Pilani",
  "Delhi University",
]

export const threads: Thread[] = [
  {
    id: "thread-1",
    userId: "user-1",
    userName: "Arjun Sharma",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    userCollege: "IIT Delhi",
    title: "Best resources for learning React in 2024?",
    content:
      "Hey everyone! I'm starting to learn React and would love to know what resources you all found most helpful. Any recommendations for courses, tutorials, or books?",
    category: "Learning",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    likes: 24,
    views: 156,
    isPinned: false,
    replies: [
      {
        id: "reply-1",
        userId: "user-2",
        userName: "Priya Patel",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
        userCollege: "IIT Bombay",
        content:
          "I'd recommend the official React documentation and then move to Next.js. The learning curve is smooth!",
        timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(),
        likes: 12,
        userCollege: "IIT Bombay",
      },
      {
        id: "reply-2",
        userId: "user-3",
        userName: "Rahul Kumar",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
        userCollege: "NIT Trichy",
        content: "Scrimba has amazing interactive React courses. Highly recommend!",
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
        likes: 8,
        userCollege: "NIT Trichy",
      },
    ],
  },
  {
    id: "thread-2",
    userId: "user-4",
    userName: "Neha Singh",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neha",
    userCollege: "BITS Pilani",
    title: "Internship opportunities in tech companies",
    content:
      "Has anyone interned at Google, Microsoft, or Amazon? Would love to hear about your experience and tips for getting selected!",
    category: "Career",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    likes: 45,
    views: 234,
    isPinned: true,
    replies: [
      {
        id: "reply-3",
        userId: "user-5",
        userName: "Vikram Reddy",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",
        userCollege: "IIT Madras",
        content: "I interned at Google last summer. Focus on DSA and system design. Happy to help with prep!",
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        likes: 32,
        userCollege: "IIT Madras",
      },
    ],
  },
  {
    id: "thread-3",
    userId: "user-6",
    userName: "Anjali Gupta",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anjali",
    userCollege: "Delhi University",
    title: "Project ideas for portfolio building",
    content:
      "Looking for some cool project ideas that would look good on a portfolio. Any suggestions? Preferably something that uses modern tech stack.",
    category: "Projects",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    likes: 18,
    views: 89,
    isPinned: false,
    replies: [],
  },
  {
    id: "thread-4",
    userId: "user-7",
    userName: "Rohan Verma",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rohan",
    userCollege: "IIT Kanpur",
    title: "Web Development vs Mobile Development - which to choose?",
    content:
      "I'm confused between specializing in web dev or mobile dev. What are the pros and cons of each? Which has better job prospects?",
    category: "Career",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    likes: 32,
    views: 145,
    isPinned: false,
    replies: [
      {
        id: "reply-4",
        userId: "user-8",
        userName: "Divya Nair",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=divya",
        userCollege: "IIT Kharagpur",
        content: "Both are great! I'd say learn web first, then mobile. Web fundamentals help with mobile dev.",
        timestamp: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
        likes: 15,
        userCollege: "IIT Kharagpur",
      },
    ],
  },
  {
    id: "thread-5",
    userId: "user-9",
    userName: "Aditya Joshi",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aditya",
    userCollege: "NIT Trichy",
    title: "Anyone interested in starting a startup?",
    content:
      "I have an idea for an EdTech startup and looking for co-founders. If interested, let's connect and discuss!",
    category: "Opportunities",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    likes: 28,
    views: 112,
    isPinned: false,
    replies: [],
  },
]
