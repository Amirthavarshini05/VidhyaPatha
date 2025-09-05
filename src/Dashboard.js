import React from "react";
import { FileText, BookOpen, Building2, GraduationCap } from "lucide-react";

const Dashboard = ({ name = "User" }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
      <main className="flex-1 px-8 py-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">
            Hi {name}, Ready to plan your career?
          </h2>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <FileText className="h-20 w-20 mx-auto mb-4 text-blue-600" />
            <button
              className="w-full text-blue-600 font-bold text-lg hover:text-blue-800"
            >
              Take Aptitude Test
            </button>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <BookOpen className="h-20 w-20 mx-auto mb-4 text-green-600" />
            <button className="w-full text-blue-600 font-bold text-lg hover:text-blue-800">
              Explore Suggested Courses
            </button>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <Building2 className="h-20 w-20 mx-auto mb-4 text-indigo-600" />
            <button className="w-full text-blue-600 font-bold text-lg hover:text-blue-800">
              Find Colleges
            </button>
          </div>

          <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <GraduationCap className="h-20 w-20 mx-auto mb-4 text-yellow-600" />
            <button className="w-full text-blue-600 font-bold text-lg hover:text-blue-800">
              Check Scholarships
            </button>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-md">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            Progress Tracker
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full animate-pulse"
              style={{ width: "60%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Profile/test completion: 60%
          </p>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-md">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
            Notifications
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full"></span>
              <span>Application deadline for XYZ College: Sept 10</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-2 h-2 mt-2 bg-green-600 rounded-full"></span>
              <span>Scholarship results announced soon</span>
            </li>
          </ul>
        </div>
      </main>

      <footer className="bg-gray-100 text-gray-600 text-center py-4 border-t border-gray-200 shadow-inner">
        &copy; 2025 Career Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;

