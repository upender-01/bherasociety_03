 import React from "react";
 import backgroundImage from "../assets/background_image.png";
import { Eye, Activity, Glasses } from "lucide-react";

const highlights = [
  {
    id: 1,
    stat: "1 Lakh+",
    title: "Eye Screenings",
    description:
      "Comprehensive eye examinations conducted across communities, schools, and outreach programs.",
    icon: Eye,
    gradientFrom: "#0EA5E9",
    gradientTo: "#2563EB",
  },
  {
    id: 2,
    stat: "10,000+",
    title: "Cataract Surgeries",
    description:
      "Life-changing surgeries restoring vision and improving quality of life for thousands of patients.",
    icon: Activity,
    gradientFrom: "#06B6D4",
    gradientTo: "#0891B2",
  },
  {
    id: 3,
    stat: "20,000+",
    title: "Eyewear Distributed",
    description:
      "Providing affordable and accessible vision solutions through quality spectacles.",
    icon: Glasses,
    gradientFrom: "#14B8A6",
    gradientTo: "#0F766E",
  },
];

const Quick_highlight = () => {
  return (
    <section
      className="relative py-0 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          `${backgroundImage}`, // Replace with your image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/0 backdrop-blur-[1px]" />

      {/* Static Decorative Glow */}
      <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
            Quick Highlights
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Impact We Have Created
          </h2>

          <p className="mt-5 text-slate-300 max-w-3xl mx-auto text-lg">
            Transforming lives through accessible eye care, advanced treatment,
            and community outreach initiatives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-8
                  transition-all
                  duration-500
                  hover:border-cyan-400/30
                  hover:bg-white/10
                  hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
                "
              >
                {/* Static Background Circle */}
                <div
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                />

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      transition-all
                      duration-700
                      group-hover:-translate-y-2
                      group-hover:translate-x-2
                    "
                    style={{
                      background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                    }}
                  >
                    <Icon size={30} className="text-white" />
                  </div>

                  {/* Number */}
                  <h3
                    className="
                      text-5xl
                      font-black
                      mb-4
                      transition-all
                      duration-700
                      group-hover:translate-x-3
                    "
                    style={{
                      background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.stat}
                  </h3>

                  {/* Title */}
                  <h4
                    className="
                      text-2xl
                      font-bold
                      text-white
                      mb-4
                      transition-all
                      duration-700
                      group-hover:text-cyan-300
                      group-hover:translate-x-3
                    "
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="
                      text-slate-300
                      leading-relaxed
                      transition-all
                      duration-700
                      group-hover:text-white
                      group-hover:translate-x-3
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Animated Bottom Border */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                  style={{
                    background: `linear-gradient(90deg, ${item.gradientFrom}, ${item.gradientTo})`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quick_highlight;