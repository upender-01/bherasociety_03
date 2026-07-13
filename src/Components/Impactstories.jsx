import React, { useState, useEffect } from 'react';
const URL=import.meta.env.VITE_API_URL;
const API_URL = `${URL}/api/reviews`;
import Bherascoietyimage from "../assets/images/bherasocietyimage.jpeg";


const galleryItems = [
  { id: 1, type: 'image', url: Bherascoietyimage, alt: 'Community Health Camp' },
  { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500', alt: 'Blood Donation Drive' },
  { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500', alt: 'Staff Training Event' },
];

export default function ImpactStories() {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); 
  const [showToast, setShowToast] = useState(false); 
  const [formData, setFormData] = useState({
    name: '', email: '', location: '', rating: 0, comment: ''
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_URL}/approved`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Failed to fetch reviews", err);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      setSubmitStatus('error_rating');
      return;
    }

    setSubmitStatus('loading');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setIsModalOpen(false);
        setFormData({ name: '', email: '', location: '', rating: 0, comment: '' });
        setSubmitStatus('');
        setShowToast(true);
        
        setTimeout(() => setShowToast(false), 3500);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <div 
    id="impact"
    className="relative min-h-[50vh] bg-slate-900/0 pb-2 overflow-hidden font-sans">
      
      {/* --- INLINE STYLES FOR ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } 
        }
        @keyframes custom-fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes custom-slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-custom-marquee {
          animation: custom-marquee 40s linear infinite;
        }
        .group:hover .animate-custom-marquee {
          animation-play-state: paused;
        }
        .animate-custom-fade {
          animation: custom-fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-custom-slide {
          animation: custom-slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* STATIC BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-fixed bg-center opacity-10 pointer-events-none"></div>

      {/* TOP-RIGHT SUCCESS TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed top-6 right-6 z-[60] bg-white border-l-4 border-green-500 shadow-2xl rounded-lg px-6 py-4 flex items-center gap-4 animate-custom-slide">
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-lg">✓</span>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold text-sm">Review Submitted!</h4>
            <p className="text-gray-500 text-sm mt-0.5">Thank you, it is pending approval.</p>
          </div>
          <button onClick={() => setShowToast(false)} className="ml-4 text-gray-400 hover:text-gray-600">✕</button>
        </div>
      )}

      {/* ALL CONTENT GOES HERE */}
      <div className="relative z-10">
        
        {/* --- REVIEWS SECTION --- */}
        <section className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Patient Impact & Stories</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Hear directly from the lives we have touched. Your feedback helps us grow and serve our community better.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              Share Your Story
            </button>
          </div>

          {/* Circular Rotating Marquee */}
          <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-custom-marquee gap-6 px-4">
              {reviews.length > 0 ? [...reviews, ...reviews].map((review, index) => (
                <div key={index} className="w-[400px] flex-none bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-200/50 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-yellow-400 text-xl tracking-widest">{renderStars(review.rating)}</div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Verified</span>
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed line-clamp-4">"{review.comment}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold uppercase">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.location}</div>
                    </div>
                  </div>
                </div>
              )) : (
                <p className="text-center text-white w-full text-gray-500">No stories available yet. Be the first to share!</p>
              )}
            </div>
          </div>
        </section>

        {/* --- GALLERY SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <h3 className="text-3xl font-bold text-gray-900">Community Gallery</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map(item => (
              <div key={item.id} className="relative group overflow-hidden rounded-2xl shadow-sm">
                <img 
                  src={item.url} 
                  alt={item.alt} 
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- MODERN SHARE REVIEW MODAL --- */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 pb-20">
            {/* Blurred Backdrop */}
            <div 
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-custom-fade text-black">
              <div className="px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900">Write a Review</h3>
                    <p className="text-sm text-gray-500 mt-1">Tell us about your experience.</p>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                    <span className="text-xl leading-none">&times;</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                      <input type="text" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Location</label>
                      <input type="text" placeholder="New York, NY" required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address (Private)</label>
                    <input type="email" placeholder="john@example.com" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl">
                    <label className="block text-sm font-bold text-gray-900 mb-2">Rate your experience</label>
                    <div className="flex gap-1 text-4xl cursor-pointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                          key={star}
                          onClick={() => setFormData({...formData, rating: star})}
                          className={`transition-colors duration-200 ${star <= formData.rating ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-200 hover:text-yellow-200'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    {submitStatus === 'error_rating' && <p className="text-red-500 text-xs font-bold mt-2">Please select a star rating to continue.</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Story</label>
                    <textarea placeholder="The doctors were amazing and..." required rows="4" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
                  </div>
                  
                  {submitStatus === 'error' && <p className="text-red-500 text-sm font-semibold text-center bg-red-50 p-3 rounded-lg border border-red-100">Failed to submit. Please try again later.</p>}
                  
                  <button type="submit" disabled={submitStatus === 'loading'} className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black hover:shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-2">
                    {submitStatus === 'loading' ? (
                      <><span className="animate-spin text-xl leading-none">⟳</span> Submitting...</>
                    ) : 'Submit Review'}
                  </button>
                </form>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}