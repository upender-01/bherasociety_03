 import React, { useState } from "react";
const API_URL=import.meta.env.VITE_API_URL;

const AppointmentForm = ({
  formData,
  setFormData,
  errors,
}) => {
  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.name || errors.phone) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/appointments`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(
          "Appointment Booked Successfully ✓"
        );

        setErrorMessage("");

        setFormData({
          name: "",
          phone: "",
        });

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage(
          data.message ||
            "Failed to book appointment"
        );

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Server Error. Please try again."
      );

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <>
      {successMessage && (
        <div className="fixed top-5 right-5 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="fixed top-5 right-5 z-50 bg-red-600 text-white px-5 py-3 rounded-lg shadow-lg">
          {errorMessage}
        </div>
      )}

      <div className="w-full sm:max-w-lg lg:max-w-md lg:w-[35%] shrink-0">
        <div className="bg-[#1e3a5f]/80 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 text-center border-b border-white/20 pb-2">
            Book an Appointment
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className={`w-full bg-[#0f2440]/80 text-white px-3 py-3 rounded-lg outline-none transition-all ${
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

            <div>
              <input
                type="tel"
                maxLength={10}
                placeholder="Enter Your Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone:
                      e.target.value.replace(
                        /\D/g,
                        ""
                      ),
                  })
                }
                className={`w-full bg-[#0f2440]/80 text-white px-3 py-3 rounded-lg outline-none transition-all ${
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

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;