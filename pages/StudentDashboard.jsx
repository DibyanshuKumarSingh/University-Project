import React from "react";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));

  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate("/student/login");
  };

  if (!student) {
    navigate("/student/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= HEADER ================= */}

      <header className="bg-[#002b5b] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div>
            <h1 className="text-2xl font-bold">
              Dibyanshu's University
            </h1>

            <p className="text-blue-200 text-sm">
              Student Portal
            </p>
          </div>

          <div className="flex items-center gap-5">

            <div className="text-right hidden sm:block">
              <p className="font-semibold">
                {student.fullName}
              </p>

              <p className="text-blue-200 text-sm">
                {student.studentId}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Logout
            </button>

          </div>

        </div>
      </header>


      {/* ================= MAIN ================= */}

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Welcome */}

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-[#002b5b]">
            Welcome back, {student.fullName}! 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Here's an overview of your student account.
          </p>

        </div>


        {/* ================= STAT CARDS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          {/* Student ID */}

          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#002b5b]">

            <p className="text-gray-500 text-sm font-medium">
              Student ID
            </p>

            <h3 className="text-xl font-bold text-[#002b5b] mt-2">
              {student.studentId}
            </h3>

          </div>


          {/* Course */}

          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-600">

            <p className="text-gray-500 text-sm font-medium">
              Course
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-2">
              {student.course}
            </h3>

          </div>


          {/* Department */}

          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-orange-500">

            <p className="text-gray-500 text-sm font-medium">
              Department
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-2">
              {student.department}
            </h3>

          </div>


          {/* Semester */}

          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-purple-600">

            <p className="text-gray-500 text-sm font-medium">
              Semester
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-2">
              Semester {student.semester}
            </h3>

          </div>

        </div>


        {/* ================= CONTENT GRID ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


          {/* ================= PROFILE ================= */}

          <div className="lg:col-span-1 bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-16 h-16 rounded-full bg-[#002b5b] text-white flex items-center justify-center text-2xl font-bold">
                {student.fullName?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#002b5b]">
                  {student.fullName}
                </h3>

                <p className="text-gray-500">
                  {student.studentId}
                </p>
              </div>

            </div>


            <div className="space-y-4">

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-medium text-gray-800">
                  {student.email}
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>

                <p className="font-medium text-gray-800">
                  {student.phone}
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Gender
                </p>

                <p className="font-medium text-gray-800">
                  {student.gender}
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Admission Year
                </p>

                <p className="font-medium text-gray-800">
                  {student.admissionYear}
                </p>
              </div>

            </div>

          </div>


          {/* ================= ACADEMIC INFORMATION ================= */}

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">

            <h3 className="text-2xl font-bold text-[#002b5b] mb-6">
              Academic Information
            </h3>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {student.fullName}
                </p>
              </div>


              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Student ID
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {student.studentId}
                </p>
              </div>


              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Course
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {student.course}
                </p>
              </div>


              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Department
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {student.department}
                </p>
              </div>


              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Semester
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {student.semester}
                </p>
              </div>


              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Admission Year
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {student.admissionYear}
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= QUICK ACTIONS ================= */}

        <div className="mt-8 bg-white rounded-2xl shadow-md p-6">

          <h3 className="text-2xl font-bold text-[#002b5b] mb-6">
            Student Services
          </h3>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <button
              className="p-5 rounded-xl bg-blue-50 hover:bg-blue-100 transition text-left"
            >
              <div className="text-3xl mb-3">📚</div>

              <h4 className="font-bold text-[#002b5b]">
                My Courses
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                View your enrolled courses
              </p>
            </button>


            <button
              className="p-5 rounded-xl bg-green-50 hover:bg-green-100 transition text-left"
            >
              <div className="text-3xl mb-3">📊</div>

              <h4 className="font-bold text-green-800">
                Attendance
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Check your attendance
              </p>
            </button>


            <button
              className="p-5 rounded-xl bg-purple-50 hover:bg-purple-100 transition text-left"
            >
              <div className="text-3xl mb-3">📝</div>

              <h4 className="font-bold text-purple-800">
                Results
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                View examination results
              </p>
            </button>


            <button
              className="p-5 rounded-xl bg-orange-50 hover:bg-orange-100 transition text-left"
            >
              <div className="text-3xl mb-3">📢</div>

              <h4 className="font-bold text-orange-800">
                Notices
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                View latest university notices
              </p>
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default StudentDashboard;