import { useState } from "react";
import { Outlet } from "react-router-dom";
import SuperAdminNavbar from "./SuperAdminNavbar";
import SuperAdminSidebar from "./SuperAdminSidebar";

function SuperAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-slate-100 overflow-hidden">

      {/* Top Navbar */}
      <SuperAdminNavbar
        onMenuClick={() => setSidebarOpen(true)}
      />

      <div className="flex flex-1 min-h-0">

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}

        {/* Sidebar */}
        <SuperAdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-y-auto bg-slate-100 p-4 sm:p-5 md:p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default SuperAdminDashboard;