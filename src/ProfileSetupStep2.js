import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileSetupStep2() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    qualification: "",
    caste: "",
    income: "",
    stream: "",
    phone: "",
    email: "",
    aadhar: ""
  });

  const qualification = JSON.parse(localStorage.getItem("profileStep1"))?.qualification;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem("profileStep2", JSON.stringify(form));
    navigate("/profile-setup-step3");
  };

  return React.createElement(
    "div",
    { className: "max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8" },
    [
      React.createElement(
        "h1",
        { key: "title", className: "text-2xl font-bold mb-6" },
        "Profile Setup (Step 2/3)"
      ),

      React.createElement(
        "div",
        { key: "form-wrapper", className: "space-y-4" },
        [
          React.createElement("input", {
            key: "name",
            type: "text",
            name: "name",
            placeholder: "Full Name",
            value: form.name,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement("input", {
            key: "caste",
            type: "text",
            name: "caste",
            placeholder: "Caste",
            value: form.caste,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement("input", {
            key: "income",
            type: "number",
            name: "income",
            placeholder: "Annual Income",
            value: form.income,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          qualification === "12"
            ? React.createElement(
                "select",
                {
                  key: "stream",
                  name: "stream",
                  value: form.stream,
                  onChange: handleChange,
                  className: "w-full border rounded-lg p-2"
                },
                [
                  React.createElement("option", { key: "s0", value: "" }, "Select Stream of Study"),
                  React.createElement("option", { key: "s1" }, "Bio-Maths"),
                  React.createElement("option", { key: "s2" }, "Comp-Maths"),
                  React.createElement("option", { key: "s3" }, "Accounts")
                ]
              )
            : null,

          React.createElement("input", {
            key: "phone",
            type: "tel",
            name: "phone",
            placeholder: "Phone Number",
            value: form.phone,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement("input", {
            key: "email",
            type: "email",
            name: "email",
            placeholder: "Email ID",
            value: form.email,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          }),

          React.createElement("input", {
            key: "aadhar",
            type: "text",
            name: "aadhar",
            placeholder: "Aadhar Number",
            value: form.aadhar,
            onChange: handleChange,
            className: "w-full border rounded-lg p-2"
          })
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
