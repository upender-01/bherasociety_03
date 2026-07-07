import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const API_URL=import.meta.env.VITE_API_URL;
const ContactUs = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
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
    const { data } = await axios.post(
      `${API_URL}/api/contact/send-message`,
      formData
    );

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    alert("Failed to send message.");
    console.log(error);
  }

  setLoading(false);
};
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Get In Touch
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Have questions about our services, healthcare programs,
            donations, volunteering, or patient support? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              {/* Address */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">
                  📍 Address
                </h4>
                <p className="text-slate-300">
                  Bhera Society Hospital,
                  Main Road, Hyderabad,
                  Telangana, India - 500001
                </p>
              </div>

              {/* Phone */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">
                  📞 Phone
                </h4>
                <p className="text-slate-300">
                  +91 98765 43210
                </p>
                <p className="text-slate-300">
                  +91 91234 56789
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">
                  ✉️ Email
                </h4>
                <p className="text-slate-300">
                  info@bherasociety.org
                </p>
                <p className="text-slate-300">
                  support@bherasociety.org
                </p>
              </div>

              {/* Hours */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">
                  🕒 Working Hours
                </h4>

                <p className="text-slate-300">
                  Monday - Saturday
                </p>

                <p className="text-slate-300">
                  9:00 AM - 6:00 PM
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">
                  Follow Us
                </h4>

                <div className="flex gap-4">

                  <a
                    href="#"
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white/10
                      flex items-center justify-center
                      text-white
                      hover:bg-cyan-500
                      transition-all
                    "
                  >
                    F
                  </a>

                  <a
                    href="#"
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white/10
                      flex items-center justify-center
                      text-white
                      hover:bg-cyan-500
                      transition-all
                    "
                  >
                    I
                  </a>

                  <a
                    href="#"
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white/10
                      flex items-center justify-center
                      text-white
                      hover:bg-cyan-500
                      transition-all
                    "
                  >
                    Y
                  </a>

                  <a
                    href="#"
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white/10
                      flex items-center justify-center
                      text-white
                      hover:bg-cyan-500
                      transition-all
                    "
                  >
                    L
                  </a>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Send Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="
                      w-full
                      bg-white/10
                      border border-white/10
                      rounded-xl
                      p-4
                      text-white
                      outline-none
                    "
                  />

              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="
                    w-full
                    bg-white/10
                    border border-white/10
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                  "
                />

              <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="
                      w-full
                      bg-white/10
                      border border-white/10
                      rounded-xl
                      p-4
                      text-white
                      outline-none
                    "
                  />
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="
                    w-full
                    bg-white/10
                    border border-white/10
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                  "
                />

              <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      py-4
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      text-white
                      font-semibold
                      hover:scale-[1.02]
                      transition-all
                      disabled:opacity-50
                    "
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

            </form>
          </motion.div>

        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-16
            overflow-hidden
            rounded-3xl
            border border-white/10
          "
        >
          <iframe
            title="location"
            src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default ContactUs;