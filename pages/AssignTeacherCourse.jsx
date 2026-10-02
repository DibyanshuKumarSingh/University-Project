import React, { useEffect, useState } from "react";

function AssignTeacherCourse() {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);

  const [teacherId, setTeacherId] = useState("");
  const [courseId, setCourseId] = useState("");

  const [loading, setLoading] = useState(false);

  // =========================
  // FETCH TEACHERS
  // =========================

  const fetchTeachers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/teacher"
      );

      const data = await response.json();

      if (data.success) {
        setTeachers(data.teachers);
      }
    } catch (error) {
      console.error("Teacher fetch error:", error);
    }
  };

  // =========================
  // FETCH COURSES
  // =========================

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/course"
      );

      const data = await response.json();

      if (data.success) {
        setCourses(data.courses);
      }
    } catch (error) {
      console.error("Course fetch error:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
    fetchCourses();
  }, []);

  // =========================
  // ASSIGN COURSE
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!teacherId || !courseId) {
      alert("Please select teacher and course");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/teacher/assign-course",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teacherId,
            courseId,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Course assigned successfully!");

        setTeacherId("");
        setCourseId("");

        fetchTeachers();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Assignment error:", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  // Selected course
  const selectedCourse = courses.find(
    (course) => course._id === courseId
  );

  return (
    <div className="max-w-5xl mx-auto">

      {/* HEADER */}

      <div className="mb-8">

        <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
          Teacher Management
        </p>

        <h1 className="text-3xl font-bold text-slate-800 mt-1">
          Assign Course
        </h1>

        <p className="text-slate-500 mt-2">
          Assign courses to teachers from your database.
        </p>

      </div>


      {/* ASSIGNMENT CARD */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="bg-blue-900 px-8 py-6 text-white">

          <h2 className="text-2xl font-bold">
            Teacher Course Assignment
          </h2>

          <p className="text-blue-200 mt-1">
            Select a teacher and assign an existing course.
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* TEACHER */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Select Teacher
              </label>

              <select
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              >

                <option value="">
                  Select Teacher
                </option>

                {teachers.map((teacher) => (
                  <option
                    key={teacher._id}
                    value={teacher._id}
                  >
                    {teacher.name} — {teacher.department}
                  </option>
                ))}

              </select>

            </div>


            {/* COURSE */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Select Course
              </label>

              <select
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              >

                <option value="">
                  Select Course
                </option>

                {courses.map((course) => (
                  <option
                    key={course._id}
                    value={course._id}
                  >
                    {course.courseName}
                  </option>
                ))}

              </select>

            </div>

          </div>


          {/* COURSE SUBJECTS */}

          {selectedCourse && (
            <div className="mt-6 p-5 bg-slate-50 border border-slate-200 rounded-xl">

              <h3 className="font-bold text-slate-800">
                Course Subjects
              </h3>

              <div className="flex flex-wrap gap-2 mt-3">

                {selectedCourse.subjects.map(
                  (subject, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  )
                )}

              </div>

            </div>
          )}


          {/* BUTTON */}

          <div className="flex justify-end mt-8">

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 hover:bg-blue-800 disabled:bg-slate-400 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              {loading
                ? "Assigning..."
                : "Assign Course"}
            </button>

          </div>

        </form>

      </div>


      {/* CURRENT ASSIGNMENTS */}

      <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <div className="px-6 py-5 border-b border-slate-200">

          <h2 className="text-xl font-bold text-slate-800">
            Current Teacher Assignments
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Courses currently assigned to teachers.
          </p>

        </div>


        <div className="divide-y divide-slate-200">

          {teachers.length === 0 ? (

            <div className="p-6 text-center text-slate-500">
              No teachers found.
            </div>

          ) : (

            teachers.map((teacher) => (

              <div
                key={teacher._id}
                className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >

                <div>

                  <h3 className="font-bold text-slate-800">
                    {teacher.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {teacher.department}
                  </p>

                </div>


                <div className="flex flex-wrap gap-2">

                  {teacher.assignedCourses?.length > 0 ? (

                    teacher.assignedCourses.map(
                      (course, index) => (

                        <span
                          key={course._id || index}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                        >
                          {course.courseName || course}
                        </span>

                      )
                    )

                  ) : (

                    <span className="text-sm text-slate-400">
                      No course assigned
                    </span>

                  )}

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default AssignTeacherCourse;