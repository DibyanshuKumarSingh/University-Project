import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 py-8 sm:py-10 md:py-12 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* ================= HERO SECTION ================= */}

        <div className="bg-gradient-to-r from-red-900 to-red-700 text-white rounded-2xl sm:rounded-3xl py-10 sm:py-12 md:py-16 px-5 sm:px-8 text-center shadow-xl mb-8 sm:mb-10 md:mb-12">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-100 max-w-2xl mx-auto">
            We're here to answer your questions and guide your future.
          </p>

        </div>


        {/* ================= MAIN SECTION ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">

          {/* ================= CONTACT INFORMATION ================= */}

          <div className="bg-red-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10 shadow-2xl flex flex-col">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              Get In Touch
            </h2>


            <div className="space-y-6 sm:space-y-8">

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="bg-white/20 p-3 sm:p-4 rounded-full text-xl sm:text-2xl shrink-0">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">
                    Address
                  </h3>

                  <p className="text-sm sm:text-base text-red-100">
                    Dibyanshu's University
                    <br />
                    Ranchi, Jharkhand, India
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="bg-white/20 p-3 sm:p-4 rounded-full text-xl sm:text-2xl shrink-0">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">
                    Phone
                  </h3>

                  <p className="text-sm sm:text-base text-red-100 break-all">
                    +91 9876543210
                  </p>
                </div>

              </div>


              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="bg-white/20 p-3 sm:p-4 rounded-full text-xl sm:text-2xl shrink-0">
                  ✉️
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    Email
                  </h3>

                  <p className="text-sm sm:text-base text-red-100 break-words">
                    info@dibyanshuuniversity.edu
                  </p>
                </div>

              </div>


              {/* Office Hours */}
              <div className="flex items-start gap-3 sm:gap-4">

                <div className="bg-white/20 p-3 sm:p-4 rounded-full text-xl sm:text-2xl shrink-0">
                  🕒
                </div>

                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">
                    Office Hours
                  </h3>

                  <p className="text-sm sm:text-base text-red-100">
                    Monday - Saturday
                    <br />
                    9:00 AM - 5:00 PM
                  </p>
                </div>

              </div>

            </div>


            {/* ================= ADMISSIONS BANNER ================= */}

            <div className="mt-8 sm:mt-auto pt-6 sm:pt-10">

              <div className="bg-white text-red-900 p-4 sm:p-6 rounded-2xl">

                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Admissions Open 2026
                </h3>

                <p className="text-sm sm:text-base">
                  Join Dibyanshu's University and build your future with us.
                </p>

              </div>


              {/* Social Icons */}
              <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6">

                <button className="bg-white/20 p-3 sm:p-4 rounded-full hover:bg-white hover:text-red-900 transition">
                  📘
                </button>

                <button className="bg-white/20 p-3 sm:p-4 rounded-full hover:bg-white hover:text-red-900 transition">
                  📸
                </button>

                <button className="bg-white/20 p-3 sm:p-4 rounded-full hover:bg-white hover:text-red-900 transition">
                  💼
                </button>

              </div>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}

          <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10 shadow-2xl border border-gray-200">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 mb-2">
              Send a Message
            </h2>

            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
              Fill out the form below and our team will get back to you soon.
            </p>


            <form className="space-y-5 sm:space-y-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-700"
                  />
                </div>


                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-700"
                  />
                </div>

              </div>


              {/* Subject */}
              <div>

                <label className="block mb-2 font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-700"
                />

              </div>


              {/* Message */}
              <div>

                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-300 bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-red-700"
                ></textarea>

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-red-900 to-red-600 text-white text-base sm:text-lg font-semibold hover:scale-[1.02] sm:hover:scale-105 transition duration-300 shadow-lg"
              >
                Send Message →
              </button>

            </form>


            {/* Security */}
            <div className="border-t mt-6 sm:mt-8 pt-5 sm:pt-6 text-center text-sm sm:text-base text-gray-500">
              🔒 Your information is secure and confidential.
            </div>

          </div>

        </div>


        {/* ================= CAMPUS IMAGE ================= */}

        <div className="mt-8 sm:mt-10 md:mt-12 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">

          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585"
            alt="University Campus"
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
          />

        </div>

      </div>
    </div>
  );
}

export default Contact;