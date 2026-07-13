import { useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({
  carouselImages,
  currentSlide,
  setCurrentSlide,
}) => {
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ------------------ Navigation ------------------

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  }, [carouselImages.length, setCurrentSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  }, [carouselImages.length, setCurrentSlide]);

  // ------------------ Auto Slide ------------------

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3500);
  }, [nextSlide, stopAutoSlide]);

  useEffect(() => {
    startAutoSlide();

    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  // ------------------ Manual Buttons ------------------

  const handleNext = () => {
    nextSlide();
    startAutoSlide();
  };

  const handlePrev = () => {
    prevSlide();
    startAutoSlide();
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    startAutoSlide();
  };

  // ------------------ Swipe ------------------

  const handleTouchStart = (e) => {
    stopAutoSlide();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextSlide(); // Swipe Left
      } else {
        prevSlide(); // Swipe Right
      }
    }

    startAutoSlide();
  };

  return (
    <div
      className="relative w-full lg:w-[62%] overflow-hidden rounded-2xl shadow-2xl group select-none"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={startAutoSlide}
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
            className="w-full shrink-0 relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px]"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
      >
        <ChevronRight size={28} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
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