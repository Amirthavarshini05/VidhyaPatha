import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authAPI } from "./services/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await authAPI.signup(email, password);
      navigate("/profile-setup");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
      error && React.createElement(
        "div",
        { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" },
        error
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
          disabled: loading,
          className:
            `w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`,
        },
        loading ? "Signing Up..." : "Sign Up"
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
