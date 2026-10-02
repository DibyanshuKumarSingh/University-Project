import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        {/* ================= TOP BAR ================= */}
        <div className="bg-[#002b5b] border-t-4 border-[#0b2239]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col lg:flex-row justify-between items-center gap-2">

            {/* Left Section */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-4 text-yellow-400 font-bold text-[11px] sm:text-[13px] text-center">

              <span>Screen Reader Access</span>

              <span className="hidden sm:inline text-white opacity-70">|</span>

              <span className="flex items-center gap-2">
                <i className="fa-solid fa-phone"></i>
                0651-2214301
              </span>

              <span className="hidden sm:inline text-white opacity-70">|</span>

              <span className="flex items-center gap-2">
                <i className="fa-solid fa-envelope"></i>
                info@xcrrai.org.in
              </span>

            </div>

            {/* Right Section */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-0">

              <a
                href="#"
                className="text-yellow-400 underline font-bold px-2 sm:mr-6 text-xs sm:text-sm"
              >
                e-Certificate Verification
              </a>

              {/* Staff Login */}
              <Link
                to="/teacher/login"
                className="
                  bg-yellow-400
                  text-black
                  px-3 sm:px-6
                  py-2 sm:py-3
                  text-xs sm:text-sm
                  font-bold
                  border-l
                  border-black/20
                  transition-all
                  duration-300
                  hover:bg-transparent
                  hover:text-white
                "
              >
                STAFF LOGIN
              </Link>

              {/* Student Login */}
              <Link
                to="/student/login"
                className="
                  bg-yellow-400
                  text-black
                  px-3 sm:px-6
                  py-2 sm:py-3
                  text-xs sm:text-sm
                  font-bold
                  border-l
                  border-black/20
                  transition-all
                  duration-300
                  hover:bg-transparent
                  hover:text-white
                "
              >
                STUDENT LOGIN
              </Link>

            </div>
          </div>
        </div>
      </header>


      {/* ================= MAIN NAVBAR ================= */}

      <nav className="bg-gradient-to-r from-red-900 to-white text-white shadow-md">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

          <div className="flex justify-between items-center">

            {/* University Name */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
              Dibyanshu's University
            </h1>


            {/* ================= DESKTOP MENU ================= */}

            <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">

              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 text-black cursor-pointer"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 text-black cursor-pointer"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 text-black cursor-pointer"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 text-black cursor-pointer"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="hover:text-blue-400 text-black cursor-pointer"
                >
                  Register
                </Link>
              </li>

              <li>
                <Link
                  to="/superadmin/login"
                  className="hover:text-blue-400 text-black cursor-pointer"
                >
                  Super Admin
                </Link>
              </li>

            </ul>


            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-black text-2xl p-2"
              aria-label="Toggle menu"
            >
              <i
                className={`fa-solid ${
                  menuOpen ? "fa-xmark" : "fa-bars"
                }`}
              ></i>
            </button>

          </div>


          {/* ================= MOBILE MENU ================= */}

          {menuOpen && (
            <ul className="md:hidden mt-3 pb-3 border-t border-black/20 pt-3 space-y-2">

              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black hover:text-blue-400 py-2"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black hover:text-blue-400 py-2"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black hover:text-blue-400 py-2"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black hover:text-blue-400 py-2"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black hover:text-blue-400 py-2"
                >
                  Register
                </Link>
              </li>

              <li>
                <Link
                  to="/superadmin/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-black hover:text-blue-400 py-2"
                >
                  Super Admin
                </Link>
              </li>

            </ul>
          )}

        </div>
      </nav>
    </>
  );
}

export default Navbar;