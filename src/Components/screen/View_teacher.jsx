
import React, { useEffect, useState } from "react";

function TeacherView() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit states
  const [editingTeacher, setEditingTeacher] = useState(null);

  // Fetch all teachers
  const fetchTeachers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/teachers"
      );

      const data = await response.json();

      if (data.success) {
        setTeachers(data.teachers);
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // Delete teacher
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/teachers/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Teacher deleted successfully!");

        // Remove deleted teacher from UI
        setTeachers((prev) =>
          prev.filter((teacher) => teacher._id !== id)
        );
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete teacher");
    }
  };

  // Open edit form
  const handleEdit = (teacher) => {
    setEditingTeacher({
      ...teacher,
    });
  };

  // Update input
  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditingTeacher({
      ...editingTeacher,
      [name]: value,
    });
  };

  // Update teacher
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/teachers/${editingTeacher._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingTeacher),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Teacher updated successfully!");

        // Update teacher in current list
        setTeachers((prev) =>
          prev.map((teacher) =>
            teacher._id === editingTeacher._id
              ? data.teacher
              : teacher
          )
        );

        // Close edit form
        setEditingTeacher(null);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update teacher");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-3 sm:p-5 md:p-8 lg:p-10">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
              Teacher Management
            </h1>

            <p className="text-slate-500 mt-2">
              View, update and delete registered teachers.
            </p>
          </div>

          <div className="bg-blue-900 text-white px-5 py-3 rounded-xl shadow">
            <span className="text-sm text-blue-200">
              Total Teachers
            </span>

            <p className="text-2xl font-bold">
              {teachers.length}
            </p>
          </div>

        </div>

      </div>

      {/* Teacher List */}
      <div className="max-w-7xl mx-auto">

        {loading ? (
          <div className="bg-white rounded-2xl shadow p-10 text-center">
            <p className="text-slate-500 text-lg">
              Loading teachers...
            </p>
          </div>
        ) : teachers.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-10 text-center">
            <div className="text-5xl mb-4">
              👨‍🏫
            </div>

            <h2 className="text-xl font-bold text-slate-700">
              No Teachers Found
            </h2>

            <p className="text-slate-500 mt-2">
              Register a teacher to see them here.
            </p>
          </div>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm: gap-4 sm: gap-6">

            {teachers.map((teacher) => (

              <div
                key={teacher._id}
                className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition"
              >

                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-24"></div>

                {/* Profile */}
                <div className="px-4 sm:px-6 pb-5 sm:pb-6">

                  <div className="-mt-12 mb-4">

                    {teacher.profilePic ? (
                      <img
                        src={`http://localhost:5000/${teacher.profilePic}`}
                        alt={teacher.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-lg flex items-center justify-center text-3xl">
                        👨‍🏫
                      </div>
                    )}

                  </div>

                  {/* Name */}
                  <h2 className="text-xl font-bold text-slate-800">
                    {teacher.name}
                  </h2>

                  <p className="text-blue-700 font-medium">
                    {teacher.subject}
                  </p>

                  {/* Details */}
                  <div className="mt-5 space-y-3 text-sm">

                    <div className="flex justify-between gap-4">
                      <span className="text-slate-400">
                        Email
                      </span>

                      <span className="text-slate-700 font-medium text-right break-all">
                        {teacher.email}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Phone
                      </span>

                      <span className="text-slate-700 font-medium">
                        {teacher.phone}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Department
                      </span>

                      <span className="text-slate-700 font-medium">
                        {teacher.department}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Qualification
                      </span>

                      <span className="text-slate-700 font-medium">
                        {teacher.qualification}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Experience
                      </span>

                      <span className="text-slate-700 font-medium">
                        {teacher.experience} Years
                      </span>
                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">

                    <button
                      onClick={() => handleEdit(teacher)}
                      className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-2.5 rounded-lg font-semibold transition"
                    >
                      ✏️ Edit
                    </button>

                    <button
                      onClick={() => handleDelete(teacher._id)}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-semibold transition"
                    >
                      🗑️ Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* EDIT MODAL */}
      {editingTeacher && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">

            {/* Modal Header */}
            <div className="bg-blue-900 text-white px-6 py-5 flex justify-between items-center">

              <div>
                <h2 className="text-2xl font-bold">
                  Edit Teacher
                </h2>

                <p className="text-blue-200 text-sm">
                  Update teacher information
                </p>
              </div>

              <button
                type="button"
                onClick={() => setEditingTeacher(null)}
                className="text-2xl hover:text-red-300"
              >
                ✕
              </button>

            </div>

            {/* Edit Form */}
            <form
              onSubmit={handleUpdate}
              className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5"
            >

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={editingTeacher.name || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={editingTeacher.email || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={editingTeacher.phone || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Department
                </label>

                <input
                  type="text"
                  name="department"
                  value={editingTeacher.department || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={editingTeacher.subject || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Qualification
                </label>

                <input
                  type="text"
                  name="qualification"
                  value={editingTeacher.qualification || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Experience
                </label>

                <input
                  type="number"
                  name="experience"
                  value={editingTeacher.experience || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={editingTeacher.age || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Gender
                </label>

                <select
                  name="gender"
                  value={editingTeacher.gender || ""}
                  onChange={handleEditChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Previous Working */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Previous Working
                </label>

                <input
                  type="text"
                  name="previousWorking"
                  value={editingTeacher.previousWorking || ""}
                  onChange={handleEditChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Address
                </label>

                <textarea
                  name="address"
                  value={editingTeacher.address || ""}
                  onChange={handleEditChange}
                  rows="3"
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              {/* Modal Buttons */}
              <div className="md:col-span-2 flex justify-end gap-3 pt-4 border-t">

                <button
                  type="button"
                  onClick={() => setEditingTeacher(null)}
                  className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-7 py-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold"
                >
                  Update Teacher
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default TeacherView;

