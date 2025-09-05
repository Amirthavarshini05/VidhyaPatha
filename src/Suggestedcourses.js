import React, { useState } from "react";
import logo from "./logo.svg";

// Simple icon for list items
const CourseIcon = () => (
  <svg
    className="h-4 w-4 text-gray-500 inline-block mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const courses = {
  "Arts & Humanities": [
    { id: 1, title: "Anthropology" },
    { id: 2, title: "Mass Communication" },
    { id: 3, title: "Music" },
    { id: 4, title: "Performance Arts" },
    { id: 5, title: "Philosophy" },
    { id: 6, title: "Political Science" },
    { id: 7, title: "Psychology" },
    { id: 8, title: "Public Administration" },
    { id: 9, title: "Sociology" },
    { id: 10, title: "Visual Arts" },
  ],
  Literature: [
    { id: 11, title: "Arabic" },
    { id: 12, title: "Dogri" },
    { id: 13, title: "English" },
    { id: 14, title: "Hindi" },
    { id: 15, title: "Kashmiri" },
    { id: 16, title: "Linguistics" },
    { id: 17, title: "Persian" },
    { id: 18, title: "Punjabi Literature" },
    { id: 19, title: "Sanskrit" },
    { id: 20, title: "Urdu" },
  ],
  Science: [
    { id: 21, title: "Biochemistry" },
    { id: 22, title: "Bioresources" },
    { id: 23, title: "Botany" },
    { id: 24, title: "Chemistry" },
    { id: 25, title: "Clinical Biochemistry" },
    { id: 26, title: "Computer Applications" },
    { id: 27, title: "Electronics" },
    { id: 28, title: "Environmental Science" },
    { id: 29, title: "Fisheries" },
    { id: 30, title: "Geography" },
    { id: 31, title: "Geology" },
    { id: 32, title: "Home Science" },
    { id: 33, title: "Mathematics" },
    { id: 34, title: "NanoScience & NanoTechnology" },
    { id: 35, title: "Physics" },
    { id: 36, title: "Sericulture" },
    { id: 37, title: "Statistics" },
    { id: 38, title: "Water Management" },
    { id: 39, title: "Zoology" },
  ],
  Commerce: [
    { id: 40, title: "Business Administration" },
    { id: 41, title: "Commerce" },
    { id: 42, title: "Economics" },
    { id: 43, title: "Law" },
    { id: 44, title: "Hotel Management" },
    { id: 45, title: "Tourism" },
  ],
  Engineering: [
    { id: 46, title: "Biotechnology" },
    { id: 47, title: "Computer Science Engineering" },
    { id: 48, title: "Civil Engineering" },
    { id: 49, title: "Electrical Engineering" },
    { id: 50, title: "Electronics & Communication Engineering" },
    { id: 51, title: "Mechanical Engineering" },
    { id: 52, title: "Information Technology" },
    { id: 53, title: "Cyber Security" },
    { id: 54, title: "Food Technology" },
    { id: 55, title: "Materials Science" },
    { id: 56, title: "Robotics Engineering" },
    { id: 57, title: "Biomedical Engineering" },
    { id: 58, title: "Artificial Intelligence & Machine Learning" },
    { id: 59, title: "Chemical Engineering" },
    { id: 60, title: "Agriculture & Farm Engineering" },
    { id: 61, title: "Metallurgical Engineering" },
    { id: 62, title: "Biotechnology Engineering" },
    { id: 63, title: "Engineering Physics" },
    { id: 64, title: "Networking, Hardware & Security" },
  ],
  Vocational: [
    { id: 65, title: "Design Your Degree" },
    { id: 66, title: "Disaster Management" },
    { id: 67, title: "Education" },
    { id: 68, title: "History" },
    { id: 69, title: "Islamic Studies" },
    { id: 70, title: "Library Sciences" },
    { id: 71, title: "Physical Education" },
    { id: 72, title: "Social Work" },
  ],
  // Medical and Medical Specializations remain the same
  // ...
  "Medical": {
    "Medicine & Surgery": [
      { id: 73, title: "MBBS" },
      { id: 74, title: "MD" },
      { id: 75, title: "MS" },
      { id: 76, title: "DNB" },
      { id: 77, title: "M.Ch." },
      { id: 78, title: "DM" },
      { id: 79, title: "Master of Surgery" },
      { id: 80, title: "FNB (Fellow of National Board)" },
    ],
    "Pharmacy": [
      { id: 81, title: "D.Pharma" },
      { id: 82, title: "B.Pharma" },
      { id: 83, title: "M.Pharma" },
      { id: 84, title: "Pharm.D" },
    ],
    "Therapy & Medical Technology": [
      { id: 85, title: "BPT" },
      { id: 86, title: "M.P.T" },
      { id: 87, title: "BMLT" },
      { id: 88, title: "MMLT" },
      { id: 89, title: "DMLT" },
      { id: 90, title: "BMRIT" },
      { id: 91, title: "MMRT" },
      { id: 92, title: "BOPTM" },
      { id: 93, title: "BASLP" },
      { id: 94, title: "MASLP" },
      { id: 95, title: "B.O.Th" },
      { id: 96, title: "MOT" },
      { id: 97, title: "BPH" },
    ],
    "Nursing & Allied Health": [
      { id: 98, title: "GNM" },
      { id: 99, title: "ANM" },
      { id: 100, title: "MPH" },
      { id: 101, title: "MHA" },
      { id: 102, title: "M.Optom." },
    ],
    "Ayurveda, Yoga, Unani, Siddha & Homeopathy": [
      { id: 103, title: "B.A.M.S." },
      { id: 104, title: "BHMS" },
      { id: 105, title: "BUMS" },
      { id: 106, title: "BNYS" },
      { id: 107, title: "BSMS" },
    ],
  },
  "Medical Specializations": {
    "Medical & Surgical Specialties": [
      { id: 108, title: "Emergency Medicine" },
      { id: 109, title: "Psychiatry" },
      { id: 110, title: "Pulmonary Medicine" },
      { id: 111, title: "Anesthesiology" },
      { id: 112, title: "General Medicine" },
      { id: 113, title: "Oncology" },
      { id: 114, title: "Nephrology" },
      { id: 115, title: "Plastic Surgery" },
      { id: 116, title: "General Surgery" },
      { id: 117, title: "Urology" },
      { id: 118, title: "Neurology" },
      { id: 119, title: "Pediatrics" },
      { id: 120, title: "Endocrinology" },
      { id: 121, title: "Ophthalmology" },
      { id: 122, title: "Dermatology" },
      { id: 123, title: "Orthopaedics" },
      { id: 124, title: "Cardiology" },
      { id: 125, title: "Obstetrics & Gynecology" },
      { id: 126, title: "Anatomy" },
      { id: 127, title: "Pathology" },
      { id: 128, title: "ENT" },
      { id: 129, title: "Forensic Medical Science" },
      { id: 130, title: "Immunology" },
      { id: 131, title: "Geriatrics" },
      { id: 132, title: "Community Medicine" },
    ],
    "Dental Specialties": [
      { id: 133, title: "Orthodontics" },
      { id: 134, title: "Prosthodontics" },
      { id: 135, title: "Oral Pathology" },
      { id: 136, title: "Oral Medicine & Radiology" },
      { id: 137, title: "Periodontology" },
      { id: 138, title: "Oral and Maxillofacial Surgery" },
      { id: 139, title: "Endodontics" },
      { id: 140, title: "Dental" },
    ],
    "Allied Health & Paramedical": [
      { id: 141, title: "Medical Laboratory Technology" },
      { id: 142, title: "Medical Record Technology" },
      { id: 143, title: "Medical Microbiology" },
      { id: 144, title: "Physiotherapy" },
      { id: 145, title: "Paramedical" },
      { id: 146, title: "Emergency Medical Technology" },
      { id: 147, title: "Operation Theatre Technology" },
      { id: 148, title: "Critical Care Technology" },
      { id: 149, title: "Nursing & Midwifery" },
      { id: 150, title: "Health Information Administration" },
      { id: 151, title: "Rehabilitation" },
      { id: 152, title: "Dialysis Technology" },
      { id: 153, title: "Physician Assistant" },
      { id: 154, title: "Occupational Therapy" },
      { id: 155, title: "Surgical Technology" },
      { id: 156, title: "Audiology & Speech Therapy" },
    ],
    "Diagnostic & Imaging": [
      { id: 157, title: "Radiotherapy Technology" },
      { id: 158, title: "Radiotherapy" },
      { id: 159, title: "Radiology & Imaging Science" },
      { id: 160, title: "Radiology" },
      { id: 161, title: "Nuclear Medicine" },
      { id: 162, title: "Blood Bank Technology" },
      { id: 163, title: "Microbiology" },
      { id: 164, title: "Biochemistry" },
      { id: 165, title: "Haematology" },
    ],
    "Cardiology Technology": [
      { id: 166, title: "Echo Cardiology & Cardiac Technology" },
      { id: 167, title: "Cardiology Laboratory Technique" },
      { id: 168, title: "Cath Lab Technology" },
      { id: 169, title: "Cardiovascular Technology" },
      { id: 170, title: "Perfusion Technology" },
    ],
    "Pharmaceutical & Alternative Medicine": [
      { id: 171, title: "Pharmaceutical" },
      { id: 172, title: "Pharmacy Practice" },
      { id: 173, title: "Pharmacology" },
      { id: 174, title: "Pharmacognosy" },
      { id: 175, title: "Ayurved" },
      { id: 176, title: "Homeopathy" },
      { id: 177, title: "Unani" },
      { id: 178, title: "Naturopathy" },
      { id: 179, title: "Alternative Medicine" },
      { id: 180, title: "Yoga" },
    ],
    "Public Health & Other Specialties": [
      { id: 181, title: "HealthCare & Hospital" },
      { id: 182, title: "Hospital / Healthcare Management" },
      { id: 183, title: "Public Health" },
      { id: 184, title: "Public Health & Management" },
      { id: 185, title: "Food & Nutrition" },
      { id: 186, title: "Clinical Nurition Foods & Sciences" },
      { id: 187, title: "Dietics & Nutrition" },
      { id: 188, title: "Clinical Psychology" },
      { id: 189, title: "Optometry" },
      { id: 190, title: "Clinical Research" },
      { id: 191, title: "Clinical Embryology" },
      { id: 192, title: "Toxicology" },
      { id: 193, title: "Veterinary Science" },
    ]
  }
};

const SuggestedCourses = () => {
  const [selectedStream, setSelectedStream] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleFilter = (stream) => {
    setSelectedStream(stream);
    setSelectedSubCategory(null);
  };

  const handleSubCategoryFilter = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  let displayedCourses = [];
  let subCategories = [];

  if (selectedStream === "All") {
    displayedCourses = Object.keys(courses)
      .filter((key) => key !== "Medical" && key !== "Medical Specializations")
      .flatMap((key) => courses[key]);
  } else if (selectedStream === "Medical") {
    subCategories = Object.keys(courses.Medical);
    if (selectedSubCategory) {
      displayedCourses = courses.Medical[selectedSubCategory];
    }
  } else if (selectedStream === "Medical Specializations") {
    subCategories = Object.keys(courses["Medical Specializations"]);
    if (selectedSubCategory) {
      displayedCourses =
        courses["Medical Specializations"][selectedSubCategory];
    }
  } else {
    displayedCourses = courses[selectedStream];
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      {/* Body */}
      <main className="flex-1 flex px-8 py-6">
        {/* Sidebar Filters */}
        <aside className="w-1/4 pr-8">
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Filters</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleFilter("All")}
                  className={`block w-full text-left py-2 px-4 rounded-md transition duration-200 ${
                    selectedStream === "All" && !selectedSubCategory
                      ? "bg-blue-100 text-blue-800 font-bold"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <CourseIcon /> All
                </button>
              </li>
              {Object.keys(courses).map((stream) => (
                <li key={stream}>
                  <button
                    onClick={() => handleFilter(stream)}
                    className={`block w-full text-left py-2 px-4 rounded-md transition duration-200 ${
                      selectedStream === stream && !selectedSubCategory
                        ? "bg-blue-100 text-blue-800 font-bold"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <CourseIcon /> {stream}
                  </button>
                </li>
              ))}
            </ul>

            {/* Display sub-categories if Medical or Medical Specializations is selected */}
            {(selectedStream === "Medical" ||
              selectedStream === "Medical Specializations") && (
              <div className="mt-4 border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-md mb-2 text-gray-800">
                  {selectedStream} Sub-Categories
                </h4>
                <ul className="space-y-2">
                  {subCategories.map((subCat) => (
                    <li key={subCat}>
                      <button
                        onClick={() => handleSubCategoryFilter(subCat)}
                        className={`block w-full text-left py-2 pl-8 rounded-md transition duration-200 ${
                          selectedSubCategory === subCat
                            ? "bg-blue-100 text-blue-800 font-bold"
                            : "text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {subCat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {selectedSubCategory ? selectedSubCategory : selectedStream} Courses
          </h2>

          {/* Display Sub-Categories or Courses */}
          {(selectedStream === "Medical" ||
            selectedStream === "Medical Specializations") &&
          !selectedSubCategory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {subCategories.map((subCat) => (
                <div
                  key={subCat}
                  className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 transition shadow-md"
                  onClick={() => handleSubCategoryFilter(subCat)}
                >
                  <h3 className="font-bold text-xl mb-2 text-center text-gray-800">
                    {subCat}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between hover:bg-gray-200 transition shadow-md"
                >
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">
                      {course.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center mt-auto space-x-2">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                      See Colleges
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-600 text-center py-4 mt-auto border-t border-gray-100">
        &copy; 2025 Career Website. All rights reserved.
      </footer>
    </div>
  );
};

export default SuggestedCourses;
