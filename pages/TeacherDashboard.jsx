import { Outlet } from "react-router-dom";
import TeacherNavbar from "../src/Components/TeacherNavbar.jsx";
import TeacherSidebar from "../src/Components/TeacherSidebar.jsx";

function TeacherDashboard() {
  return (
    <div className="h-screen flex flex-col">
      <TeacherNavbar />

      <div className="flex flex-1 overflow-hidden">
        <TeacherSidebar />

        <main className="flex-1 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default TeacherDashboard;