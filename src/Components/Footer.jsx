import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt , FaWhatsapp} from "react-icons/fa";
const whatsapplink="https://chat.whatsapp.com/Hp40T3iLMmR4fkyvW4pAWV";
const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    alert(`Subscribed successfully with: ${newsletterEmail}`);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-slate-900/0 font-bold text-white pt-16 pb-8 px-6 md:px-16 border-t border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/60">
        
        {/* Column 1: Organization & Contact Brief (Takes 4/12 width) */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tight uppercase">BHERA Society</h3>
          <p className="text-sm text-white leading-relaxed">
            Society for Health, Education, Poverty Alleviation and Rural Development. Working towards transforming healthcare access across rural communities.
          </p>
          <div className="space-y-2 text-sm pt-2">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-500 flex-shrink-0" />
              <span>18-397/9/633, Shadnagar, Rangareddy, Telangana</span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 flex-shrink-0" />
              <a href="mailto:bherasociety2023@gmail.com" className="hover:text-white transition-colors">bherasociety2023@gmail.com</a>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500 flex-shrink-0" />
              <a href="tel:+919701191811" className="hover:text-white transition-colors">+91 9701191811</a>
            </p>
          </div>
          
          {/* Social Icons Integrated Smoothly Here */}
          <div className="flex space-x-3 pt-2">
            <a href="https://www.instagram.com/bhera_society/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-200" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566390302611" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="mailto:bherasociety2023@gmail.com" className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-[#d93025] hover:text-white transition-all duration-200" aria-label="Email">
              <FaEnvelope size={16} />
            </a>
            <a href="https://www.google.com/maps/place/Shree+Sathya+Lions+Eye+Hospital/@17.5972683,79.9978209,17z/data=!3m1!4b1!4m6!3m5!1s0x3a348f9b50b565e9:0x20233c7ba14c4ce!8m2!3d17.5972683!4d79.9978209!16s%2Fg%2F11whhfm7rz?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center  hover:text-white transition-all duration-200" aria-label="Location">
              <FaMapMarkerAlt size={16} />
            </a>
            <a href={whatsapplink} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-200" aria-label="Location">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (Takes 2/12 width) */}
        <div className="md:col-span-2 md:ml-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
            <li><a href="#facilities" className="hover:text-blue-500 transition-colors">Services</a></li>
            <li><a href="/" className="hover:text-blue-500 transition-colors">Appointment</a></li>
            <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Help & Compliance (Takes 2/12 width) */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal & Support</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/contactus" className="hover:text-blue-500 transition-colors">Contact Support</a></li>
            <li><a href="/donate" className="hover:text-blue-500 transition-colors">Donate Info</a></li>
            <li><a href="/privacypolicy" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
            <li><a href="/compliance" className="hover:text-blue-500 transition-colors">Compliance</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Signup (Takes 4/12 width) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Stay Updated</h4>
          <p className="text-sm text-white">Subscribe to our newsletter to receive healthcare camp updates and community logs.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-1">
            <input 
              type="email" 
              required
              placeholder="Your email address" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-gray-900 border border-gray-800 rounded-xl text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button 
              type="submit"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all whitespace-nowrap shadow-md shadow-blue-600/10"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Metadata Layer */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white">
        <p>© {new Date().getFullYear()} BHERA Society. All rights reserved.</p>
        
        {/* Simplified modern designer tag */}
        <p className="font-medium tracking-wide">
          Designed by <span className="text-white">Bhukya Upender</span> | <a href="mailto:bhukyaupender31@gmail.com" className="text-blue-500/80 hover:text-blue-400 font-semibold transition-colors">bhukyaupender31@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;