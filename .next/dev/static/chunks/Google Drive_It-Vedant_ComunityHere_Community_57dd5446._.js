(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Google Drive/It-Vedant/ComunityHere/Community/lib/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
                likes: 12
            },
            {
                id: "reply-2",
                userId: "user-3",
                userName: "Rahul Kumar",
                userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
                userCollege: "NIT Trichy",
                content: "Scrimba has amazing interactive React courses. Highly recommend!",
                timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
                likes: 8
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
                likes: 32
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
                likes: 15
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/lib/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SignupPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        college: "",
        department: ""
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const departments = [
        "Computer Science",
        "Information Technology",
        "Electronics",
        "Mechanical",
        "Civil",
        "Other"
    ];
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            if (!formData.name || !formData.email || !formData.password || !formData.college || !formData.department) {
                setError("Please fill in all fields");
                setIsLoading(false);
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                setError("Passwords do not match");
                setIsLoading(false);
                return;
            }
            if (formData.password.length < 6) {
                setError("Password must be at least 6 characters");
                setIsLoading(false);
                return;
            }
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    college: formData.college,
                    department: formData.department,
                    role: "student"
                })
            });
            if (!response.ok) {
                const data = await response.json();
                setError(data.error || "Signup failed");
                setIsLoading(false);
                return;
            }
            router.push("/login");
        } catch (err) {
            setError("Signup failed. Please try again.");
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-4 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl card-shadow p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4",
                                children: "CH"
                            }, void 0, false, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900 mb-2",
                                children: "Join CommunityHere"
                            }, void 0, false, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Create your account and connect with your college community"
                            }, void 0, false, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Full Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        value: formData.name,
                                        onChange: handleChange,
                                        placeholder: "John Doe",
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleChange,
                                        placeholder: "your@email.com",
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "College"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "college",
                                        value: formData.college,
                                        onChange: handleChange,
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select your college"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colleges"].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: col,
                                                    children: col
                                                }, col, false, {
                                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Department"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "department",
                                        value: formData.department,
                                        onChange: handleChange,
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select your department"
                                            }, void 0, false, {
                                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: dept,
                                                    children: dept
                                                }, dept, false, {
                                                    fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Password"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        name: "password",
                                        value: formData.password,
                                        onChange: handleChange,
                                        placeholder: "••••••••",
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Confirm Password"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        name: "confirmPassword",
                                        value: formData.confirmPassword,
                                        onChange: handleChange,
                                        placeholder: "••••••••",
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isLoading,
                                className: "w-full gradient-primary text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50",
                                children: isLoading ? "Creating Account..." : "Create Account"
                            }, void 0, false, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-4",
                                children: "Already have an account?"
                            }, void 0, false, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    "Sign In"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Google Drive/It-Vedant/ComunityHere/Community/app/signup/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(SignupPage, "sqxdxFjyRhDyaNukTHBampfuJwI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/next@16.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Google__Drive$2f$It$2d$Vedant$2f$ComunityHere$2f$Community$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Google Drive/It-Vedant/ComunityHere/Community/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Google%20Drive_It-Vedant_ComunityHere_Community_57dd5446._.js.map