import { NavLink } from "react-router-dom";

function TeacherSidebar() {
  const links = [
    {
      name: "Dashboard",
      path: "/teacher",
    },
    {
      name: "My Courses",
      path: "/teacher/courses",
    },
    {
      name: "Students",
      path: "/teacher/students",
    },
    {
      name: "Attendance",
      path: "/teacher/attendance",
    },
    {
      name: "Profile",
      path: "/teacher/profile",
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white p-5 hidden md:block">
      <h2 className="text-xl font-bold mb-8">
        Teacher Dashboard
      </h2>

      <div className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/teacher"}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-gray-300 hover:bg-slate-800"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default TeacherSidebar;