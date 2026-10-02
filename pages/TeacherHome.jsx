import { useState } from "react";

function TeacherHome() {
  const [teacher] = useState(() => {
    if (typeof window === "undefined") return null;

    const savedTeacher = window.localStorage.getItem("teacher");

    if (!savedTeacher) return null;

    try {
      return JSON.parse(savedTeacher);
    } catch {
      return null;
    }
  });

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, {teacher?.name || "Teacher"} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's an overview of your teaching dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500">
            Assigned Courses
          </p>

          <h2 className="text-3xl font-bold mt-2">
            0
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500">
            Total Students
          </p>

          <h2 className="text-3xl font-bold mt-2">
            0
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500">
            Today's Classes
          </p>

          <h2 className="text-3xl font-bold mt-2">
            0
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500">
            Attendance
          </p>

          <h2 className="text-3xl font-bold mt-2">
            0%
          </h2>
        </div>

      </div>

      <div className="mt-8 bg-white p-6 rounded-2xl shadow border">
        <h2 className="text-xl font-bold mb-4">
          Teacher Information
        </h2>

        <p>
          <span className="font-semibold">Name:</span>{" "}
          {teacher?.name || "Loading..."}
        </p>

        <p className="mt-2">
          <span className="font-semibold">Email:</span>{" "}
          {teacher?.email || "Loading..."}
        </p>

        <p className="mt-2">
          <span className="font-semibold">Department:</span>{" "}
          {teacher?.department || "Loading..."}
        </p>
      </div>
    </div>
  );
}

export default TeacherHome;