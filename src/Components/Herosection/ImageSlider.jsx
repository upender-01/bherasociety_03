
const ImageSlider = ({
  carouselImages,
  currentSlide,
  setCurrentSlide,
}) => {
  return (
    <div
      className="
      relative
      w-full
      lg:w-[62%]
      overflow-hidden
      rounded-2xl
      shadow-2xl
    "
    >
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
            w-full
            shrink-0
            relative
            h-[220px]
            sm:h-[280px]
            md:h-[350px]
            lg:h-[420px]
          "
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

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "w-6 bg-emerald-400"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;