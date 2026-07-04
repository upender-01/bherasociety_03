import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import Bherascoietyimage from "../assets/images/bherasocietyimage.jpeg";
import backgroundImage from "../assets/background_image.png";
const AboutUs = () => {
  // Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-slate-900/0"
      style={{
        backgroundImage: {backgroundImage},
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Deep Gradient Overlay for better text legibility */}
      <div className="absolute inset-0 bg-slate-900/0 from-gray-950/90 via-gray-900/80 to-gray-950/95 backdrop-blur-sm"></div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Heading */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2 block">
            About Bhera Society
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2 tracking-tight">
            Empowering Communities, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Transforming Lives
            </span>
          </h2>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            <span className="font-extrabold text-2xl">Bright Health Education Rural Development Ambition (BHERA) </span> is a registered 
            non‑profit medical‑humanitarian organization based in Telangana, India. 
            Founded by <span className="font-extrabold">DARAVATH REDDY</span> with the vision of bringing light, restoring sight, and 
            empowering communities, BHERA Society is committed to delivering high‑quality, professional eye‑care and general healthcare services to underserved populations across rural and tribal regions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Image Area */}
          <motion.div className="relative" variants={fadeInUp}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-900/20 border border-white/5 group">
              <img
                src={Bherascoietyimage}
                alt="Bhera Society Team"
                className="w-full object-cover h-[550px] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Animated Floating Experience Badge */}
            <motion.div 
              className="absolute -bottom-8 -right-4 md:-right-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-8 rounded-3xl shadow-2xl shadow-emerald-500/30 border border-emerald-400/30 backdrop-blur-md"
              animate={floatAnimation}
            >
              <h3 className="text-5xl font-extrabold mb-1">10<span className="text-emerald-200">+</span></h3>
              <p className="font-semibold tracking-wide uppercase text-sm text-emerald-50">Years of Service</p>
            </motion.div>
          </motion.div>

          {/* Right Column: Content & Mission/Vision */}
          <motion.div variants={staggerContainer} className="flex flex-col justify-center">
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              Our Organization Story
            </motion.h3>

            <motion.p variants={fadeInUp} className="text-white-300 text-lg leading-relaxed mb-6">
              Founded with a vision to uplift underserved communities, Bhera
              Society began as a small initiative driven by passionate
              volunteers committed to making healthcare and social support
              accessible to everyone.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-white-400 leading-relaxed mb-10">
              Over the years, our efforts have expanded to include healthcare
              camps, community outreach programs, support for senior citizens,
              and educational awareness initiatives. Our mission remains focused 
              on bringing hope, dignity, and opportunities to those who need them most.
            </motion.p>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Mission Card */}
              <motion.div 
                variants={fadeInUp}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/10 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="text-emerald-400 text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Our Mission
                </h4>
                <p className="text-white-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  • Mobile Medical Units: Bringing healthcare services directly to remote villages.
                  • Eye Care Screening: Early detection of cataracts, glaucoma, and vision disorders.
                  • Free Surgical Support: Providing no-cost eye surgeries for underserved communities.
                  • Community Health Programs: Health checkups, consultations, and wellness awareness initiatives.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                variants={fadeInUp}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/10 hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-teal-400 text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Our Vision
                </h4>
                <p className="text-white-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                 To architect an equitable healthcare model where avoidable blindness is systematically eradicated, and 
                 premium diagnostic resources are extended to remote rural geographies without cost constraints.
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;