import  { useState, useEffect } from "react";
import AppointmentForm from  "./Appointment_section";
import ImageSlider from "./ImageSlider";
import ServiceCards from "./ServiceCards";
import QRDonation from "./QRDonation";
import Toast from "./Toast";
import I1 from "../../assets/images/p3.jpeg";
import I2 from "../../assets/images/p5.jpeg";
import I3 from "../../assets/images/p6.jpeg";
import I4 from "../../assets/images/p23.jpeg";
import I5 from "../../assets/images/p13.jpeg";
import I6 from "../../assets/images/p17.jpeg";
import I7 from "../../assets/images/p21.jpeg";
import I8 from "../../assets/images/p22.jpeg";
const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
const carouselImages = [I1, I2, I3, I4, I5, I6, I7, I8];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-20 md:pt-24 pb-8 md:pb-12 flex flex-col items-center justify-center"
    >
      <Toast toast={toast} />
      <QRDonation />

      <div className="w-[95%] max-w-7xl mx-auto flex flex-col gap-4 md:gap-6">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
          Bringing HealthCare to Rural Communities
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
          <AppointmentForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />

          <ImageSlider
            carouselImages={carouselImages}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>

        <ServiceCards />
      </div>
    </section>
  );
};

export default HeroSection;