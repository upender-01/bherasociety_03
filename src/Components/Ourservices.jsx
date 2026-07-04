import React from "react";
import BackgroundImage from "../assets/background_image.png";
import Healthawareness  from "../assets/images/healthawarenessprogram.jpeg";
import Eyecare from "../assets/images/p6.jpeg";
import Mobilemedicalcamps from "../assets/images/mobilemedicalcamp.jpeg";
import Oldagehomes from "../assets/images/p22.jpeg";
const services = [
  {
    id: 1,
    title: "Eye Care",
    image: Eyecare,
    description:
      "Comprehensive eye examinations, vision correction, cataract treatment, and advanced ophthalmic care.",
  },
  {
    id: 2,
    title: "Mobile Medical Camps",
    image:Mobilemedicalcamps,
    description:
      "Healthcare services reaching remote communities through fully equipped mobile medical units.",
  },
  {
    id: 3,
    title: "Old Age Homes",
    image: Oldagehomes,
    description:
      "Compassionate care, medical support, wellness monitoring, and comfortable living for senior citizens.",
  },
  {
    id: 4,
    title: "Health Awareness Programs",
    image: Healthawareness,
    description:
      "Educational initiatives promoting preventive healthcare, wellness, and healthy lifestyle practices.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="programs"
      className="relative py-24 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          `${BackgroundImage}`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/0 backdrop-blur-[2px]" />

      {/* Decorative Gradient */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Healthcare Services We Provide
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Delivering quality healthcare, vision care, community outreach,
            senior support, and health education programs to improve lives and
            create healthier communities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-[24px]
              bg-white/5 backdrop-blur-md border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              transition-all duration-700
              hover:-translate-y-5
              hover:scale-[1.04]
              hover:border-cyan-400/40
              hover:shadow-[0_25px_60px_rgba(34,211,238,0.18)]"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover
                  transition-all duration-1000
                  group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0
                  bg-gradient-to-t
                  from-slate-950 via-slate-950/30 to-transparent"
                />

                {/* Floating Glow */}
                <div
                  className="absolute -top-10 -right-10
                  w-32 h-32 rounded-full
                  bg-cyan-400/20 blur-3xl
                  opacity-0
                  transition-all duration-700
                  group-hover:opacity-100
                  group-hover:scale-150"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-white
                  transition-all duration-500
                  group-hover:text-cyan-300"
                >
                  {service.title}
                </h3>

                <p
                  className="mt-4 text-slate-400 leading-relaxed
                  transition-all duration-500
                  group-hover:text-slate-200"
                >
                  {service.description}
                </p>

                {/* Learn More */}
                <div
                  className="mt-6 flex items-center gap-2
                  text-cyan-400 font-medium
                  translate-x-0
                  transition-all duration-500
                  group-hover:translate-x-2"
                >
                  Learn More
                  <span>→</span>
                </div>
              </div>

              {/* Animated Border */}
              <div
                className="absolute bottom-0 left-0
                h-[3px] w-0
                bg-gradient-to-r
                from-cyan-400 to-blue-500
                transition-all duration-700
                group-hover:w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;