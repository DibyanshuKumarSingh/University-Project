import React, { useEffect, useState } from "react";

function StudentView() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/student"
      );

      const data = await response.json();

      if (data.success) {
        setStudents(data.students);
      }
    } catch (error) {
      console.error("Student fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              Student Management
            </h1>

            <p className="text-slate-500 mt-2">
              View all registered students.
            </p>

          </div>

          <div className="bg-blue-900 text-white px-6 py-4 rounded-xl shadow">

            <p className="text-blue-200 text-sm">
              Total Students
            </p>

            <p className="text-3xl font-bold">
              {students.length}
            </p>

          </div>

        </div>

        {/* LOADING */}

        {loading && (

          <div className="bg-white rounded-2xl p-10 text-center shadow">

            <p className="text-slate-500">
              Loading students...
            </p>

          </div>

        )}

        {/* EMPTY */}

        {!loading && students.length === 0 && (

          <div className="bg-white rounded-2xl p-10 text-center shadow">

            <div className="text-5xl mb-4">
              🎓
            </div>

            <h2 className="text-xl font-bold text-slate-700">
              No Students Found
            </h2>

            <p className="text-slate-500 mt-2">
              Register a student to see them here.
            </p>

          </div>

        )}

        {/* STUDENT CARDS */}

        {!loading && students.length > 0 && (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {students.map((student) => (

              <div
                key={student._id}
                className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition"
              >

                {/* CARD HEADER */}

                <div className="h-24 bg-gradient-to-r from-blue-900 to-blue-700"></div>

                {/* CARD BODY */}

                <div className="p-6">

                  {/* AVATAR */}

                  <div className="-mt-14 mb-4">

                    <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-white shadow-lg flex items-center justify-center text-4xl">
                      🎓
                    </div>

                  </div>

                  {/* NAME */}

                  <h2 className="text-2xl font-bold text-slate-800">
                    {student.name}
                  </h2>

                  {/* COURSE */}

                  <div className="mt-2 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">

                    {student.course?.courseName || "No Course"}

                  </div>

                  {/* DETAILS */}

                  <div className="mt-6 space-y-3 text-sm">

                    <div className="flex justify-between gap-3">

                      <span className="text-slate-400">
                        Email
                      </span>

                      <span className="text-slate-700 font-medium break-all text-right">
                        {student.email}
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-400">
                        Phone
                      </span>

                      <span className="text-slate-700 font-medium">
                        {student.phone}
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-400">
                        Age
                      </span>

                      <span className="text-slate-700 font-medium">
                        {student.age}
                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span className="text-slate-400">
                        Gender
                      </span>

                      <span className="text-slate-700 font-medium">
                        {student.gender}
                      </span>

                    </div>

                  </div>

                  {/* ADDRESS */}

                  <div className="mt-5 pt-4 border-t border-slate-200">

                    <p className="text-xs text-slate-400 mb-1">
                      Address
                    </p>

                    <p className="text-sm text-slate-700">
                      {student.address}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default StudentView;