import React, { useEffect, useState } from "react";

function Course() {
  const [courseName, setCourseName] = useState("");
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);

  const [courses, setCourses] = useState([]);

  const [editingCourse, setEditingCourse] = useState(null);

  // =========================
  // GET COURSES
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
      console.error(error);
    }
  };

  useEffect(() => {
    const loadCourses = async () => {
      await fetchCourses();
    };

    loadCourses();
  }, []);

  // =========================
  // ADD SUBJECT
  // =========================

  const addSubject = () => {
    if (!subject.trim()) return;

    setSubjects([...subjects, subject.trim()]);

    setSubject("");
  };

  // =========================
  // REMOVE SUBJECT
  // =========================

  const removeSubject = (index) => {
    setSubjects(
      subjects.filter((_, i) => i !== index)
    );
  };

  // =========================
  // CREATE COURSE
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseName.trim()) {
      alert("Enter course name");
      return;
    }

    if (subjects.length === 0) {
      alert("Add at least one subject");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/course",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            courseName,
            subjects,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Course added successfully");

        setCourseName("");
        setSubject("");
        setSubjects([]);

        fetchCourses();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  // =========================
  // DELETE COURSE
  // =========================

  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/course/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Course deleted successfully");

        setCourses(
          courses.filter((course) => course._id !== id)
        );
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // =========================
  // EDIT COURSE
  // =========================

  const editCourse = (course) => {
    setEditingCourse({
      ...course,
      subjects: [...course.subjects],
    });
  };

  // =========================
  // UPDATE COURSE
  // =========================

  const updateCourse = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/course/${editingCourse._id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            courseName: editingCourse.courseName,
            subjects: editingCourse.subjects,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Course updated successfully");

        setEditingCourse(null);

        fetchCourses();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Course Management
          </h1>

          <p className="text-slate-500 mt-2">
            Manage courses and their subjects.
          </p>
        </div>

        {/* ADD COURSE */}

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Add New Course
          </h2>

          <form onSubmit={handleSubmit}>

            {/* COURSE NAME */}

            <div className="mb-6">

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Course Name
              </label>

              <input
                type="text"
                value={courseName}
                onChange={(e) =>
                  setCourseName(e.target.value)
                }
                placeholder="Example: BCA"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* SUBJECT */}

            <div className="mb-5">

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Add Subject
              </label>

              <div className="flex gap-3">

                <input
                  type="text"
                  value={subject}
                  onChange={(e) =>
                    setSubject(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSubject();
                    }
                  }}
                  placeholder="Example: Data Structures"
                  className="flex-1 border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={addSubject}
                  className="bg-blue-900 hover:bg-blue-800 text-white px-6 rounded-lg font-semibold"
                >
                  + Add
                </button>

              </div>

            </div>

            {/* SUBJECT LIST */}

            <div className="flex flex-wrap gap-3 mb-6">

              {subjects.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
                >

                  <span>{item}</span>

                  <button
                    type="button"
                    onClick={() =>
                      removeSubject(index)
                    }
                    className="font-bold text-red-600"
                  >
                    ×
                  </button>

                </div>

              ))}

            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold shadow"
            >
              Add Course
            </button>

          </form>

        </div>

        {/* COURSE LIST */}

        <div>

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-2xl font-bold text-slate-800">
              All Courses
            </h2>

            <span className="bg-blue-900 text-white px-4 py-2 rounded-lg">
              {courses.length} Courses
            </span>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {courses.map((course) => (

              <div
                key={course._id}
                className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition"
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-bold text-slate-800">
                      {course.courseName}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      {course.subjects.length} Subjects
                    </p>

                  </div>

                  <div className="text-3xl">
                    🎓
                  </div>

                </div>

                {/* SUBJECTS */}

                <div className="mt-5 space-y-2">

                  {course.subjects.map(
                    (subject, index) => (

                      <div
                        key={index}
                        className="bg-slate-100 px-4 py-2 rounded-lg text-slate-700"
                      >
                        {index + 1}. {subject}
                      </div>

                    )
                  )}

                </div>

                {/* BUTTONS */}

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() =>
                      editCourse(course)
                    }
                    className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteCourse(course._id)
                    }
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold"
                  >
                    🗑️ Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ===================== */}
      {/* EDIT MODAL */}
      {/* ===================== */}

      {editingCourse && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Edit Course
              </h2>

              <button
                onClick={() =>
                  setEditingCourse(null)
                }
                className="text-2xl text-slate-500"
              >
                ×
              </button>

            </div>

            <form onSubmit={updateCourse}>

              {/* COURSE NAME */}

              <label className="block font-semibold mb-2">
                Course Name
              </label>

              <input
                type="text"
                value={editingCourse.courseName}
                onChange={(e) =>
                  setEditingCourse({
                    ...editingCourse,
                    courseName: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-3 mb-6"
              />

              {/* SUBJECTS */}

              <label className="block font-semibold mb-2">
                Subjects
              </label>

              <div className="space-y-3 mb-6">

                {editingCourse.subjects.map(
                  (item, index) => (

                    <div
                      key={index}
                      className="flex gap-2"
                    >

                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {

                          const updatedSubjects = [
                            ...editingCourse.subjects,
                          ];

                          updatedSubjects[index] =
                            e.target.value;

                          setEditingCourse({
                            ...editingCourse,
                            subjects: updatedSubjects,
                          });

                        }}
                        className="flex-1 border rounded-lg px-4 py-3"
                      />

                      <button
                        type="button"
                        onClick={() => {

                          const updatedSubjects =
                            editingCourse.subjects.filter(
                              (_, i) => i !== index
                            );

                          setEditingCourse({
                            ...editingCourse,
                            subjects: updatedSubjects,
                          });

                        }}
                        className="bg-red-600 text-white px-4 rounded-lg"
                      >
                        ×
                      </button>

                    </div>

                  )
                )}

              </div>

              {/* UPDATE */}

              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() =>
                    setEditingCourse(null)
                  }
                  className="px-6 py-3 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold"
                >
                  Update Course
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Course;