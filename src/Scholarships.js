import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { scholarshipAPI } from "./services/api";

export default function Scholarships() {
  const [date, setDate] = useState(new Date());
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    setLoading(true);
    try {
      const response = await scholarshipAPI.getScholarships();
      setScholarships(response.scholarships);
    } catch (error) {
      console.error("Error fetching scholarships:", error);
    } finally {
      setLoading(false);
    }
  };

  const notifications = [
    "Anna University Admissions Open – Last date Sep 20, 2025",
    "IIT JEE Mains Registration – Closing Oct 10, 2025",
    "Medical Entrance Exam – Application Opens Oct 5, 2025",
  ];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "space-y-10 px-8 py-6 max-w-7xl mx-auto" },

      // Scholarships
      React.createElement(
        "section",
        null,
        React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Scholarships"),
        React.createElement(
          "div",
          { className: "grid md:grid-cols-3 gap-6" },
          loading ? React.createElement("div", { className: "col-span-3 text-center py-8" }, "Loading scholarships...") :
          scholarships.map((s, idx) =>
            React.createElement(
              "div",
              { key: idx, className: "p-6 border rounded-lg shadow hover:shadow-lg bg-white" },
              React.createElement("h3", { className: "text-lg font-semibold" }, s.title),
              React.createElement("p", null, React.createElement("strong", null, "Amount:"), " ", s.amount),
              React.createElement("p", null, React.createElement("strong", null, "Eligibility:"), " ", s.eligibility),
              React.createElement("p", null, React.createElement("strong", null, "Last Date:"), " ", 
                new Date(s.lastDate).toLocaleDateString()
              ),
              React.createElement(
                "button",
                { className: "mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" },
                "Apply Now"
              )
            )
          )
        )
      ),

      // Notifications
      React.createElement(
        "section",
        null,
        React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Notifications"),
        React.createElement(
          "ul",
          { className: "list-disc list-inside space-y-2" },
          notifications.map((n, idx) =>
            React.createElement("li", { key: idx, className: "text-gray-700" }, n)
          )
        )
      ),

      // Calendar
      React.createElement(
        "section",
        null,
        React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Important Deadlines"),
        React.createElement(
          "div",
          { className: "bg-white p-4 shadow-md rounded-lg max-w-md" },
          React.createElement(Calendar, { onChange: setDate, value: date })
        )
      )
    ),

    // Footer
    React.createElement(
      "footer",
      { className: "bg-gray-100 text-gray-600 text-center py-4 border-t border-gray-200 shadow-inner mt-10" },
      "© 2025 Career Website. All rights reserved."
    )
  );
}

