import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    interest: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/volunteers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(
          "🎉 Thank you for registering as a volunteer!"
        );

        setErrorMessage("");

        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          interest: "",
        });

        setErrors({
          name: "",
          phone: "",
          email: "",
        });

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage(
          data.message || "Registration Failed"
        );

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } catch (err) {
      console.error(err);

      setErrorMessage(
        "Server Error. Please try again."
      );

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };
    return (
    <>
      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-5 right-5 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="fixed top-5 right-5 z-50 bg-red-600 text-white px-5 py-3 rounded-lg shadow-lg">
          {errorMessage}
        </div>
      )}

      <div className="w-full sm:max-w-lg lg:max-w-md lg:w-[35%] shrink-0">
        <div className="bg-[#1e3a5f]/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10">

          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Become a Volunteer
          </h2>

          <p className="text-gray-300 text-center text-sm mb-6">
            Join Bhera Society and help us create a better tomorrow.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className={`w-full bg-[#0f2440]/80 text-white px-4 py-3 rounded-lg outline-none transition-all ${
                  errors.name
                    ? "ring-2 ring-red-500"
                    : "focus:ring-2 focus:ring-emerald-400"
                }`}
              />

              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                maxLength={10}
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                className={`w-full bg-[#0f2440]/80 text-white px-4 py-3 rounded-lg outline-none transition-all ${
                  errors.phone
                    ? "ring-2 ring-red-500"
                    : "focus:ring-2 focus:ring-emerald-400"
                }`}
              />

              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className={`w-full bg-[#0f2440]/80 text-white px-4 py-3 rounded-lg outline-none transition-all ${
                  errors.email
                    ? "ring-2 ring-red-500"
                    : "focus:ring-2 focus:ring-emerald-400"
                }`}
              />

              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    city: e.target.value,
                  })
                }
                className="w-full bg-[#0f2440]/80 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            {/* Area of Interest */}
            <div>
              <select
                value={formData.interest}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    interest: e.target.value,
                  })
                }
                className="w-full bg-[#0f2440]/80 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <option value="">
                  Select Area of Interest
                </option>

                <option value="Medical Camps">
                  Medical Camps
                </option>

                <option value="Blood Donation">
                  Blood Donation
                </option>

                <option value="Food Distribution">
                  Food Distribution
                </option>

                <option value="Education Support">
                  Education Support
                </option>

                <option value="Fundraising">
                  Fundraising
                </option>

                <option value="General Volunteer">
                  General Volunteer
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-500 hover:-translate-y-1"
              }`}
            >
              {loading
                ? "Registering..."
                : "Register as Volunteer"}
            </button>

          </form>
        </div>
      </div>
    </>
  );
  };

export default VolunteerForm;