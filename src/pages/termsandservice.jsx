 import React from "react";
import { motion } from "framer-motion";

import BackgroundImage from "../assets/background_image.png";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content:
      "By accessing and using the Bhera Society website, you agree to comply with these Terms and Conditions. If you do not agree, please discontinue use of the website.",
  },
  {
    id: "services",
    title: "Healthcare Services",
    content:
      "Information provided on this website is intended for general informational purposes only and should not replace professional medical advice, diagnosis, or treatment.",
  },
  {
    id: "donations",
    title: "Donations & Contributions",
    content:
      "All donations made through our website support healthcare initiatives, community welfare programs, and charitable activities. Donations are voluntary and non-refundable unless required by applicable law.",
  },
  {
    id: "user-conduct",
    title: "User Responsibilities",
    content:
      "Users must not misuse the website, upload harmful content, attempt unauthorized access, or engage in activities that may disrupt website operations.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content:
      "All content, images, logos, graphics, and materials available on this website remain the property of Bhera Society unless otherwise stated.",
  },
  {
    id: "privacy",
    title: "Privacy & Data Protection",
    content:
      "Use of this website is also governed by our Privacy Policy. By using our services, you consent to the collection and processing of information as described therein.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content:
      "Bhera Society shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the website or its services.",
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content:
      "We reserve the right to modify these Terms and Conditions at any time. Continued use of the website after updates constitutes acceptance of the revised terms.",
  },
];
const TermsAndServices = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      bg-fixed
      bg-center
      bg-cover
      overflow-hidden
    "
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

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
            Terms & Services
          </h1>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-lg">
            Please read these Terms and Conditions carefully before using
            our website, healthcare services, donation platforms,
            and community programs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              lg:sticky
              lg:top-24
              h-fit
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-3xl
              p-6
            "
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Sections
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
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-8
                  hover:border-cyan-400/30
                  transition-all
                  duration-500
                "
              >
                <h2 className="text-3xl font-bold text-white mb-5">
                  {section.title}
                </h2>

                <p className="text-slate-300 leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Contact Box */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="
                bg-gradient-to-r
                from-cyan-500/10
                to-blue-500/10
                backdrop-blur-xl
                border border-cyan-500/20
                rounded-3xl
                p-8
              "
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Questions?
              </h3>

              <p className="text-slate-300">
                For any questions regarding these Terms & Services,
                please contact our support team.
              </p>

              <div className="mt-6 space-y-2 text-slate-300">
                <p>📧 info@bherasociety.org</p>
                <p> +91 98765 43210</p>
                <p> Hyderabad, Telangana, India</p>
              </div>
            </motion.div>

            {/* Footer */}
            <div className="text-center py-10">
              <p className="text-slate-500">
                Last Updated: June 2026
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsAndServices;