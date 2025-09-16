import React, { useState } from "react";
import { collegeAPI } from "./services/api";

export default function Colleges() {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("");
  const [stream, setStream] = useState("");
  const [medium, setMedium] = useState("");
  const [hostel, setHostel] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    setLoading(true);
    try {
      const filters = {};
      if (search) filters.search = search;
      if (district) filters.district = district;
      if (stream) filters.stream = stream;
      if (medium) filters.medium = medium;
      if (hostel) filters.hostel = 'true';

      const response = await collegeAPI.getColleges(filters);
      setColleges(response.colleges);
    } catch (error) {
      console.error("Error fetching colleges:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchColleges();
  };

  return React.createElement(
    "div",
    { className: "flex flex-col min-h-screen" }, // full height page with flexbox

    // Main content
    React.createElement(
      "main",
      { className: "flex-grow px-8 py-6 max-w-7xl mx-auto space-y-8" },

      // Search + Filters
      React.createElement(
        "div",
        { className: "mb-6" },
        React.createElement("input", {
          type: "text",
          placeholder: "Search colleges...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          onKeyPress: (e) => e.key === 'Enter' && handleSearch(),
          className: "w-full p-3 border rounded mb-4",
        }),
        React.createElement(
          "button",
          {
            onClick: handleSearch,
            className: "w-full mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",
          },
          "Search Colleges"
        ),
        React.createElement(
          "div",
          { className: "grid grid-cols-2 md:grid-cols-4 gap-4" },
          React.createElement(
            "select",
            {
              className: "p-2 border rounded",
              value: district,
              onChange: (e) => setDistrict(e.target.value),
            },
            React.createElement("option", { value: "" }, "District"),
            React.createElement("option", { value: "Chennai" }, "Chennai"),
            React.createElement("option", { value: "Coimbatore" }, "Coimbatore")
          ),
          React.createElement(
            "select",
            {
              className: "p-2 border rounded",
              value: stream,
              onChange: (e) => setStream(e.target.value),
            },
            React.createElement("option", { value: "" }, "Stream"),
            React.createElement("option", { value: "Engineering" }, "Engineering"),
            React.createElement("option", { value: "Arts" }, "Arts")
          ),
          React.createElement(
            "select",
            {
              className: "p-2 border rounded",
              value: medium,
              onChange: (e) => setMedium(e.target.value),
            },
            React.createElement("option", { value: "" }, "Medium"),
            React.createElement("option", { value: "English" }, "English"),
            React.createElement("option", { value: "Tamil" }, "Tamil")
          ),
          React.createElement(
            "label",
            { className: "flex items-center space-x-2" },
            React.createElement("input", {
              type: "checkbox",
              checked: hostel,
              onChange: () => setHostel(!hostel),
            }),
            React.createElement("span", null, "Hostel")
          )
        )
      ),

      // College Cards
      React.createElement(
        "div",
        { className: "grid gap-6 md:grid-cols-2" },
        loading ? React.createElement("div", { className: "col-span-2 text-center py-8" }, "Loading colleges...") :
        colleges.map((college, index) =>
          React.createElement(
            "div",
            {
              key: index,
              className: "p-5 border rounded-lg shadow hover:shadow-lg bg-white",
            },
            React.createElement(
              "h2",
              { className: "text-xl font-semibold" },
              college.name
            ),
            React.createElement("p", { className: "text-gray-600" }, college.address || "Address not available"),
            React.createElement(
              "p",
              null,
              React.createElement("strong", null, "Courses: "),
              Array.isArray(college.courses) ? college.courses.join(", ") : college.courses
            ),
            React.createElement(
              "p",
              null,
              React.createElement("strong", null, "Cut-Off: "),
              college.cutoff || "Not specified"
            ),
            React.createElement(
              "p",
              null,
              React.createElement("strong", null, "Facilities: "),
              Array.isArray(college.facilities) ? college.facilities.join(", ") : college.facilities
            ),
            React.createElement(
              "div",
              { className: "flex space-x-4 mt-3" },
              React.createElement(
                "a",
                {
                  href: college.mapUrl || "#",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-600",
                },
                "View Map"
              ),
              React.createElement(
                "button",
                { className: "bg-blue-600 text-white px-4 py-2 rounded" },
                "Apply Now"
              )
            )
          )
        )
      )
    ),

    // Footer
    React.createElement(
      "footer",
      { className: "bg-gray-100 text-gray-600 text-center py-4 border-t border-gray-200 shadow-inner" },
      "© 2025 Career Website. All rights reserved."
    )
  );
}
