import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return React.createElement(
    "div",
    { className: "space-y-16" },

    // Hero Section
    React.createElement(
      "section",
      { className: "text-center py-16" },
      React.createElement(
        "h1",
        { className: "text-5xl font-bold text-gray-800 mb-4" },
        "Discover Your Perfect Career Path"
      ),
      React.createElement(
        "p",
        { className: "text-lg text-gray-600 mb-6" },
        "Take our aptitude test, explore courses, find top colleges and scholarships."
      ),
      React.createElement(
        "div",
        { className: "space-x-4" },
        React.createElement(
          Link,
          {
            to: "/signup",
            className:
              "px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700",
          },
          "Get Started"
        ),
        React.createElement(
          Link,
          {
            to: "/signin",
            className:
              "px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300",
          },
          "Sign In"
        )
      )
    ),

    // Features
    React.createElement(
      "section",
      { className: "grid grid-cols-1 md:grid-cols-4 gap-8" },
      [
        { title: "Aptitude Test", desc: "Know your strengths & skills." },
        { title: "Course Mapping", desc: "Find courses that fit your profile." },
        { title: "Top Colleges", desc: "Get details about leading institutions." },
        { title: "Scholarships", desc: "Discover opportunities to fund your studies." },
      ].map((f, i) =>
        React.createElement(
          "div",
          {
            key: i,
            className:
              "p-6 bg-white rounded-xl shadow hover:shadow-lg text-center",
          },
          React.createElement(
            "h3",
            { className: "font-bold text-lg text-gray-700" },
            f.title
          ),
          React.createElement("p", { className: "text-gray-500 mt-2" }, f.desc)
        )
      )
    ),

    // How it Works
    React.createElement(
      "section",
      null,
      React.createElement(
        "h2",
        { className: "text-3xl font-bold text-center mb-6" },
        "How It Works"
      ),
      React.createElement(
        "div",
        {
          className:
            "flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10",
        },
        ["Take Aptitude Test", "Explore Courses", "Find Colleges", "Apply Scholarships"].map(
          (step, i) =>
            React.createElement(
              "div",
              { key: i, className: "flex flex-col items-center" },
              React.createElement(
                "div",
                {
                  className:
                    "w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-lg",
                },
                i + 1
              ),
              React.createElement("p", { className: "mt-3 text-gray-600" }, step)
            )
        )
      )
    ),

    // CTA
    React.createElement(
      "section",
      { className: "text-center py-10" },
      React.createElement(
        "h2",
        { className: "text-3xl font-bold mb-4" },
        "Start Your Career Journey Today"
      ),
      React.createElement(
        Link,
        {
          to: "/signup",
          className:
            "px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700",
        },
        "Join Now"
      )
    )
  );
}
