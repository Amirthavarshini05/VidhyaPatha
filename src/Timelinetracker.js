import React from "react";
import logo from './logo.svg';
import {
  FileText,
  BookOpen,
  Building2,
  GraduationCap,
  FolderDot,
  CalendarCheck,
  User,
} from "lucide-react";

const TimelineTracker = ({ goBack, handlePageChange }) => {
  // Mock data for upcoming events
  const upcomingEvents = [
    { date: "Oct 15", event: "Application deadline for XYZ University" },
    { date: "Oct 25", event: "Scholarship exam for ABC Foundation" },
    { date: "Nov 05", event: "Interview for internship at TechCorp" },
    { date: "Nov 15", event: "GRE/SAT exam date" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navbar - Styled to match previous pages */}
      

      {/* Main Content Area */}
      <div className="flex flex-1 p-8">
        {/* Main Body - Interactive Calendar */}
        <main className="flex-1 mr-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Academic Timeline</h2>
            <p className="text-gray-600 mb-8">
              Track important dates for admissions, scholarships, and exams to stay on top of your schedule.
            </p>

            {/* Interactive Calendar Placeholder with gradient background */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 h-96 flex items-center justify-center text-gray-500 text-center font-semibold text-xl border border-gray-200">
                Interactive Calendar Placeholder
                <br />(This section will display a dynamic calendar)
              </div>
              {/* Reminder Buttons with matching color scheme */}
              <div className="flex items-center justify-center mt-6 space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition transform hover:scale-105">
                  Set Email Reminders
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition transform hover:scale-105">
                  Set App Notifications
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Side Panel - Upcoming Events */}
        <aside className="w-80 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
          <ul className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="text-sm font-semibold text-gray-500">{event.date}</p>
                <p className="text-gray-800 font-medium">{event.event}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Minimal Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center py-4 border-t border-gray-200 mt-auto">
        &copy; 2025 Career Website. All rights reserved.
      </footer>
    </div>
  );
};

export default TimelineTracker;