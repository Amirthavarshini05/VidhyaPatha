import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileSetupStep1() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ age: "", qualification: "", interests: "", careerGoal: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem("profileStep1", JSON.stringify(form));
    navigate("/profile-setup-step2");
  };

  return React.createElement(
    "div",
    { className: "max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8" },
    [
      React.createElement(
        "h1",
        { key: "title", className: "text-2xl font-bold mb-6" },
        "Profile Setup (Step 1/3)"
      ),

      React.createElement(
        "div",
        { key: "form-wrapper", className: "space-y-4" },
        [
          React.createElement("input", {
            key: "age",
            type: "number",
            name: "age",
            placeholder: "Age",
            value: form.age,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement(
            "select",
            {
              key: "qualification",
              name: "qualification",
              value: form.qualification,
              onChange: handleChange,
              className: "w-full border rounded-lg p-2"
            },
            [
              React.createElement("option", { key: "q0", value: "" }, "Select Qualification"),
              React.createElement("option", { key: "q1", value: "10" }, "10th"),
              React.createElement("option", { key: "q2", value: "12" }, "12th"),
              React.createElement("option", { key: "q3", value: "graduate" }, "Graduate")
            ]
          ),

          React.createElement(
            "select",
            {
              key: "interests",
              name: "interests",
              value: form.interests,
              onChange: handleChange,
              className: "w-full border rounded-lg p-2"
            },
            [
              React.createElement("option", { key: "i0", value: "" }, "Select Academic Interest"),
              React.createElement("option", { key: "i1" }, "Science"),
              React.createElement("option", { key: "i2" }, "Arts"),
              React.createElement("option", { key: "i3" }, "Commerce"),
              React.createElement("option", { key: "i4" }, "Vocational"),
              React.createElement("option", { key: "i5" }, "Not Sure")
            ]
          ),

          React.createElement(
            "select",
            {
              key: "careerGoal",
              name: "careerGoal",
              value: form.careerGoal,
              onChange: handleChange,
              className: "w-full border rounded-lg p-2"
            },
            [
              React.createElement("option", { key: "c0", value: "" }, "Select Career Goal"),
              React.createElement("option", { key: "c1" }, "Govt Jobs"),
              React.createElement("option", { key: "c2" }, "Private Jobs"),
              React.createElement("option", { key: "c3" }, "Higher Studies"),
              React.createElement("option", { key: "c4" }, "Business"),
              React.createElement("option", { key: "c5" }, "Not Sure")
            ]
          )
        ]
      ),

      React.createElement(
        "button",
        {
          key: "next-btn",
          onClick: handleNext,
          className: "mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        },
        "Save & Continue"
      )
    ]
  );
}
