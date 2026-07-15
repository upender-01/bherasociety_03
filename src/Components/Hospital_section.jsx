import React from "react";
import H1 from "../assets/images/srihospital.jpeg";
import H2 from "../assets/images/bhavanicarehospital.jpeg";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const hospitals = [
  {
    id: 1,
    name: "Shree Satya Lions Eye hospital",
    image:H1,
    address:"opp. MRO Office, Mahabubabad, Telangana 506101",
    emergency: "+91 90300 82707",
    email: "bherasociety2023@gmail.com",
    map: "https://maps.app.goo.gl/ypzQMiUhtpsJ2HZt9",
  },
  {
    id: 2,
    name: "Bhavani Eye Care Centre",
    image:H2,
    address:
      "18-397/9/633/CSK GREEN VILLAS/Shadnagar mdl Ranga Reddy/telangana 509216",
    emergency: "+91 97011 91811",
    email: "bherasociety2023@gmail.com",
    map: "https://maps.app.goo.gl/bxeXs482P8QTX5wbA",
  }
];
const HospitalsAndFacilities = () => {
  return (
    <section 
     id="facilities"
     className="relative py-10 bg-slate-900/0 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Our Healthcare Network
          </h2>

          <p className="mt-4 text-white max-w-2xl mx-auto">
            Accessible healthcare facilities dedicated to providing
            quality treatment, emergency support, and compassionate care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="
                group
                rounded-3xl
                overflow-hidden
                bg-white/5
                border border-white/10
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-cyan-400/30
                hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]
              "
            >
              {/* Hospital Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    mb-5
                    transition-colors
                    duration-300
                    group-hover:text-cyan-300
                  "
                >
                  {hospital.name}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4">
                  <MapPin
                    size={18}
                    className="text-cyan-400 mt-1 shrink-0"
                  />
                  <span className="text-slate-300 text-sm">
                    {hospital.address}
                  </span>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${hospital.emergency}`}
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                    text-slate-300
                    hover:text-cyan-400
                    transition-colors
                  "
                >
                  <Phone size={18} className="text-cyan-400" />
                  {hospital.emergency}
                </a>

                {/* Email */}
                <a
                  href={`mailto:${hospital.email}`}
                  className="
                    flex
                    items-center
                    gap-3
                    mb-6
                    text-slate-300
                    hover:text-cyan-400
                    transition-colors
                  "
                >
                  <Mail size={18} className="text-cyan-400" />
                  {hospital.email}
                </a>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={`tel:${hospital.emergency}`}
                    className="
                      flex-1
                      text-center
                      py-3
                      rounded-xl
                      bg-cyan-500
                      text-white
                      font-medium
                      hover:bg-cyan-600
                      transition-all
                    "
                  >
                    Call Now
                  </a>

                  <a
                    href={hospital.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-5
                      rounded-xl
                      border
                      border-cyan-400/30
                      text-cyan-300
                      hover:bg-cyan-500/10
                      transition-all
                    "
                  >
                    Map
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalsAndFacilities;