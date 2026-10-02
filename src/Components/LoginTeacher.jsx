import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function LoginTeacher() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/teachers/login",
        formData
      );

      localStorage.setItem(
        "teacher",
        JSON.stringify(res.data.teacher)
      );

      alert(res.data.message);

      navigate("/teacher");
    } catch (err) {
      alert(
        err.response?.data?.message || "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-700 to-cyan-500 px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Dibyanshu University
          </h1>

          <p className="text-emerald-100 mt-2">
            Teacher Login Portal
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-white mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-emerald-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-emerald-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-teal-800 font-bold py-3 rounded-xl hover:bg-emerald-100 transition duration-300 disabled:opacity-60"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          <p className="text-center text-emerald-100">
            Don't have an account?{" "}
            <Link
              to="/teacher/register"
              className="font-semibold text-white hover:underline"
            >
              Register Here
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
}

export default LoginTeacher;