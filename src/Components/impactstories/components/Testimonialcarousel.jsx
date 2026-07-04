import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const TestimonialCarousel = ({
  reviews,
}) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
      }}
      loop
      slidesPerView={3}
      centeredSlides
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div
            className="
            bg-white/5
            backdrop-blur-md
            rounded-3xl
            p-6
            border
            border-white/10
            shadow-xl
          "
          >
            <div className="flex items-center gap-4">
              <img
                src={
                  review.image ||
                  "https://i.pravatar.cc/150"
                }
                alt=""
                className="
                  w-16
                  h-16
                  rounded-full
                  object-cover
                "
              />

              <div>
                <h3 className="text-white font-semibold">
                  {review.name}
                </h3>

                <p className="text-cyan-400">
                  {review.location}
                </p>
              </div>
            </div>

            <p className="mt-5 text-slate-300">
              {review.review}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;