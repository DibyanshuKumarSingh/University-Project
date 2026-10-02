import React from "react";
import first from "../../public/aboutImage.jpg";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10 sm:py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left Content */}
          <div>

            <span className="text-xs sm:text-sm text-red-800 font-semibold uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2 sm:mt-3 mb-4">
              Shaping Future Leaders
            </h2>

            <div className="w-20 sm:w-24 h-1 bg-yellow-500 rounded-full mb-6 sm:mb-8"></div>

            <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mb-4">
              Dibyanshu's University is committed to academic excellence,
              innovation, and student success. We empower students through
              world-class education, cutting-edge research, and practical
              learning experiences.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
              Our vibrant campus environment, experienced faculty, and modern
              facilities help students develop the skills, confidence, and
              leadership qualities needed for a successful future.
            </p>


            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">

              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-red-800">
                  10K+
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Students
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-red-800">
                  200+
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Faculty
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-red-800">
                  95%
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Placement
                </p>
              </div>

            </div>

          </div>


          {/* Right Image */}
          <div className="relative group mt-4 md:mt-0">

            {/* Decorative Yellow Background */}
            <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-full h-full bg-yellow-400 rounded-3xl"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={first}
                alt="University Campus"
                className="
                  w-full
                  h-[350px]
                  sm:h-[450px]
                  md:h-[500px]
                  lg:h-[550px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Image Text */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  DIBYANSHU'S UNIVERSITY
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-gray-200">
                  Learn • Lead • Succeed
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}