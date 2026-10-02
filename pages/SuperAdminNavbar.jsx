import React from "react";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function SuperAdminNavbar({ onMenuClick }) {
  return (
    <header className="bg-white shadow-md px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shrink-0">

      {/* Left Section */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-1 rounded-lg hover:bg-gray-100"
          aria-label="Open menu"
        >
          <Bars3Icon className="w-7 h-7 text-gray-700" />
        </button>

        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate">
          Super Admin Dashboard
        </h1>

      </div>


      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-5 md:gap-6">

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-sm w-32 lg:w-auto"
          />
        </div>


        {/* Notification */}
        <button className="relative p-1">
          <BellIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
            3
          </span>
        </button>


        {/* Profile */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">

          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-yellow-400 shrink-0"
          />

          <div className="hidden md:block">
            <h2 className="font-semibold text-gray-800">
              Super Admin
            </h2>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default SuperAdminNavbar;