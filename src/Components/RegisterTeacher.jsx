import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterTeacher() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
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
    profilePic: "",
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

  const teacherData = new FormData();

  Object.keys(formData).forEach((key) => {
    teacherData.append(key, formData[key]);
  });

  try {
    const response = await fetch("http://localhost:5000/api/teacher/register", {
      method: "POST",
      body: teacherData,
    });

    const text = await response.text();
    console.log("Server Response:", text);

    if (!response.ok) {
      alert("Server Error");
      return;
    }

    const data = JSON.parse(text);

    alert(data.message);
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
      profilePic: "",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";


      navigate("/teacher/login");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-emerald-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-200";

  const labelClass = "block text-white mb-2 font-medium";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-emerald-900 via-teal-700 to-cyan-500 px-4 py-10">
      <div className="w-full max-w-4xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Dibyanshu University
          </h1>
          <p className="text-emerald-100 mt-2">Teacher Registration Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter teacher name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className={inputClass}
            />
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows="3"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Experience</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience in years"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Enter qualification"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" className="text-black">Select gender</option>
              <option value="Male" className="text-black">Male</option>
              <option value="Female" className="text-black">Female</option>
              <option value="Other" className="text-black">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Previous Working</label>
            <input
              type="text"
              name="previousWorking"
              value={formData.previousWorking}
              onChange={handleChange}
              placeholder="Previous working school/college"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Profile Pic</label>
            <input
              ref={fileInputRef}
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30 file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:text-teal-800 file:font-bold"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 w-full bg-white text-teal-800 font-bold py-3 rounded-xl hover:bg-emerald-100 transition duration-300"
          >
            Register Teacher
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterTeacher;