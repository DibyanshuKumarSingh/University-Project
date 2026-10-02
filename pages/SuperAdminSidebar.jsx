import React from "react";
import { NavLink } from "react-router-dom";

import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  BookOpenIcon,
  BellAlertIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function SuperAdminSidebar({ sidebarOpen, setSidebarOpen }) {

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-3 transition ${
      isActive
        ? "bg-gray-800 text-yellow-400"
        : "hover:bg-gray-800"
    }`;

  const subLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-8 py-2 transition ${
      isActive
        ? "bg-gray-800 text-yellow-400"
        : "hover:bg-gray-800"
    }`;

  return (
    <aside
      className={`
        fixed md:relative
        top-0 left-0
        z-50
        w-64
        h-full
        bg-gray-900
        text-white
        overflow-y-auto
        transform
        transition-transform
        duration-300
        ease-in-out
        md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >

      {/* ================= LOGO ================= */}

      <div className="p-5 sm:p-6 border-b border-gray-700 flex items-center justify-between">

        <h1 className="text-xl sm:text-2xl font-bold text-yellow-400">
          Super Admin
        </h1>

        {/* Mobile Close Button */}
        <button
          onClick={closeSidebar}
          className="md:hidden p-1 rounded hover:bg-gray-800"
          aria-label="Close menu"
        >
          <XMarkIcon className="w-7 h-7" />
        </button>

      </div>


      {/* ================= MENU ================= */}

      <nav className="mt-4 pb-6">

        {/* Dashboard */}
        <NavLink
          to="/superadmin/dashboard"
          onClick={closeSidebar}
          className={linkClass}
        >
          <HomeIcon className="w-6 h-6" />
          Dashboard
        </NavLink>


        {/* Teachers */}
        <div className="mt-3">

          <p className="px-6 text-xs uppercase text-gray-400 mb-2">
            Teachers
          </p>

          <NavLink
            to="/superadmin/add-teacher"
            onClick={closeSidebar}
            className={subLinkClass}
          >
            <UserGroupIcon className="w-5 h-5" />
            Add Teacher
          </NavLink>

          <NavLink
            to="/superadmin/view-teachers"
            onClick={closeSidebar}
            className={subLinkClass}
          >
            <UserGroupIcon className="w-5 h-5" />
            View Teachers
          </NavLink>

          <NavLink
            to="/superadmin/assign-teacher-course"
            onClick={closeSidebar}
            className={subLinkClass}
          >
            <BookOpenIcon className="w-5 h-5" />
            Assign Course
          </NavLink>

        </div>


        {/* Students */}
        <div className="mt-3">

          <p className="px-6 text-xs uppercase text-gray-400 mb-2">
            Students
          </p>

          <NavLink
            to="/superadmin/add-student"
            onClick={closeSidebar}
            className={subLinkClass}
          >
            <AcademicCapIcon className="w-5 h-5" />
            Add Student
          </NavLink>

          <NavLink
            to="/superadmin/view-students"
            onClick={closeSidebar}
            className={subLinkClass}
          >
            <AcademicCapIcon className="w-5 h-5" />
            View Students
          </NavLink>

        </div>


        {/* Departments */}
        <NavLink
          to="/superadmin/departments"
          onClick={closeSidebar}
          className={`${linkClass} mt-2`}
        >
          <BuildingOffice2Icon className="w-6 h-6" />
          Departments
        </NavLink>


        {/* Courses */}
        <NavLink
          to="/superadmin/courses"
          onClick={closeSidebar}
          className={linkClass}
        >
          <BookOpenIcon className="w-6 h-6" />
          Courses
        </NavLink>


        {/* Notices */}
        <NavLink
          to="/superadmin/notices"
          onClick={closeSidebar}
          className={linkClass}
        >
          <BellAlertIcon className="w-6 h-6" />
          Notices
        </NavLink>


        {/* Timetable */}
        <NavLink
          to="/superadmin/timetable"
          onClick={closeSidebar}
          className={linkClass}
        >
          <CalendarDaysIcon className="w-6 h-6" />
          Timetable
        </NavLink>


        {/* Fees */}
        <NavLink
          to="/superadmin/fees"
          onClick={closeSidebar}
          className={linkClass}
        >
          <CurrencyDollarIcon className="w-6 h-6" />
          Fees
        </NavLink>


        {/* Reports */}
        <NavLink
          to="/superadmin/reports"
          onClick={closeSidebar}
          className={linkClass}
        >
          <ChartBarIcon className="w-6 h-6" />
          Reports
        </NavLink>


        {/* Settings */}
        <NavLink
          to="/superadmin/settings"
          onClick={closeSidebar}
          className={linkClass}
        >
          <Cog6ToothIcon className="w-6 h-6" />
          Settings
        </NavLink>


        {/* Logout */}
        <NavLink
          to="/logout"
          onClick={closeSidebar}
          className="flex items-center gap-3 px-6 py-3 text-red-400 hover:bg-red-600 hover:text-white mt-3 transition"
        >
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
          Logout
        </NavLink>

      </nav>

    </aside>
  );
}

export default SuperAdminSidebar;