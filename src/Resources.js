import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Video,
  Award,
  Palette,
  Atom,
  Briefcase,
  Cog,
  Stethoscope,
  Activity,
} from "lucide-react";

// 🔹 Categories
const categories = [
  { name: "Arts & Humanities", icon: <Palette className="w-14 h-14 text-pink-600" /> },
  { name: "Literature", icon: <BookOpen className="w-14 h-14 text-green-600" /> },
  { name: "Science", icon: <Atom className="w-14 h-14 text-purple-600" /> },
  { name: "Commerce", icon: <Briefcase className="w-14 h-14 text-orange-600" /> },
  { name: "Engineering", icon: <Cog className="w-14 h-14 text-blue-600" /> },
  { name: "Vocational", icon: <Award className="w-14 h-14 text-red-600" /> },
  { name: "Medical", icon: <Stethoscope className="w-14 h-14 text-teal-600" /> },
  { name: "Medical Specialization", icon: <Activity className="w-14 h-14 text-indigo-600" /> },
];

// 🔹 Sidebar Items
const sidebarItems = {
  ebooks: { label: "E Books", icon: <BookOpen className="w-6 h-6" /> },
  pdfs: { label: "PDFs", icon: <FileText className="w-6 h-6" /> },
  videos: { label: "Video Tutorials", icon: <Video className="w-6 h-6" /> },
  skills: { label: "Skill Materials", icon: <Award className="w-6 h-6" /> },
};

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("ebooks");

  return (
    <div className="flex h-screen font-[Poppins]">
      {/* Sidebar */}
      <aside className="w-80 bg-gradient-to-b from-blue-600 via-blue-400 to-white p-6 shadow-lg flex flex-col justify-between rounded-r-3xl">
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-8 tracking-wide">
            Resources
          </h3>
          <ul className="space-y-4">
            {Object.keys(sidebarItems).map((key) => (
              <li key={key}>
                <button
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl font-semibold text-lg transition ${
                    activeCategory === key
                      ? "bg-white text-blue-700 shadow-lg"
                      : "text-white hover:bg-blue-200/40"
                  }`}
                >
                  {sidebarItems[key].icon}
                  {sidebarItems[key].label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-gray-50">
        <div className="flex-1 p-10 overflow-y-scroll">
          {/* Hero Section */}
          <div className="mb-10 p-8 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl shadow-lg flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-blue-800">
                {activeCategory === "ebooks" && "📖 Dive into E-Books"}
                {activeCategory === "pdfs" && "📂 Explore Study PDFs"}
                {activeCategory === "videos" && "🎥 Learn with Videos"}
                {activeCategory === "skills" && "🚀 Build Your Skills"}
              </h1>
              <p className="text-gray-600 mt-3 text-lg">
                {activeCategory === "ebooks" &&
                  "Read, learn, and grow with digital books anytime."}
                {activeCategory === "pdfs" &&
                  "Download notes, study guides, and reference materials."}
                {activeCategory === "videos" &&
                  "Watch, listen, and understand concepts visually."}
                {activeCategory === "skills" &&
                  "Enhance your career with practical skill materials."}
              </p>
            </div>
          </div>

          {/* Categories Grid */}
          {activeCategory === "skills" ? (
            <div className="flex items-center justify-center h-full">
              <h1 className="text-4xl font-bold text-blue-700">
                Skill Materials Coming Soon 🚀
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="p-8 bg-blue-50 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-blue-100 transition flex flex-col justify-between"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {cat.icon}
                    <h2 className="text-xl font-bold text-gray-800">
                      {cat.name}
                    </h2>
                  </div>
                  <div className="flex mt-4">
                    <button className="flex-1 px-4 py-3 text-base rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-600 text-center py-4 border-t border-gray-200 mt-auto">
          &copy; 2025 Career Website. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
