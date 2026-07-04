import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  BadgeCheck,
  Building2,
  Download,
} from "lucide-react";

import BackgroundImage from "../assets/background_image.png";

const complianceData = [
  {
    title: "NGO Registration",
    icon: <Building2 size={32} />,
    description:
      "Official registration certificate of the organization.",
  },
  {
    title: "12A Certificate",
    icon: <BadgeCheck size={32} />,
    description:
      "Income Tax exemption certificate under Section 12A.",
  },
  {
    title: "80G Certificate",
    icon: <ShieldCheck size={32} />,
    description:
      "Tax benefits available for eligible donors.",
  },
  {
    title: "Annual Reports",
    icon: <FileText size={32} />,
    description:
      "Transparency reports and yearly organizational activities.",
  },
  {
    title: "Audit Reports",
    icon: <FileText size={32} />,
    description:
      "Financial audit reports ensuring accountability.",
  },
  {
    title: "CSR Compliance",
    icon: <BadgeCheck size={32} />,
    description:
      "Compliance documentation for corporate CSR partnerships.",
  },
];

const ComplianceSection = () => {
  return (
    <section
      id="compliance"
      className="
        relative
        py-24
        overflow-hidden
        bg-fixed
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/85" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Transparency & Trust
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Compliance &
            <span className="text-cyan-400">
              Certifications
            </span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
            We maintain complete transparency through
            regulatory compliance, certifications,
            financial accountability, and annual reporting.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {complianceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-[30px]
                p-8
                group
                hover:border-cyan-400/40
                transition-all
                duration-500
              "
            >
              <div className="text-cyan-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                {item.description}
              </p>

              <button
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-400
                  hover:bg-cyan-500
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <Download size={18} />
                View Document
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Box */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            mt-20
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-[32px]
            p-10
            text-center
          "
        >
          <ShieldCheck
            size={50}
            className="mx-auto text-emerald-400"
          />

          <h3 className="text-3xl font-bold text-white mt-5">
            Committed to Transparency
          </h3>

          <p className="text-slate-400 max-w-3xl mx-auto mt-4">
            Every donation, healthcare initiative,
            and community program is managed with
            accountability and compliance to ensure
            maximum impact and trust.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ComplianceSection;