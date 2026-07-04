import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "information",
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, and any details submitted through our contact forms, donation forms, or volunteer registrations.",
  },
  {
    id: "usage",
    title: "How We Use Information",
    content:
      "Information is used to provide healthcare services, process donations, respond to inquiries, manage volunteer activities, improve our website, and communicate important updates.",
  },
  {
    id: "security",
    title: "Data Security",
    content:
      "We implement appropriate security measures to protect personal information from unauthorized access, disclosure, alteration, or destruction.",
  },
  {
    id: "sharing",
    title: "Information Sharing",
    content:
      "We do not sell personal information. Information may only be shared with trusted partners when necessary to provide services or comply with legal obligations.",
  },
  {
    id: "cookies",
    title: "Cookies & Analytics",
    content:
      "Our website may use cookies and analytics tools to improve user experience, monitor website performance, and understand visitor interactions.",
  },
  {
    id: "rights",
    title: "Your Rights",
    content:
      "You may request access, correction, or deletion of your personal information by contacting us through the details provided below.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Legal Information
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-white">
            Privacy Policy
          </h1>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
            Your privacy matters to us. This Privacy Policy explains how
            Bhera Society collects, uses, protects, and manages your
            information while using our website and healthcare services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              lg:sticky
              lg:top-28
              h-fit
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-6
            "
          >
            <h3 className="text-xl font-bold text-white mb-5">
              Contents
            </h3>

            <div className="space-y-3">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="
                    block
                    text-slate-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                  "
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">

            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:border-cyan-400/40
                  transition-all
                  duration-500
                "
              >
                <h2 className="text-3xl font-bold text-white mb-5">
                  {section.title}
                </h2>

                <p className="text-slate-400 leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10
                backdrop-blur-xl
                border
                border-cyan-400/20
                rounded-3xl
                p-8
              "
            >
              <h2 className="text-3xl font-bold text-white mb-5">
                Contact Us
              </h2>

              <p className="text-slate-300 leading-relaxed">
                If you have questions regarding this Privacy Policy,
                data handling practices, or wish to exercise your privacy
                rights, please contact us.
              </p>

              <div className="mt-6 space-y-2 text-slate-300">
                <p>📧 info@bherasociety.org</p>
                <p>📞 +91 98765 43210</p>
                <p>📍 Hyderabad, Telangana, India</p>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center pt-10"
            >
              <p className="text-slate-500">
                Last Updated: June 2026
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;