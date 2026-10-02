import React from "react";

function Footer() {
  return (
    <footer className="bg-[#001a4d] text-white px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-14">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

        {/* ================= LEFT SECTION ================= */}
        <div>

          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6">

            {/* Shield Logo */}
            <div className="relative w-14 h-18 sm:w-16 sm:h-20 md:w-20 md:h-24 border-4 border-yellow-400 rounded-b-[25px] rounded-t-xl flex items-center justify-center shrink-0">

              <span className="text-yellow-400 text-3xl sm:text-4xl font-bold">
                D
              </span>

              <div className="absolute -top-3 sm:-top-4 w-8 sm:w-10 h-2 sm:h-3 bg-yellow-400 rounded-sm"></div>

            </div>


            {/* University Name */}
            <div className="min-w-0">

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                DIBYANSHU'S
              </h1>

              <h2 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold">
                UNIVERSITY
              </h2>

              <p className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[4px] mt-2 whitespace-nowrap">
                LEARN • LEAD • SUCCEED
              </p>

            </div>

          </div>


          {/* Contact */}
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9">

            <p>
              Dibyanshu's University <br />
              Knowledge City, Ranchi <br />
              Jharkhand - 834001
            </p>

            <p>
              Phone : 0651-2214301 <br />
              Mobile : 9204548576
            </p>

            <p className="break-words">
              info@dibyanshuuniversity.edu.in
            </p>

          </div>

        </div>


        {/* ================= ADMISSIONS ================= */}
        <div className="lg:border-l lg:border-white/20 lg:pl-8">

          <h1 className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Admissions
          </h1>

          <div className="space-y-3 sm:space-y-5 text-sm sm:text-base md:text-lg">

            <p className="hover:text-yellow-400 cursor-pointer">
              › College Prospectus
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Programme & Courses
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Course Fee
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Payment Terms
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Apply Online
            </p>

          </div>

        </div>


        {/* ================= EXAM ================= */}
        <div className="lg:border-l lg:border-white/20 lg:pl-8">

          <h1 className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Exam Department
          </h1>

          <div className="space-y-3 sm:space-y-5 text-sm sm:text-base md:text-lg">

            <p className="hover:text-yellow-400 cursor-pointer">
              › Exam Notice
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Examination Cell
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Responsibilities
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Activities
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Committee
            </p>

          </div>

        </div>


        {/* ================= WEBSITE LINKS ================= */}
        <div className="lg:border-l lg:border-white/20 lg:pl-8">

          <h1 className="text-yellow-400 text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Website Links
          </h1>

          <div className="space-y-3 sm:space-y-5 text-sm sm:text-base md:text-lg">

            <p className="hover:text-yellow-400 cursor-pointer">
              › UGC
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › UGC NET
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › Ranchi University
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › UPSC
            </p>

            <p className="hover:text-yellow-400 cursor-pointer">
              › JPSC
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;