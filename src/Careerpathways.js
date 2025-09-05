import React, { useState } from "react";

const careerData = {
  "Arts & Humanities": [
    { id: 1, title: "Journalist/Editor", details: "Mass Communication and Literature" },
    { id: 2, title: "Public Relations Specialist", details: "Mass Communication or Sociology" },
    { id: 3, title: "Social Worker/Counselor", details: "Sociology and Psychology" },
    { id: 4, title: "Teacher/Professor", details: "Philosophy, Literature, and other Arts & Humanities subjects" },
    { id: 5, title: "Political Analyst", details: "Political Science and Public Administration" },
    { id: 6, title: "Artist/Musician/Performer", details: "Music and Visual Arts" }
  ],
  "Literature": [
    { id: 7, title: "Content Writer/Copywriter", details: "All language-based courses" },
    { id: 8, title: "Translator/Interpreter", details: "Specific languages (e.g., Arabic, English, Hindi, Urdu)" },
    { id: 9, title: "Librarian", details: "A passion for books and information, often requiring further study in Library Sciences" },
    { id: 10, title: "Lexicographer", details: "Linguistics" }
  ],
  "Science": [
    { id: 11, title: "Research Scientist", details: "Biochemistry, Botany, Chemistry, and Physics" },
    { id: 12, title: "Data Analyst/Programmer", details: "Computer Applications, Statistics, and Mathematics" },
    { id: 13, title: "Environmental Consultant", details: "Environmental Science and Water Management" },
    { id: 14, title: "Lab Technician", details: "Chemistry or Clinical Biochemistry" },
    { id: 15, title: "Wildlife Biologist/Fisheries Officer", details: "Zoology and Fisheries" }
  ],
  "Commerce": [
    { id: 16, title: "Accountant/Auditor", details: "Commerce" },
    { id: 17, title: "Financial Analyst/Manager", details: "Business Administration and Economics" },
    { id: 18, title: "Lawyer/Legal Consultant", details: "Law" },
    { id: 19, title: "Hotel/Tourism Manager", details: "Hotel Management and Tourism" }
  ],
  "Engineering": [
    { id: 20, title: "Software Developer/IT Specialist", details: "Computer Science Engineering, Information Technology, and Cyber Security" },
    { id: 21, title: "Civil/Mechanical/Electrical Engineer", details: "Civil, Mechanical, and Electrical Engineering" },
    { id: 22, title: "Robotics Engineer", details: "Robotics Engineering" },
    { id: 23, title: "Materials Scientist", details: "Materials Science" }
  ],
  "Vocational": [
    { id: 24, title: "Disaster Management Specialist", details: "Disaster Management" },
    { id: 25, title: "Educator/Teacher", details: "Education" },
    { id: 26, title: "Social Worker", details: "Social Work" },
    { id: 27, title: "Librarian/Archivist", details: "Library Sciences" }
  ],
  "Medical & Medical Specializations": [
    { id: 28, title: "Physician/Surgeon", details: "Medicine & Surgery" },
    { id: 29, title: "Pharmacist", details: "Pharmacy" },
    { id: 30, title: "Physical Therapist/Occupational Therapist", details: "BPT, MPT, and other therapy courses" },
    { id: 31, title: "Nurse", details: "Nursing & Midwifery programs" },
    { id: 32, title: "Medical Technologist", details: "Medical Laboratory Technology and other diagnostic fields" },
    { id: 33, title: "Dentist", details: "Dental Specialties" },
    { id: 34, title: "Medical Research", details: "Microbiology, Biochemistry, and Immunology" }
  ]
};

const CareerPathways = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(careerData)[0]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      {/* Body */}
      <main className="flex-1 flex flex-col items-center px-8 py-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Career Pathways</h1>

        {/* Visual Roadmap */}
        <div className="flex items-center space-x-8 mb-12">
          <button className="p-3 border-2 border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <div className="flex-1 flex justify-center items-center space-x-8">
            <div className="text-center p-4 border border-gray-300 rounded-lg">
              <svg className="h-10 w-10 text-blue-600 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="font-bold text-lg text-gray-800">Course</h3>
              <p className="text-sm text-gray-500 mt-1">Your Academic Start</p>
            </div>
            <div className="w-16 h-1 bg-blue-400"></div>
            <div className="text-center p-4 border border-gray-300 rounded-lg">
              <svg className="h-10 w-10 text-blue-600 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z"></path>
              </svg>
              <h3 className="font-bold text-lg text-gray-800">Career Path</h3>
              <p className="text-sm text-gray-500 mt-1">Jobs, Higher Studies, etc.</p>
            </div>
          </div>

          <button className="p-3 border-2 border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-6 md:p-8 shadow-md">
          <div className="flex overflow-x-scroll whitespace-nowrap space-x-4 border-b border-gray-200 mb-6 py-2">
            {Object.keys(careerData).map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 m-1 font-semibold text-sm md:text-base transition ${
                  activeTab === tab ? "bg-blue-200 text-blue-800 rounded-md" : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {careerData[activeTab].map((career) => (
              <div key={career.id} className="p-4 bg-white rounded-lg shadow-sm">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDetails(career.id)}
                >
                  <h4 className="font-bold text-lg text-blue-600">{career.title}</h4>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedItemId === career.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                {expandedItemId === career.id && (
                  <p className="mt-2 text-gray-700">{career.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-600 text-center py-4 mt-auto border-t border-gray-100">
        &copy; 2025 Career Website. All rights reserved.
      </footer>
    </div>
  );
};

export default CareerPathways;
