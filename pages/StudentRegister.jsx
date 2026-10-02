import React, { useEffect, useState } from "react";

function StudentRegister() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    studentId: "",
    course: "",
    department: "",
    semester: "",
    admissionYear: "",
    password: "",
    confirmPassword: "",
    photo: null,
  });

  // =========================
  // FETCH COURSES
  // =========================

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/courses"
        );

        const data = await response.json();

        if (data.success) {
          setCourses(data.courses);
        }
      } catch (error) {
        console.error("Course fetch error:", error);
      }
    };

    fetchCourses();
  }, []);

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // HANDLE PHOTO
  // =========================

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("fatherName", formData.fatherName);
      data.append("motherName", formData.motherName);
      data.append("dateOfBirth", formData.dateOfBirth);
      data.append("gender", formData.gender);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("address", formData.address);
      data.append("studentId", formData.studentId);
      data.append("course", formData.course);
      data.append("department", formData.department);
      data.append("semester", formData.semester);
      data.append("admissionYear", formData.admissionYear);
      data.append("password", formData.password);

      if (formData.photo) {
        data.append("photo", formData.photo);
      }

      const response = await fetch(
        "http://localhost:5000/api/student/register",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Student registered successfully!");

        setFormData({
          fullName: "",
          fatherName: "",
          motherName: "",
          dateOfBirth: "",
          gender: "",
          phone: "",
          email: "",
          address: "",
          studentId: "",
          course: "",
          department: "",
          semester: "",
          admissionYear: "",
          password: "",
          confirmPassword: "",
          photo: null,
        });

        const photoInput = document.getElementById("photo");

        if (photoInput) {
          photoInput.value = "";
        }
      } else {
        alert(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
            Student Portal
          </p>

          <h1 className="text-4xl font-bold text-slate-800 mt-1">
            Student Registration
          </h1>

          <p className="text-slate-500 mt-2">
            Create your student account by entering your details below.
          </p>
        </div>

        {/* FORM */}

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

          {/* FORM HEADER */}

          <div className="bg-blue-900 px-8 py-6 text-white">
            <h2 className="text-2xl font-bold">
              Create Student Account
            </h2>

            <p className="text-blue-200 mt-1">
              Enter your personal, academic and account information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">

            {/* ================= PERSONAL ================= */}

            <h3 className="text-xl font-bold text-slate-800 mb-5">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* FULL NAME */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                  className="input"
                />
              </div>

              {/* FATHER NAME */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Father's Name
                </label>

                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Enter father's name"
                  required
                  className="input"
                />
              </div>

              {/* MOTHER NAME */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Mother's Name
                </label>

                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder="Enter mother's name"
                  required
                  className="input"
                />
              </div>

              {/* DOB */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              {/* GENDER */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="input"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* PHONE */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                  className="input"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@example.com"
                  required
                  className="input"
                />
              </div>

              {/* PHOTO */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Profile Photo
                </label>

                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white text-slate-800"
                />
              </div>

              {/* ADDRESS */}

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete address"
                  rows="4"
                  required
                  className="input resize-none"
                />
              </div>

            </div>

            {/* ================= ACADEMIC ================= */}

            <div className="border-t border-slate-200 mt-10 pt-8">

              <h3 className="text-xl font-bold text-slate-800 mb-5">
                Academic Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* STUDENT ID */}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Student ID
                  </label>

                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Example: STU2026001"
                    required
                    className="input"
                  />
                </div>

                {/* COURSE */}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Course
                  </label>

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Select Course</option>

                    {courses.map((course) => (
                      <option
                        key={course._id}
                        value={course.courseName}
                      >
                        {course.courseName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* DEPARTMENT */}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Department
                  </label>

                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Example: Computer Science"
                    required
                    className="input"
                  />
                </div>

                {/* SEMESTER */}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Semester
                  </label>

                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Select Semester</option>
                    <option value="1st">1st Semester</option>
                    <option value="2nd">2nd Semester</option>
                    <option value="3rd">3rd Semester</option>
                    <option value="4th">4th Semester</option>
                    <option value="5th">5th Semester</option>
                    <option value="6th">6th Semester</option>
                    <option value="7th">7th Semester</option>
                    <option value="8th">8th Semester</option>
                  </select>
                </div>

                {/* ADMISSION YEAR */}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Admission Year
                  </label>

                  <input
                    type="number"
                    name="admissionYear"
                    value={formData.admissionYear}
                    onChange={handleChange}
                    placeholder="Example: 2026"
                    min="2000"
                    max="2100"
                    required
                    className="input"
                  />
                </div>

              </div>
            </div>

            {/* ================= ACCOUNT ================= */}

            <div className="border-t border-slate-200 mt-10 pt-8">

              <h3 className="text-xl font-bold text-slate-800 mb-5">
                Account Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* PASSWORD */}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    minLength="6"
                    required
                    className="input"
                  />
                </div>

                {/* CONFIRM PASSWORD */}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    minLength="6"
                    required
                    className="input"
                  />
                </div>

              </div>
            </div>

            {/* ================= BUTTON ================= */}

            <div className="flex justify-end mt-10">

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition"
              >
                {loading ? "Registering..." : "Create Student Account"}
              </button>

            </div>

          </form>
        </div>
      </div>

      {/* INPUT STYLE */}

      <style>
        {`
          .input {
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
            background: white;
            color: #1e293b;
            outline: none;
          }

          .input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 2px #dbeafe;
          }
        `}
      </style>
    </div>
  );
}

export default StudentRegister;