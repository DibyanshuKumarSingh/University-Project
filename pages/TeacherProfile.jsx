import { useState } from "react";

function TeacherProfile() {
  const [teacher] = useState(() => {
    const savedTeacher = localStorage.getItem("teacher");

    return savedTeacher ? JSON.parse(savedTeacher) : null;
  });

  if (!teacher) {
    return (
      <div className="p-8">
        No teacher profile found. Please log in again.
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        My Profile 👤
      </h1>

      <div className="bg-white max-w-2xl rounded-2xl shadow border p-6">
        
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          {teacher.profilePic ? (
            <img
              src={`http://localhost:5000${teacher.profilePic}`}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
              👤
            </div>
          )}
        </div>

        <div className="space-y-4">

          <p>
            <span className="font-semibold">Name:</span>{" "}
            {teacher.name}
          </p>

          <p>
            <span className="font-semibold">Email:</span>{" "}
            {teacher.email}
          </p>

          <p>
            <span className="font-semibold">Department:</span>{" "}
            {teacher.department}
          </p>

          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {teacher.phone}
          </p>

          <p>
            <span className="font-semibold">Qualification:</span>{" "}
            {teacher.qualification}
          </p>

          <p>
            <span className="font-semibold">Experience:</span>{" "}
            {teacher.experience} Years
          </p>

        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;