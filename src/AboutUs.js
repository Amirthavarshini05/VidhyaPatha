import React from "react";
import { ArrowLeft } from "lucide-react";

const AboutUs = ({ goBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans p-8">

      <main className="flex-1 bg-white rounded-2xl p-6 shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to empower students with the tools and information they need to make
            informed decisions about their education and career paths. We believe that
            everyone deserves a clear and personalized guide to their future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h3>
            <p className="text-gray-700">
              We are a team of dedicated educators, career counselors, and developers who are passionate
              about helping the next generation succeed. Our platform is designed to be a comprehensive,
              easy-to-use resource for aptitude testing, course exploration, and career planning.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">What We Offer</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Personalized **Aptitude Testing** to identify your strengths and interests.</li>
              <li>A curated database of **Suggested Courses** tailored to your profile.</li>
              <li>Detailed insights into various **Career Pathways** and industries.</li>
              <li>A comprehensive **Timeline Tracker** to manage your college applications.</li>
              <li>A rich library of **Resources**, including scholarships and college information.</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="mt-8 text-center text-gray-500">
        © {new Date().getFullYear()} Career Website. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;