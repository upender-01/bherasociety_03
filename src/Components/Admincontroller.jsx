 import React, { useState } from "react";

import AdminLogin from "../Components/Admin/Adminlogin";
import AdminReviews from "../Components/Admin/Adminreviews";

export default function AdminController() {
  const [token, setToken] =
    useState(
      localStorage.getItem(
        "adminToken"
      )
    );

  const handleLogout = () => {
    localStorage.removeItem(
      "adminToken"
    );

    setToken(null);
  };

  if (!token) {
    return (
      <AdminLogin
        setToken={setToken}
      />
    );
  }

  return (
    <>
      <div className="bg-gray-900 py-3 px-6 flex justify-end">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <AdminReviews />
    </>
  );
}