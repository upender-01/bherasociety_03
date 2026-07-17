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

// ===================
// Dummy PDF Imports
// Replace these with your actual certificates later
// ===================
import ngoRegistration from "../assets/documents/ngo-registration.pdf";
import certificate12A from "../assets/documents/12a-certificate.pdf";
import certificate80G from "../assets/documents/80g-certificate.pdf";
import annualReport from "../assets/documents/annual-report.pdf";
import auditReport from "../assets/documents/audit-report.pdf";
import csrCompliance from "../assets/documents/csr-compliance.pdf";

// ===================
// Compliance Data
// ===================
const complianceData = [
  {
    title: "NGO Registration",
    icon: <Building2 size={32} />,
    description:
      "Official registration certificate of the organization.",
    document: ngoRegistration,
  },
  {
    title: "12A Certificate",
    icon: <BadgeCheck size={32} />,
    description:
      "Income Tax exemption certificate under Section 12A.",
    document: certificate12A,
  },
  {
    title: "80G Certificate",
    icon: <ShieldCheck size={32} />,
    description:
      "Tax benefits available for eligible donors.",
    document: certificate80G,
  },
  {
    title: "Annual Reports",
    icon: <FileText size={32} />,
    description:
      "Transparency reports and yearly organizational activities.",
    document: annualReport,
  },
  {
    title: "Audit Reports",
    icon: <FileText size={32} />,
    description:
      "Financial audit reports ensuring accountability.",
    document: auditReport,
  },
  {
    title: "CSR Compliance",
    icon: <BadgeCheck size={32} />,
    description:
      "Compliance documentation for corporate CSR partnerships.",
    document: csrCompliance,
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
            Compliance &{" "}
            <span className="text-cyan-400">Certifications</span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
            We maintain complete transparency through regulatory compliance,
            certifications, financial accountability, and annual reporting.
          </p>
        </motion.div>

        {/* Compliance Cards */}
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
              {/* Icon */}
              <div className="text-cyan-400 mb-5">{item.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* View Document Button */}
              <a
                href={item.document}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
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
            Every donation, healthcare initiative, and community program is
            managed with accountability and compliance to ensure maximum impact
            and trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceSection;