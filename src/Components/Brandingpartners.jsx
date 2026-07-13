import React from 'react';

// Array of branding partners with inline vector SVGs for perfect scaling and zero broken image links
const partners = [
  { id: 1, name: 'HealthCorp', logo: (
    <svg className="h-12 text-gray-400 hover:text-green-600 transition-colors duration-200" viewBox="0 0 200 50" fill="currentColor">
      <rect x="10" y="10" width="30" height="30" rx="5" />
      <path d="M20 15v20M10 25h20" stroke="white" strokeWidth="4" />
      <text x="55" y="32" fontSize="25" fontWeight="bold" fontFamily="sans-serif">HealthCorp</text>
    </svg>
  )},
  { id: 2, name: 'MedLife', logo: (
    <svg className="h-12 text-gray-400 hover:text-green-600 transition-colors duration-200" viewBox="0 0 200 50" fill="currentColor">
      <circle cx="25" cy="25" r="18" />
      <path d="M18 20l7 10 7-10" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <text x="55" y="32" fontSize="25" fontWeight="bold" fontFamily="sans-serif">MedLife</text>
    </svg>
  )},
  { id: 3, name: 'CareFirst', logo: (
    <svg className="h-12 text-gray-400 hover:text-green-600 transition-colors duration-200" viewBox="0 0 200 50" fill="currentColor">
      <path d="M12 25 C12 10, 38 10, 38 25 C38 40, 12 40, 12 25 Z" opacity="0.8"/>
      <circle cx="25" cy="25" r="6" fill="white" />
      <text x="55" y="32" fontSize="25" fontWeight="bold" fontFamily="sans-serif">CareFirst</text>
    </svg>
  )},
  { id: 4, name: 'ApexBio', logo: (
    <svg className="h-12 text-gray-400 hover:text-green-600 transition-colors duration-200" viewBox="0 0 200 50" fill="currentColor">
      <polygon points="25,8 42,38 8,38" />
      <circle cx="25" cy="26" r="4" fill="white"/>
      <text x="55" y="32" fontSize="25" fontWeight="bold" fontFamily="sans-serif">ApexBio</text>
    </svg>
  )},
  { id: 5, name: 'NovaHealth', logo: (
    <svg className="h-12 text-gray-400 hover:text-green-600 transition-colors duration-200" viewBox="0 0 200 50" fill="currentColor">
      <path d="M10 15 h12 v12 h-12 z M24 25 h12 v12 h-12 z" />
      <text x="55" y="32" fontSize="25" fontWeight="bold" fontFamily="sans-serif">NovaHealth</text>
    </svg>
  )},
  { id: 6, name: 'PulseLab', logo: (
    <svg className="h-12 text-gray-400 hover:text-green-600 transition-colors duration-200" viewBox="0 0 200 50" fill="currentColor">
      <path d="M10 25 h8 l4 -12 l4 24 l4 -16 l4 4 h8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="55" y="32" fontSize="18" fontWeight="bold" fontFamily="sans-serif">PulseLab</text>
    </svg>
  )}
];

export default function BrandingPartners() {
  return (
    <section className="bg-slate-900/0 py-12 border-y border-gray-100 relative z-10 overflow-hidden w-full">
      
      {/* --- INLINE KEYFRAME ANIMATION --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes brand-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-brand-marquee {
          animation: brand-marquee 25s linear infinite;
        }
        /* Pauses the marquee movement when hovering anywhere over the section */
        .brand-container:hover .animate-brand-marquee {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h4 className=" font-extrabold text-white-500 md:text-4xl text-shadow-cyan-400 tracking-widest uppercase">Trusted Branding Partners</h4>
        <p className="text-sm font-bold mt-1">Collaborating with top healthcare institutions and insurance providers</p>
      </div>

      {/* Marquee Display Container */}
      <div className="brand-container relative flex overflow-x-hidden w-full mask-gradient">
        
        {/* Track Layer (Duplicated to fulfill continuous loop logic) */}
        <div className="flex animate-brand-marquee gap-16 items-center whitespace-nowrap min-w-full shrink-0">
          
          {/* First Run */}
          {partners.map((partner) => (
            <div key={`run1-${partner.id}`} className="w-48 flex-none flex items-center justify-center filter grayscale contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200">
              {partner.logo}
            </div>
          ))}
          
          {/* Second Run (Seamless connector loop) */}
          {partners.map((partner) => (
            <div key={`run2-${partner.id}`} className="w-48 flex-none flex items-center justify-center filter grayscale contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200">
              {partner.logo}
            </div>
          ))}
          
        </div>
      </div>

      {/* CSS fading mask overlays to make the sides blend out nicely */}
      <style dangerouslySetInnerHTML={{__html: `
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />

    </section>
  );
}