import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BackgroundImage from "../assets/background_image.png";

import G1 from "../assets/images/p3.jpeg";
import G2 from "../assets/images/p5.jpeg";
import G3 from "../assets/images/p6.jpeg";
import G4 from "../assets/images/p23.jpeg";
import G5 from "../assets/images/p13.jpeg";
import G6 from "../assets/images/p17.jpeg";
import G7 from "../assets/images/p21.jpeg";
import G8 from "../assets/images/p22.jpeg";

const galleryImages = [
  G1,
  G2,
  G3,
  G4,
  G5,
  G6,
  G7,
  G8,
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .gallery-card {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>

      <section
        id="gallery"
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />

        {/* Glow Effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px]" />

        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />

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
              Gallery
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-white mt-5">
              Moments of Care &
              <span className="text-cyan-400">
                {" "}
                Compassion
              </span>
            </h2>

            <p className="mt-5 text-slate-400 max-w-3xl mx-auto text-lg">
              Explore our healthcare initiatives,
              eye care programs, community outreach,
              and impactful moments that transform lives.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="
                  gallery-card
                  relative
                  overflow-hidden
                  rounded-[30px]
                  cursor-pointer
                  break-inside-avoid
                  mb-6
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                  group
                "
                onClick={() =>
                  setSelectedImage(image)
                }
              >
                {/* Image */}
                <img
                  src={image}
                  alt=""
                  className="
                    w-full
                    object-cover
                    transition-all
                    duration-1000
                    group-hover:scale-110
                    group-hover:rotate-1
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                {/* Shine Effect */}
                <div
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-all
                    duration-1000
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    translate-y-10
                    opacity-0
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >
                  <h3 className="text-white text-xl font-bold">
                    Healthcare Initiative
                  </h3>

                  <p className="text-slate-300 text-sm mt-2">
                    Click to view full image
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="
                fixed
                inset-0
                bg-black/95
                backdrop-blur-xl
                flex
                items-center
                justify-center
                z-[999]
                p-6
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setSelectedImage(null)
              }
            >
              {/* Close Button */}
              <button
                className="
                  absolute
                  top-5
                  right-6
                  text-white
                  text-5xl
                  z-50
                "
              >
                ×
              </button>

              <motion.img
                src={selectedImage}
                alt=""
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  max-h-[90vh]
                  max-w-[90vw]
                  rounded-[32px]
                  shadow-[0_20px_100px_rgba(0,0,0,0.7)]
                "
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default PhotoGallery;