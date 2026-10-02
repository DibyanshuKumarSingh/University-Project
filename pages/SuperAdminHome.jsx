import React, { useEffect, useState } from "react";

function SuperAdminHome() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalCourses: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get real data from backend
  const fetchDashboardStats = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/dashboard/stats"
      );

      const data = await response.json();

      console.log("Dashboard API:", data);

      if (data.success) {
        setStats(data.stats);
      } else {
        setError(data.message || "Failed to load dashboard");
      }
    } catch (error) {
      console.error("Dashboard API Error:", error);
      setError("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full">

      {/* ================= HEADER ================= */}

      <div className="mb-6 sm:mb-8">

        <p className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">
          Administration Panel
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mt-1">
          Super Admin Dashboard
        </h1>

        <p className="text-sm sm:text-base text-slate-500 mt-2">
          Manage your university from one place.
        </p>

      </div>


      {/* ================= ERROR ================= */}

      {error && (
        <div className="mb-5 sm:mb-6 bg-red-100 border border-red-300 text-red-700 px-4 sm:px-5 py-3 sm:py-4 rounded-lg text-sm sm:text-base break-words">
          {error}
        </div>
      )}


      {/* ================= STAT CARDS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">


        {/* STUDENTS */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 md:p-6">

          <div className="flex items-center justify-between gap-3">

            <div className="min-w-0">

              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Total Students
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-1 sm:mt-2">
                {loading ? "..." : stats.totalStudents}
              </h2>

            </div>

            <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-xl sm:text-2xl">
              🎓
            </div>

          </div>

          <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
            Registered students
          </p>

        </div>


        {/* TEACHERS */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 md:p-6">

          <div className="flex items-center justify-between gap-3">

            <div className="min-w-0">

              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Total Teachers
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-1 sm:mt-2">
                {loading ? "..." : stats.totalTeachers}
              </h2>

            </div>

            <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-emerald-100 flex items-center justify-center text-xl sm:text-2xl">
              👨‍🏫
            </div>

          </div>

          <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
            Registered teachers
          </p>

        </div>


        {/* COURSES */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 md:p-6">

          <div className="flex items-center justify-between gap-3">

            <div className="min-w-0">

              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Total Courses
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-1 sm:mt-2">
                {loading ? "..." : stats.totalCourses}
              </h2>

            </div>

            <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-amber-100 flex items-center justify-center text-xl sm:text-2xl">
              📚
            </div>

          </div>

          <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
            Available courses
          </p>

        </div>

      </div>


      {/* ================= DATABASE STATUS ================= */}

      <div className="mt-6 sm:mt-8 bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 md:p-6">

        <h2 className="text-lg sm:text-xl font-bold text-slate-800">
          Database Information
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Live information retrieved from your MongoDB database.
        </p>

        <div className="mt-4 sm:mt-6 flex items-center gap-3">

          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full shrink-0"></span>

          <span className="font-semibold text-sm sm:text-base text-green-600">
            Database Connected
          </span>

        </div>

      </div>

    </div>
  );
}

export default SuperAdminHome;