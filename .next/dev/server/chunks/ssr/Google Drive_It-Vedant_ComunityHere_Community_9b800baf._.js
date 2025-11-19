module.exports = [
"[project]/Google Drive/It-Vedant/ComunityHere/Community/lib/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colleges",
    ()=>colleges,
    "events",
    ()=>events,
    "leaderboard",
    ()=>leaderboard,
    "polls",
    ()=>polls,
    "recruitments",
    ()=>recruitments,
    "threads",
    ()=>threads
]);
const events = [
    {
        id: "1",
        title: "Web Development Workshop",
        description: "Learn modern web development with React and Next.js. Perfect for beginners and intermediate developers.",
        date: "2024-11-15",
        time: "10:00 AM",
        location: "Tech Lab, Building A",
        category: "Workshop",
        image: "/web-development-workshop.png",
        attendees: 45,
        capacity: 100,
        tags: [
            "React",
            "Next.js",
            "Web Dev"
        ],
        timeline: [
            {
                phase: "Registration Opens",
                date: "2024-11-01"
            },
            {
                phase: "Workshop Day",
                date: "2024-11-15"
            },
            {
                phase: "Certificates Issued",
                date: "2024-11-20"
            }
        ],
        faq: [
            {
                question: "Do I need prior experience?",
                answer: "Basic HTML/CSS knowledge is recommended but not required."
            },
            {
                question: "Will certificates be provided?",
                answer: "Yes, all participants will receive completion certificates."
            }
        ]
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
        tags: [
            "Coding",
            "Competition",
            "Prizes"
        ],
        timeline: [
            {
                phase: "Registration Opens",
                date: "2024-11-05"
            },
            {
                phase: "Competition Day",
                date: "2024-11-20"
            },
            {
                phase: "Results Announced",
                date: "2024-11-22"
            }
        ],
        faq: [
            {
                question: "What languages are allowed?",
                answer: "C++, Python, Java, and JavaScript are supported."
            },
            {
                question: "Can I participate solo?",
                answer: "Yes, both individual and team participation is allowed."
            }
        ]
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
        tags: [
            "AI",
            "Machine Learning",
            "Tech Talk"
        ],
        timeline: [
            {
                phase: "Registration Opens",
                date: "2024-11-10"
            },
            {
                phase: "Tech Talk",
                date: "2024-11-25"
            },
            {
                phase: "Recording Available",
                date: "2024-11-26"
            }
        ],
        faq: [
            {
                question: "Will the talk be recorded?",
                answer: "Yes, recordings will be available for registered participants."
            },
            {
                question: "Do I need to register in advance?",
                answer: "Yes, registration is required for attendance."
            }
        ]
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
        tags: [
            "Networking",
            "Career",
            "Social"
        ],
        timeline: [
            {
                phase: "Registration Opens",
                date: "2024-11-15"
            },
            {
                phase: "Mixer Event",
                date: "2024-11-28"
            }
        ],
        faq: [
            {
                question: "Is this event free?",
                answer: "Yes, completely free for all students."
            },
            {
                question: "What should I bring?",
                answer: "Just bring yourself and your business cards if you have them."
            }
        ]
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
        tags: [
            "Design",
            "Innovation",
            "Workshop"
        ],
        timeline: [
            {
                phase: "Registration Opens",
                date: "2024-11-18"
            },
            {
                phase: "Workshop Day",
                date: "2024-12-02"
            },
            {
                phase: "Project Showcase",
                date: "2024-12-09"
            }
        ],
        faq: [
            {
                question: "Do I need design experience?",
                answer: "No, this workshop is for everyone regardless of background."
            },
            {
                question: "Will we work on real projects?",
                answer: "Yes, you will work on real-world case studies."
            }
        ]
    }
];
const polls = [
    {
        id: "poll-1",
        eventId: "1",
        question: "Which framework would you like to learn next?",
        options: [
            {
                id: "opt-1",
                text: "Vue.js",
                votes: 24
            },
            {
                id: "opt-2",
                text: "Angular",
                votes: 18
            },
            {
                id: "opt-3",
                text: "Svelte",
                votes: 32
            },
            {
                id: "opt-4",
                text: "Remix",
                votes: 15
            }
        ],
        status: "active",
        totalVotes: 89
    },
    {
        id: "poll-2",
        eventId: "2",
        question: "Best time for next competition?",
        options: [
            {
                id: "opt-1",
                text: "Morning (9 AM)",
                votes: 45
            },
            {
                id: "opt-2",
                text: "Afternoon (2 PM)",
                votes: 78
            },
            {
                id: "opt-3",
                text: "Evening (6 PM)",
                votes: 32
            }
        ],
        status: "active",
        totalVotes: 155
    },
    {
        id: "poll-3",
        eventId: "3",
        question: "Most interesting AI topic?",
        options: [
            {
                id: "opt-1",
                text: "Generative AI",
                votes: 120
            },
            {
                id: "opt-2",
                text: "Computer Vision",
                votes: 85
            },
            {
                id: "opt-3",
                text: "NLP",
                votes: 95
            },
            {
                id: "opt-4",
                text: "Reinforcement Learning",
                votes: 60
            }
        ],
        status: "closed",
        totalVotes: 360
    }
];
const leaderboard = [
    {
        rank: 1,
        name: "Arjun Sharma",
        department: "CSE",
        score: 2850,
        events: 12
    },
    {
        rank: 2,
        name: "Priya Patel",
        department: "IT",
        score: 2720,
        events: 11
    },
    {
        rank: 3,
        name: "Rahul Kumar",
        department: "CSE",
        score: 2650,
        events: 10
    },
    {
        rank: 4,
        name: "Neha Singh",
        department: "ECE",
        score: 2480,
        events: 9
    },
    {
        rank: 5,
        name: "Vikram Reddy",
        department: "CSE",
        score: 2350,
        events: 8
    },
    {
        rank: 6,
        name: "Anjali Gupta",
        department: "IT",
        score: 2200,
        events: 8
    },
    {
        rank: 7,
        name: "Rohan Verma",
        department: "CSE",
        score: 2100,
        events: 7
    },
    {
        rank: 8,
        name: "Divya Nair",
        department: "ECE",
        score: 1950,
        events: 7
    },
    {
        rank: 9,
        name: "Aditya Joshi",
        department: "IT",
        score: 1850,
        events: 6
    },
    {
        rank: 10,
        name: "Shreya Desai",
        department: "CSE",
        score: 1750,
        events: 6
    }
];
const recruitments = [
    {
        id: "rec-1",
        committee: "Tech Club",
        positions: [
            "President",
            "Vice President",
            "Technical Lead"
        ],
        status: "active",
        startDate: "2024-11-01",
        endDate: "2024-11-30",
        description: "Join our tech club leadership team and lead innovative projects.",
        requirements: [
            "Active participation in events",
            "Technical knowledge",
            "Leadership skills"
        ],
        interviewDate: "2024-12-05"
    },
    {
        id: "rec-2",
        committee: "Design Club",
        positions: [
            "Design Lead",
            "Content Creator"
        ],
        status: "active",
        startDate: "2024-11-05",
        endDate: "2024-12-05",
        description: "Help us create amazing visual content and lead design initiatives.",
        requirements: [
            "Portfolio of work",
            "Design software proficiency",
            "Creative thinking"
        ],
        interviewDate: "2024-12-10"
    },
    {
        id: "rec-3",
        committee: "Event Management",
        positions: [
            "Event Coordinator",
            "Logistics Manager",
            "Sponsorship Lead"
        ],
        status: "active",
        startDate: "2024-11-10",
        endDate: "2024-12-10",
        description: "Organize and manage college events with a dynamic team.",
        requirements: [
            "Event planning experience",
            "Communication skills",
            "Organizational ability"
        ],
        interviewDate: "2024-12-15"
    },
    {
        id: "rec-4",
        committee: "Content Writing",
        positions: [
            "Editor",
            "Writer",
            "Social Media Manager"
        ],
        status: "closed",
        startDate: "2024-10-15",
        endDate: "2024-11-15",
        description: "Create engaging content for our community.",
        requirements: [
            "Writing skills",
            "Social media knowledge",
            "Creativity"
        ],
        interviewDate: "2024-11-20"
    },
    {
        id: "rec-5",
        committee: "Finance Club",
        positions: [
            "Treasurer",
            "Finance Analyst"
        ],
        status: "active",
        startDate: "2024-11-08",
        endDate: "2024-12-08",
        description: "Manage finances and organize finance-related events.",
        requirements: [
            "Financial knowledge",
            "Analytical skills",
            "Attention to detail"
        ],
        interviewDate: "2024-12-12"
    },
    {
        id: "rec-6",
        committee: "Sports Committee",
        positions: [
            "Sports Coordinator",
            "Event Organizer"
        ],
        status: "active",
        startDate: "2024-11-12",
        endDate: "2024-12-12",
        description: "Organize sports events and manage athletic programs.",
        requirements: [
            "Sports enthusiasm",
            "Organizational skills",
            "Team player mentality"
        ],
        interviewDate: "2024-12-18"
    }
];
const colleges = [
    "IIT Delhi",
    "IIT Bombay",
    "IIT Madras",
    "IIT Kanpur",
    "IIT Kharagpur",
    "NIT Trichy",
    "BITS Pilani",
    "Delhi University"
];
const threads = [
    {
        id: "thread-1",
        userId: "user-1",
        userName: "Arjun Sharma",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
        userCollege: "IIT Delhi",
        title: "Best resources for learning React in 2024?",
        content: "Hey everyone! I'm starting to learn React and would love to know what resources you all found most helpful. Any recommendations for courses, tutorials, or books?",
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
                content: "I'd recommend the official React documentation and then move to Next.js. The learning curve is smooth!",
                timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(),
                likes: 12,
                userCollege: "IIT Bombay"
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
                userCollege: "NIT Trichy"
            }
        ]
    },
    {
        id: "thread-2",
        userId: "user-4",
        userName: "Neha Singh",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neha",
        userCollege: "BITS Pilani",
        title: "Internship opportunities in tech companies",
        content: "Has anyone interned at Google, Microsoft, or Amazon? Would love to hear about your experience and tips for getting selected!",
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
                userCollege: "IIT Madras"
            }
        ]
    },
    {
        id: "thread-3",
        userId: "user-6",
        userName: "Anjali Gupta",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anjali",
        userCollege: "Delhi University",
        title: "Project ideas for portfolio building",
        content: "Looking for some cool project ideas that would look good on a portfolio. Any suggestions? Preferably something that uses modern tech stack.",
        category: "Projects",
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        likes: 18,
        views: 89,
        isPinned: false,
        replies: []
    },
    {
        id: "thread-4",
        userId: "user-7",
        userName: "Rohan Verma",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rohan",
        userCollege: "IIT Kanpur",
        title: "Web Development vs Mobile Development - which to choose?",
        content: "I'm confused between specializing in web dev or mobile dev. What are the pros and cons of each? Which has better job prospects?",
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
                userCollege: "IIT Kharagpur"
            }
        ]
    },
    {
        id: "thread-5",
        userId: "user-9",
        userName: "Aditya Joshi",
        userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aditya",
        userCollege: "NIT Trichy",
        title: "Anyone interested in starting a startup?",
        content: "I have an idea for an EdTech startup and looking for co-founders. If interested, let's connect and discuss!",
        category: "Opportunities",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        likes: 28,
        views: 112,
        isPinned: false,
        replies: []
    }
];
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeaderboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/lib/mockData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/icons/medal.js [app-ssr] (ecmascript) <export default as Medal>");
"use client";
;
;
;
function LeaderboardPage() {
    const podium = __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leaderboard"].slice(0, 3);
    const rest = __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leaderboard"].slice(3);
    const getMedalColor = (rank)=>{
        switch(rank){
            case 1:
                return "from-yellow-400 to-yellow-600";
            case 2:
                return "from-gray-300 to-gray-500";
            case 3:
                return "from-orange-400 to-orange-600";
            default:
                return "from-teal-400 to-blue-600";
        }
    };
    const getMedalIcon = (rank)=>{
        if (rank <= 3) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
            lineNumber: 24,
            columnNumber: 27
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
            lineNumber: 25,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "Leaderboard"
                        }, void 0, false, {
                            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-lg",
                            children: "Top performers in our community"
                        }, void 0, false, {
                            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                        children: [
                            podium[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-gradient-to-br ${getMedalColor(2)} rounded-xl p-8 w-full text-white text-center mb-4 card-shadow`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl font-bold mb-2",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-2",
                                                children: getMedalIcon(2)
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold",
                                                children: podium[1].name
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm opacity-90",
                                                children: podium[1].department
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg p-4 w-full card-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-gray-900",
                                                        children: podium[1].score
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Events"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-gray-900",
                                                        children: podium[1].events
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            podium[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center md:order-first",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-gradient-to-br ${getMedalColor(1)} rounded-xl p-8 w-full text-white text-center mb-4 card-shadow transform md:scale-110`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-6xl font-bold mb-2",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-2 text-3xl",
                                                children: getMedalIcon(1)
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold",
                                                children: podium[0].name
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm opacity-90",
                                                children: podium[0].department
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg p-4 w-full card-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-gray-900",
                                                        children: podium[0].score
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Events"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-gray-900",
                                                        children: podium[0].events
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this),
                            podium[2] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bg-gradient-to-br ${getMedalColor(3)} rounded-xl p-8 w-full text-white text-center mb-4 card-shadow`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl font-bold mb-2",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-2",
                                                children: getMedalIcon(3)
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold",
                                                children: podium[2].name
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm opacity-90",
                                                children: podium[2].department
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg p-4 w-full card-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-gray-900",
                                                        children: podium[2].score
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-600",
                                                        children: "Events"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-gray-900",
                                                        children: podium[2].events
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl overflow-hidden card-shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "gradient-primary text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-semibold",
                                                children: "Rank"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-semibold",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-semibold",
                                                children: "Department"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-right font-semibold",
                                                children: "Score"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-right font-semibold",
                                                children: "Events"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leaderboard"].map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: `border-b border-gray-200 hover:bg-gray-50 transition-colors ${index < 3 ? "bg-gradient-to-r from-teal-50 to-blue-50" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-8 h-8 rounded-full bg-gradient-to-br ${getMedalColor(entry.rank)} flex items-center justify-center text-white font-bold text-sm`,
                                                            children: entry.rank
                                                        }, void 0, false, {
                                                            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 font-semibold text-gray-900",
                                                    children: entry.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-gray-600",
                                                    children: entry.department
                                                }, void 0, false, {
                                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-right font-bold text-teal-600",
                                                    children: entry.score
                                                }, void 0, false, {
                                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-right font-bold text-blue-600",
                                                    children: entry.events
                                                }, void 0, false, {
                                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, entry.rank, true, {
                                            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/leaderboard/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Trophy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Trophy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Trophy", [
    [
        "path",
        {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }
    ],
    [
        "path",
        {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }
    ]
]);
;
 //# sourceMappingURL=trophy.js.map
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trophy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript)");
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/icons/medal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Medal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Medal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Medal", [
    [
        "path",
        {
            d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
            key: "143lza"
        }
    ],
    [
        "path",
        {
            d: "M11 12 5.12 2.2",
            key: "qhuxz6"
        }
    ],
    [
        "path",
        {
            d: "m13 12 5.88-9.8",
            key: "hbye0f"
        }
    ],
    [
        "path",
        {
            d: "M8 7h8",
            key: "i86dvs"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "17",
            r: "5",
            key: "qbz8iq"
        }
    ],
    [
        "path",
        {
            d: "M12 18v-2h-.5",
            key: "fawc4q"
        }
    ]
]);
;
 //# sourceMappingURL=medal.js.map
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/icons/medal.js [app-ssr] (ecmascript) <export default as Medal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Medal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/lucide-react/dist/esm/icons/medal.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=Google%20Drive_It-Vedant_ComunityHere_Community_9b800baf._.js.map