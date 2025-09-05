import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/profile-setup"); // ✅ Go to profile setup after signup
    } else {
      alert("Please enter email and password");
    }
  };

  return React.createElement(
    "div",
    { className: "flex justify-center items-center h-screen bg-gray-100" },
    React.createElement(
      "form",
      {
        onSubmit: handleSubmit,
        className: "bg-white shadow-lg rounded-2xl p-8 w-96",
      },
      React.createElement(
        "h2",
        { className: "text-2xl font-bold mb-6 text-center" },
        "Sign Up"
      ),
      React.createElement("input", {
        type: "email",
        placeholder: "Email",
        className: "w-full p-3 mb-4 border rounded-lg",
        value: email,
        onChange: (e) => setEmail(e.target.value),
      }),
      React.createElement("input", {
        type: "password",
        placeholder: "Password",
        className: "w-full p-3 mb-6 border rounded-lg",
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }),
      React.createElement(
        "button",
        {
          type: "submit",
          className:
            "w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition",
        },
        "Sign Up"
      ),
      React.createElement(
        "p",
        { className: "text-sm text-center mt-4" },
        "Already have an account? ",
        React.createElement(
          Link,
          { to: "/signin", className: "text-blue-600 hover:underline" },
          "Sign In"
        )
      )
    )
  );
}

export default SignUp;
