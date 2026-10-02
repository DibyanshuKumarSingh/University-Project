import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentRegister() {
  const navigate = useNavigate();

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
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/students/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Student registered successfully!");

      // Go to Student Login
      navigate("/student/login");

    } catch (error) {
      console.error("Student Registration Error:", error);
      alert("Server Error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-blue-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-200";

  const labelClass =
    "block text-white mb-2 font-medium";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-blue-900 via-blue-700 to-cyan-500 px-4 py-10">

      <div className="w-full max-w-5xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white">
            Dibyanshu's University
          </h1>

          <p className="text-blue-100 mt-2">
            Student Registration Portal
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* Full Name */}
          <div>
            <label className={labelClass}>
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className={inputClass}
              required
            />
          </div>


          {/* Father Name */}
          <div>
            <label className={labelClass}>
              Father's Name
            </label>

            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter father's name"
              className={inputClass}
              required
            />
          </div>


          {/* Mother Name */}
          <div>
            <label className={labelClass}>
              Mother's Name
            </label>

            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Enter mother's name"
              className={inputClass}
              required
            />
          </div>


          {/* Date of Birth */}
          <div>
            <label className={labelClass}>
              Date of Birth
            </label>

            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>


          {/* Gender */}
          <div>
            <label className={labelClass}>
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="" className="text-black">
                Select gender
              </option>

              <option value="Male" className="text-black">
                Male
              </option>

              <option value="Female" className="text-black">
                Female
              </option>

              <option value="Other" className="text-black">
                Other
              </option>
            </select>
          </div>


          {/* Phone */}
          <div>
            <label className={labelClass}>
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className={inputClass}
              required
            />
          </div>


          {/* Email */}
          <div>
            <label className={labelClass}>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className={inputClass}
              required
            />
          </div>


          {/* Student ID */}
          <div>
            <label className={labelClass}>
              Student ID
            </label>

            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="Create Student ID"
              className={inputClass}
              required
            />
          </div>


          {/* Course */}
          <div>
            <label className={labelClass}>
              Course
            </label>

            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="e.g. BCA"
              className={inputClass}
              required
            />
          </div>


          {/* Department */}
          <div>
            <label className={labelClass}>
              Department
            </label>

            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
              className={inputClass}
              required
            />
          </div>


          {/* Semester */}
          <div>
            <label className={labelClass}>
              Semester
            </label>

            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="" className="text-black">
                Select semester
              </option>

              <option value="1" className="text-black">
                Semester 1
              </option>

              <option value="2" className="text-black">
                Semester 2
              </option>

              <option value="3" className="text-black">
                Semester 3
              </option>

              <option value="4" className="text-black">
                Semester 4
              </option>

              <option value="5" className="text-black">
                Semester 5
              </option>

              <option value="6" className="text-black">
                Semester 6
              </option>

              <option value="7" className="text-black">
                Semester 7
              </option>

              <option value="8" className="text-black">
                Semester 8
              </option>
            </select>
          </div>


          {/* Admission Year */}
          <div>
            <label className={labelClass}>
              Admission Year
            </label>

            <input
              type="number"
              name="admissionYear"
              value={formData.admissionYear}
              onChange={handleChange}
              placeholder="e.g. 2026"
              className={inputClass}
              required
            />
          </div>


          {/* Password */}
          <div>
            <label className={labelClass}>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className={inputClass}
              required
            />
          </div>


          {/* Address */}
          <div className="md:col-span-2">
            <label className={labelClass}>
              Address
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter complete address"
              rows="3"
              className={inputClass}
              required
            />
          </div>


          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 w-full bg-white text-blue-800 font-bold py-3 rounded-xl hover:bg-blue-100 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register Student"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default StudentRegister;