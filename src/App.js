import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";

import Dashboard from "./Dashboard";
import AptitudeTest from "./Aptitudetest";
import Suggestedcourses from "./Suggestedcourses";
import Careerpathways from "./Careerpathways";
import Scholarships from "./Scholarships";
import Colleges from "./Colleges";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";   // 👈 you’ll create this
import SignUp from "./SignUp";   // 👈 you’ll create this
import ProfileSetupStep1 from "./ProfileSetupStep1";
import ProfileSetupStep2 from "./ProfileSetupStep2";
import ProfileSetupStep3 from "./ProfileSetupStep3";
import Resources from './Resources';
import TimelineTracker from './Timelinetracker';
import AboutUs from './AboutUs'; 

// ✅ Navbar only shows when logged in
function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-200 flex items-center justify-between px-8 py-4 sticky top-0 z-50">
      {/* Left side */}
      <div className="flex items-center space-x-6">
        <Link
          to="/dashboard"
          style={{
            color: isActive("/dashboard") ? "#2563eb" : "#222",
            fontWeight: isActive("/dashboard") ? "bold" : "normal",
          }}
        >
          Dashboard
        </Link>
        <Link
          to="/courses"
          style={{
            color: isActive("/courses") ? "#2563eb" : "#222",
            fontWeight: isActive("/courses") ? "bold" : "normal",
          }}
        >
          Courses
        </Link>
        <Link
          to="/careerPaths"
          style={{
            color: isActive("/careerPaths") ? "#2563eb" : "#222",
            fontWeight: isActive("/careerPaths") ? "bold" : "normal",
          }}
        >
          Career Paths
        </Link>
        <Link
          to="/colleges"
          style={{
            color: isActive("/colleges") ? "#2563eb" : "#222",
            fontWeight: isActive("/colleges") ? "bold" : "normal",
          }}
        >
          Colleges
        </Link>
        <Link
          to="/scholarships"
          style={{
            color: isActive("/scholarships") ? "#2563eb" : "#222",
            fontWeight: isActive("/scholarships") ? "bold" : "normal",
          }}
        >
          Scholarships
        </Link>

        <Link
          to="/resources"
          style={{
            color: isActive("/resources") ? "#2563eb" : "#222",
            fontWeight: isActive("/resources") ? "bold" : "normal",
          }}
        >
          Resources
        </Link>

        <Link
          to="/timeline"
          style={{
            color: isActive("/timeline") ? "#2563eb" : "#222",
            fontWeight: isActive("/timeline") ? "bold" : "normal",
          }}
        >
          Timelines
        </Link>

        <Link
          to="/about"
          style={{
            color: isActive("/about") ? "#2563eb" : "#222",
            fontWeight: isActive("/about") ? "bold" : "normal",
          }}
        >
          About Us
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-6">
        <Link
          to="/test"
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Take Aptitude Test
        </Link>
        <div className="relative">
          <button className="flex items-center space-x-2 hover:text-blue-600">
            <span className="text-gray-700">Profile</span>
            <svg width="16" height="16" fill="currentColor">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

// ✅ A wrapper to protect routes
function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* Show navbar only when logged in */}
      {isAuthenticated && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<SignUp onSignup={() => setIsAuthenticated(true)} />} />
        <Route path="/profile-setup" element={<ProfileSetupStep1 />} />
        <Route path="/profile-setup-step2" element={<ProfileSetupStep2 />} />
        <Route path="/profile-setup-step3" element={<ProfileSetupStep3 />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/timeline" element={<TimelineTracker />} />
        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard name="Arul" />
            </PrivateRoute>
          }
        />
        <Route
          path="/test"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AptitudeTest />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Suggestedcourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/careerPaths"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Careerpathways />
            </PrivateRoute>
          }
        />
        <Route
          path="/colleges"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Colleges />
            </PrivateRoute>
          }
        />
        <Route
          path="/scholarships"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Scholarships />
            </PrivateRoute>
          }
        />

        
      </Routes>
    </Router>
  );
}

export default App;
