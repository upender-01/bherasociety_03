import Navbar from "./Navbar";
import BackgroundImage from "../assets/background_image.png";
import HeroSection from "./Herosection/HeroSection";
import Quick_highlight from "./Quick_highlight";
import ServicesSection from "./Ourservices";
import HospitalsAndFacilities from "./Hospital_section";
import ImpactStories from "./Impactstories";
import Brandingpartners from "./Brandingpartners";
import FAQs from "./FAQs";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import ScrollTop from "./scrolltop";
const Home = () => {
  return (
    <div 
      id="home"
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat relative text-white"
      style={{
        // Now properly wrapped in the url() CSS function
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      {/* Dark tint overlay for better text contrast and readability */}
      <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection/>
        <Aboutus/>
        <Quick_highlight/>
        <ServicesSection/>
        <HospitalsAndFacilities/>
        <ImpactStories/>
        <Brandingpartners/>
        <FAQs/>
        <Footer/>
        <ScrollTop/>
        {/* Home / Hero Section */}
        

        {/* Programs & Services Section */}
        

        {/* Hospital & Facilities Section */}
        

        {/* Impact & Stories Section */}
        
      </div>
    </div>
  );
};

export default Home;