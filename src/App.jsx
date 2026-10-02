import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import RegisterTeacher from "./Components/RegisterTeacher";
import RegistrationPage from "./Components/RegistrationPage";
import LoginTeacher from "./Components/LoginTeacher";
import LoginSuperAdmin from "./Components/LoginSuperAdmin";
import Footer from "./Components/Footer";

// Super Admin
import SuperAdminDashboard from "../pages/SuperAdminDashboard";
import Teachers from "../pages/Teachers";
import Students from "../pages/Students";
import Courses from "../pages/Courses";
import Attendance from "../pages/Attendance";
import AssignTeacherCourse from "../pages/AssignTeacherCourse.jsx";
import SuperAdminHome from "../pages/SuperAdminHome.jsx";

// Teacher
import Register from "./Components/screen/Register_teacher.jsx";
import TeacherView from "./Components/screen/View_teacher.jsx";
import TeacherDashboard from "../pages/TeacherDashboard.jsx";
import TeacherHome from "../pages/TeacherHome.jsx";
import TeacherCourses from "../pages/TeacherCourses.jsx";
import TeacherStudents from "../pages/TeacherStudents.jsx";
import TeacherAttendance from "../pages/TeacherAttendance.jsx";
import TeacherProfile from "../pages/TeacherProfile.jsx";

// Students
import StudentRegister from "../pages/StudentRegister.jsx";
import StudentView from "../pages/StudentView.jsx";
import StudentLogin from "../pages/StudentLogin.jsx";
import StudentDashboard from "../pages/StudentDashboard.jsx";



function App() {

  const location = useLocation();

  // Hide public Navbar/Footer inside dashboard
  const hideLayout =
    location.pathname.startsWith("/superadmin") ||
    location.pathname.startsWith("/teacher") ||
    location.pathname.startsWith("/student");

  // Admin authentication
  const isAdminLoggedIn = localStorage.getItem("adminToken");

const isTeacherLoggedIn =
  localStorage.getItem("teacher");


  return (
    <>

      {/* Public Navbar */}
      {!hideLayout && <Navbar />}


      <Routes>

        {/* ================================= */}
        {/* PUBLIC ROUTES */}
        {/* ================================= */}

        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Contact />
            </>
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/register"
          element={<RegistrationPage />}
        />


        {/* ================================= */}
        {/* TEACHER ROUTES */}
        {/* ================================= */}

        <Route
          path="/teacher/register"
          element={<RegisterTeacher />}
        />

        <Route
          path="/teacher/login"
          element={<LoginTeacher />}
        />

        {/* ================================= */}
        {/* STUDENT ROUTES */}
        {/* ================================= */}

        <Route
          path="/student/login"
          element={<StudentLogin />}
        />

        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />

        {/* ================================= */}
        {/* SUPER ADMIN LOGIN */}
        {/* ================================= */}

        <Route
          path="/superadmin/login"
          element={<LoginSuperAdmin />}
        />


        {/* ================================= */}
        {/* SUPER ADMIN DASHBOARD */}
        {/* ================================= */}

        <Route
  path="/superadmin"
  element={
    isAdminLoggedIn ? (
      <SuperAdminDashboard />
    ) : (
      <Navigate to="/superadmin/login" replace />
    )
  }
>
  
  <Route
    index
    element={
      <Navigate
        to="dashboard"
        replace
      />
    }
  />

  <Route
    path="dashboard"
    element={<SuperAdminHome />}
  />

  <Route
    path="add-teacher"
    element={<Register />}
  />

  <Route
    path="view-teachers"
    element={<TeacherView />}
  />

  <Route
    path="assign-teacher-course"
    element={<AssignTeacherCourse />}
  />  

  <Route
    path="add-student"
    element={<StudentRegister />}
  />

  <Route
    path="view-students"
    element={<StudentView />}
  />

  <Route
    path="teachers"
    element={<Teachers />}
  />

  <Route
    path="students"
    element={<Students />}
  />

  <Route
    path="courses"
    element={<Courses />}
  />

  <Route
    path="attendance"
    element={<Attendance />}
  />

</Route>

      {/* ================================= */}
      {/* TEACHER DASHBOARD */}
      {/* ================================= */}

      {/* Add teacher routes here */}

      <Route
        path="/teacher"
        element={
          isTeacherLoggedIn ? (
            <TeacherDashboard />
          ) : (
            <Navigate to="/teacher/login" replace />
          )
        }
      >
        <Route
          index
          element={
            <Navigate
              to="dashboard"
              replace
            />
          }
        />

        <Route
          path="dashboard"
          element={<TeacherHome />}
        />

        <Route
          path="courses"
          element={<TeacherCourses />}
        />

        <Route
          path="students"
          element={<TeacherStudents />}
        />

        <Route
          path="attendance"
          element={<TeacherAttendance />}
        />

        <Route
          path="profile"
          element={<TeacherProfile />}
        />
      </Route>

    </Routes>

    {/* Public Footer */}
    {!hideLayout && <Footer />}
    </>
  );
}

export default App;