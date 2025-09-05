import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileSetupStep3() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    marks: "",
    subjects10: "",
    subjects12: "",
    interested10: "",
    interested12: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFinish = () => {
    localStorage.setItem("profileStep3", JSON.stringify(form));
    alert("Profile setup completed!");
    navigate("/dashboard");
  };

  return React.createElement(
    "div",
    { className: "max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8" },
    [
      React.createElement(
        "h1",
        { key: "title", className: "text-2xl font-bold mb-6" },
        "Profile Setup (Step 3/3)"
      ),

      React.createElement(
        "div",
        { key: "form-wrapper", className: "space-y-4" },
        [
          React.createElement("textarea", {
            key: "marks",
            name: "marks",
            placeholder: "Enter Marks in Each Subject",
            value: form.marks,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement("input", {
            key: "subjects10",
            type: "text",
            name: "subjects10",
            placeholder: "Subjects in 10th",
            value: form.subjects10,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement("input", {
            key: "subjects12",
            type: "text",
            name: "subjects12",
            placeholder: "Subjects in 12th",
            value: form.subjects12,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement("input", {
            key: "interested10",
            type: "text",
            name: "interested10",
            placeholder: "Subjects Interested in 10th",
            value: form.interested10,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement("input", {
            key: "interested12",
            type: "text",
            name: "interested12",
            placeholder: "Subjects Interested in 12th",
            value: form.interested12,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          })
        ]
      ),

      React.createElement(
        "button",
        {
          key: "finish-btn",
          onClick: handleFinish,
          className: "mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        },
        "Finish & Go to Dashboard"
      )
    ]
  );
}
