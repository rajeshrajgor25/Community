# CommunityHere - Setup Guide

## Project Overview
CommunityHere is a comprehensive college event management platform with:
- Student and Committee Admin authentication
- Google OAuth integration
- MongoDB database integration
- Event management, polls, recruitment, and discussions
- Real-time registration tracking and analytics

## Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account
- Google Cloud Console account for OAuth
- Git (optional)

## Installation Steps

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

All packages are listed in `requirements.txt` and already configured in `package.json`.

### 2. Setup MongoDB Atlas

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new project called "CommunityHere"
4. Create a cluster (free tier M0 is fine)
5. Create a database user with username and password
6. Get your connection string:
   - Click "Connect"
   - Select "Drivers"
   - Copy the connection string
7. Replace `<username>`, `<password>`, and `<dbname>` in your `.env.local`

### 3. Setup Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable "Google+ API"
4. Create OAuth 2.0 credentials:
   - Select "Web application"
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
5. Copy Client ID and Client Secret to `.env.local`

### 4. Generate NextAuth Secret

Run this command to generate a secure secret:
\`\`\`bash
openssl rand -base64 32
\`\`\`

Copy the output to `NEXTAUTH_SECRET` in `.env.local`

### 5. Create .env.local File

Create a `.env.local` file in the root directory with:

\`\`\`env
# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/communityhere?retryWrites=true&w=majority

# NextAuth
NEXTAUTH_SECRET=<generated-secret-from-step-4>
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
\`\`\`

### 6. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` in your browser.

## Default Test Credentials

### Student Login
- Email: `student@example.com`
- Password: `password123`
- College: IIT Delhi

### Committee Login
- Email: `admin@example.com`
- Password: `admin123`
- College: IIT Delhi
- Committee: Technical

Or use **Google OAuth** to sign in with your Google account.

## Project Structure

\`\`\`
app/
├── api/
│   ├── auth/
│   │   ├── [...nextauth]/route.ts     # NextAuth configuration
│   │   ├── login/route.ts             # Login API
│   │   └── signup/route.ts            # Signup API
│   ├── events/route.ts                # Events API
│   ├── polls/route.ts                 # Polls API
│   └── leaderboard/route.ts           # Leaderboard API
├── events/
│   ├── page.tsx                       # Events listing
│   └── [id]/page.tsx                  # Event detail & registration
├── login/page.tsx                     # Student login
├── signup/page.tsx                    # Student signup
├── committee-login/page.tsx           # Committee login
├── committee-signup/page.tsx          # Committee signup
├── admin/
│   ├── dashboard/page.tsx             # Admin dashboard
│   ├── create-event/page.tsx          # Create event form
│   ├── create-poll/page.tsx           # Create poll form
│   └── create-recruitment/page.tsx    # Create recruitment form
├── discussions/page.tsx               # Discussion threads
├── leaderboard/page.tsx               # Leaderboard
└── layout.tsx                         # Root layout with NextAuth provider

lib/
├── mongodb.ts                         # MongoDB connection
├── auth-context.tsx                   # Client-side auth context
├── data-store.ts                      # Client-side data store
└── utils.ts                           # Utility functions
\`\`\`

## Key Features

### Student Features
- Browse and register for events
- Participate in polls
- Apply for recruitment drives
- Join discussions
- View leaderboard
- Update profile

### Committee Admin Features
- Create and manage events
- Create and manage polls
- Create and manage recruitment drives
- View registration statistics
- Track applications

### Authentication
- Email/password authentication with bcrypt hashing
- Google OAuth integration
- Role-based access control (student vs. committee)
- Session management with NextAuth

## API Endpoints

### Authentication
- `POST /api/auth/login` - Student login
- `POST /api/auth/signup` - Student signup
- `GET /api/auth/session` - Get current session

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create event (admin)
- `PUT /api/events/:id` - Update event (admin)

### Polls
- `GET /api/polls` - Get all polls
- `POST /api/polls` - Create poll (admin)

### Leaderboard
- `GET /api/leaderboard` - Get leaderboard data

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Add environment variables:
   - `MONGODB_URI`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your Vercel domain)
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
4. Deploy!

## Troubleshooting

### "Event Not Found"
- Ensure the event ID is correct
- Check MongoDB connection
- Verify event exists in database

### Google OAuth Not Working
- Check Client ID and Client Secret
- Verify redirect URI matches exactly
- Clear cookies and try again

### MongoDB Connection Error
- Check connection string format
- Verify database user credentials
- Ensure IP address is whitelisted in MongoDB Atlas

## Support

For issues, check:
1. `.env.local` file is configured correctly
2. MongoDB Atlas database is accessible
3. Google OAuth credentials are valid
4. Console logs for error messages

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| MONGODB_URI | MongoDB connection string | mongodb+srv://... |
| NEXTAUTH_SECRET | NextAuth secret key | openssl rand -base64 32 |
| NEXTAUTH_URL | NextAuth URL | http://localhost:3000 |
| GOOGLE_CLIENT_ID | Google OAuth Client ID | xxxxxxx.apps.googleusercontent.com |
| GOOGLE_CLIENT_SECRET | Google OAuth Client Secret | xxxxx |
