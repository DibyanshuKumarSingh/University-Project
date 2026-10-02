import { useNavigate } from "react-router-dom";

function TeacherNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("teacher");
    navigate("/teacher/login");
  };

  return (
    <nav className="h-16 bg-emerald-700 flex items-center justify-between px-6 shadow-lg">
      {/* University Name */}
      <h1 className="text-white text-xl font-bold">
        Dibyanshu University
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <span className="text-emerald-100 hidden sm:block">
          Teacher Portal
        </span>

        <button
          onClick={handleLogout}
          className="bg-white text-emerald-700 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-100 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default TeacherNavbar;