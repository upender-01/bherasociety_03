import React, { useState } from "react";
import { User, Lock, ShieldCheck } from "lucide-react";
const API_URL=import.meta.env.VITE_API_URL;
export default function AdminLogin({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        setToken(data.token);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Server Error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-black">

      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
              <ShieldCheck size={38} className="text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-white">
            Admin Portal
          </h1>

          <p className="text-center text-gray-300 mt-2 mb-8">
            Secure access to review management
          </p>

          {error && (
            <div className="bg-red-500/20 border border-red-400 text-red-200 rounded-xl p-3 mb-5 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            {/* Username */}
            <div className="relative mb-5">
              <User
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                required
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition"
              />
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 disabled:opacity-70"
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging In...
                </div>
              ) : (
                "Login to Dashboard"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Protected Admin Access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}