import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({
  carouselImages,
  currentSlide,
  setCurrentSlide,
}) => {
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const startAutoSlide = () => {
    stopAutoSlide();

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3500);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();

    return () => stopAutoSlide();
  }, []);

  return (
    <div
      className=" relative w-full lg:w-[62%] overflow-hidden rounded-2xl shadow-2xl group"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className="
              w-full shrink-0 relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px]"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className=" absolute left-2 top-1/2 -translate-y-1/2   bg-black/40    text-white p-2 rounded-full
          backdrop-blur-md transition-all duration-300 opacity-0  group-hover:opacity-100
        "
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-2
          top-1/2
          -translate-y-1/2
          bg-black/40
          text-white
          p-2
          rounded-full
          backdrop-blur-md
          transition-all
          duration-300
          opacity-0
          group-hover:opacity-100
        "
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "w-7 bg-emerald-400"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;