import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/students/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save logged-in student
      localStorage.setItem("student", JSON.stringify(data.student));

      // Go to dashboard
      navigate("/student/dashboard");
    } catch (error) {
      console.error("Student Login Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#002b5b]">
            Student Login
          </h1>

          <p className="text-gray-500 mt-2">
            Login to access your student dashboard
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md mb-5">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          {/* Student ID */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Student ID
            </label>

            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter your Student ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#002b5b]"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#002b5b]"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#002b5b] text-white py-3 rounded-lg font-bold hover:bg-[#003d80] transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default StudentLogin;