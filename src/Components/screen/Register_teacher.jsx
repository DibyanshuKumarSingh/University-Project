
import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    department: "",
    experience: "",
    qualification: "",
    gender: "",
    age: "",
    previousWorking: "",
    subject: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

      const response = await fetch(
        "http://localhost:5000/api/teacher/register",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Teacher registered successfully!");

        setFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          department: "",
          experience: "",
          qualification: "",
          gender: "",
          age: "",
          previousWorking: "",
          subject: "",
          profilePic: null,
        });

        document.getElementById("profilePic").value = "";
      } else {
        alert(result.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Register Teacher
          </h1>

          <p className="text-slate-500 mt-2">
            Add a new teacher to your university management system.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 md:px-10 py-7 text-white">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center text-2xl">
                👨‍🏫
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Teacher Information
                </h2>

                <p className="text-blue-100 text-sm mt-1">
                  Enter the teacher's personal and professional details.
                </p>
              </div>

            </div>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-10">

            {/* Personal Information */}
            <div className="mb-10">

              <h3 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                <span>👤</span>
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="teacher@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Password */}
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Phone */}
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter age"
                    min="18"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              {/* Address */}
              <div className="mt-6">

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete address"
                  rows="3"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 outline-none resize-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

            {/* Professional Information */}
            <div className="border-t border-slate-200 pt-8 mb-10">

              <h3 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                <span>🎓</span>
                Professional Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Department */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Department
                  </label>

                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="e.g. Computer Science"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Mathematics"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g. M.Tech / PhD"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Experience
                  </label>

                  <div className="relative">

                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Years of experience"
                      min="0"
                      required
                      className="w-full px-4 py-3 pr-20 rounded-lg border border-slate-300 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />

                    <span className="absolute right-4 top-3.5 text-sm text-slate-400">
                      Years
                    </span>

                  </div>
                </div>

                {/* Previous Working */}
                <div className="md:col-span-2">

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Previous Working
                  </label>

                  <input
                    type="text"
                    name="previousWorking"
                    value={formData.previousWorking}
                    onChange={handleChange}
                    placeholder="Previous college, university or organization"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>

            </div>

            {/* Profile Picture */}
            <div className="border-t border-slate-200 pt-8 mb-8">

              <h3 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                <span>📷</span>
                Profile Picture
              </h3>

              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-blue-500 transition">

                <div className="text-4xl mb-3">
                  🖼️
                </div>

                <p className="font-semibold text-slate-700">
                  Upload Teacher Photo
                </p>

                <p className="text-sm text-slate-400 mt-1 mb-4">
                  PNG, JPG or JPEG
                </p>

                <input
                  id="profilePic"
                  type="file"
                  name="profilePic"
                  accept="image/*"
                  onChange={handleChange}
                  className="block w-full max-w-md mx-auto text-sm text-slate-600
                  file:mr-4 file:py-2 file:px-5
                  file:rounded-lg file:border-0
                  file:bg-blue-900 file:text-white
                  file:font-semibold
                  hover:file:bg-blue-800
                  cursor-pointer"
                />

              </div>

            </div>

            {/* Buttons */}
            <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-end gap-4">

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                    phone: "",
                    address: "",
                    department: "",
                    experience: "",
                    qualification: "",
                    gender: "",
                    age: "",
                    previousWorking: "",
                    subject: "",
                    profilePic: null,
                  })
                }
                className="px-7 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition"
              >
                Reset
              </button>

              <button
                type="submit"
                className="px-8 py-3 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition shadow-lg hover:shadow-xl"
              >
                Register Teacher →
              </button>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;

