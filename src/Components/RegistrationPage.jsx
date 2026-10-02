import React, { useRef, useState } from "react";
import RegisterTeacher from "./RegisterTeacher";
import StudentRegister from "./StudentRegister";

function RegistrationPage() {
  const [selectedType, setSelectedType] = useState("");

  const formRef = useRef(null);

  const handleSelect = (type) => {
    setSelectedType(type);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ========================= */}
      {/* REGISTRATION SELECTION */}
      {/* ========================= */}

      <section className="min-h-screen flex flex-col items-center justify-center px-6">

        <h1 className="text-5xl font-bold text-[#002b5b] mb-4">
          Registration
        </h1>

        <p className="text-gray-600 text-lg mb-12">
          Select your account type to continue
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">

          {/* ========================= */}
          {/* TEACHER */}
          {/* ========================= */}

          <button
            type="button"
            onClick={() => handleSelect("teacher")}
            className={`group bg-white rounded-3xl p-10 shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              selectedType === "teacher"
                ? "border-[#002b5b]"
                : "border-transparent"
            }`}
          >

            <div className="text-6xl mb-5">
              👨‍🏫
            </div>

            <h2 className="text-3xl font-bold text-[#002b5b] mb-3">
              Teacher
            </h2>

            <p className="text-gray-500">
              Register as a teacher or staff member
            </p>

            <div className="mt-6 inline-block bg-[#002b5b] text-white px-8 py-3 rounded-xl font-bold group-hover:bg-[#003d80]">
              Register as Teacher
            </div>

          </button>


          {/* ========================= */}
          {/* STUDENT */}
          {/* ========================= */}

          <button
            type="button"
            onClick={() => handleSelect("student")}
            className={`group bg-white rounded-3xl p-10 shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              selectedType === "student"
                ? "border-[#002b5b]"
                : "border-transparent"
            }`}
          >

            <div className="text-6xl mb-5">
              👨‍🎓
            </div>

            <h2 className="text-3xl font-bold text-[#002b5b] mb-3">
              Student
            </h2>

            <p className="text-gray-500">
              Register as a student
            </p>

            <div className="mt-6 inline-block bg-[#002b5b] text-white px-8 py-3 rounded-xl font-bold group-hover:bg-[#003d80]">
              Register as Student
            </div>

          </button>

        </div>

      </section>


      {/* ========================= */}
      {/* REGISTRATION FORM */}
      {/* ========================= */}

      <section
        ref={formRef}
        className="scroll-mt-6"
      >

        {selectedType === "teacher" && (
          <RegisterTeacher />
        )}

        {selectedType === "student" && (
          <StudentRegister />
        )}

      </section>

    </div>
  );
}

export default RegistrationPage;