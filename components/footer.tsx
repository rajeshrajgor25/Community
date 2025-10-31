import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CommunityHere</h3>
            <p className="text-gray-400">Connecting students through events, competitions, and community engagement.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/events" className="hover:text-teal-400">
                  Events
                </a>
              </li>
              <li>
                <a href="/recruitment" className="hover:text-teal-400">
                  Recruitment
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="hover:text-teal-400">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@communityhere.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>College Campus</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CommunityHere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
