import React, { useState } from 'react';
import { Heart, CreditCard, QrCode, ShieldCheck, HeartHandshake } from 'lucide-react';
import Qr from "../assets/images/Qr.png";
const API_URL=import.meta.env.VITE_API_URL;
const Donatebutton = () => {
  const [amount, setAmount] = useState(500);
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    try {
      const result = await fetch(`${API_URL}/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount }),
      });

      if (!result.ok) {
        throw new Error('Failed to create order on the server.');
      }

      const order = await result.json();

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID, 
        amount: order.amount,
        currency: order.currency,
        name: 'Life Savers Foundation',
        description: 'Donation for saving lives',
        order_id: order.id,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Generous Donor',
          email: 'donor@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#38bdf8', // Updated to Sky Blue to match the slate theme
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Something went wrong while initiating the payment.');
    } finally {
      setLoading(false);
    }
  };

  const quotes = [
    "We make a living by what we get, but we make a life by what we give. — Winston Churchill",
    "No one has ever become poor by giving. — Anne Frank",
    "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
    "It's not how much we give, but how much love we put into giving. — Mother Teresa"
  ];

  return (
    <>
    {/* Background changed to Slate-950 blending into Blue-900 gradient */}
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-4 font-sans text-white">
      
      {/* Glassmorphism Card */}
      <div className="max-w-5xl w-full bg-slate-900/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Top Section: Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          
          {/* Left Side: Payment Gateway Trigger */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-2">
                <Heart className="text-rose-500 fill-rose-500" size={36} />
                Make a Difference
              </h2>
              <p className="text-slate-300 text-lg">
                Your contribution directly supports saving lives and providing essential care.
              </p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-300">
                Choose Donation Amount (INR)
              </label>
              <div className="flex gap-3">
                {[500, 1000, 2000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`flex-1 py-2 rounded-xl border transition-all duration-300 ${
                      amount === preset
                        ? 'bg-sky-600 border-sky-500 text-white shadow-lg shadow-sky-600/20'
                        : 'border-slate-700 hover:bg-slate-800/50 text-slate-200'
                    }`}
                  >
                    ₹{preset}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || '')}
                  className="w-full bg-slate-950/40 border border-slate-700/50 rounded-xl py-3 pl-8 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder-slate-500"
                  placeholder="Custom amount"
                  min="1"
                />
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={loading || amount <= 0}
              className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-600/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CreditCard size={20} />
              {loading ? 'Processing...' : `Donate ₹${amount || 0} Securely`}
            </button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <ShieldCheck size={16} className="text-emerald-400" />
              Secured by Razorpay (Cards, UPI, NetBanking)
            </div>
          </div>

          {/* Right Side: Direct UPI Scanner */}
          <div className="flex flex-col items-center justify-center bg-slate-950/20 border border-slate-800/60 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
              <QrCode size={120} />
            </div>
            
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 z-10 text-white">
              <QrCode className="text-sky-400" size={28} />
              Quick UPI Scan
            </h3>
            
            <div className="bg-white p-4 rounded-2xl shadow-xl z-10 transition-all duration-300 hover:scale-105">
              <img 
                src={Qr} 
                alt="Dynamic UPI QR Code" 
                className="w-48 h-48 rounded-lg"
              />
            </div>
            
            <p className="mt-6 text-slate-300 text-center z-10">
              Scan with any UPI app to donate <strong className="text-white">₹{amount || 0}</strong> directly.
            </p>
          </div>
        </div>

        {/* Bottom Section: Pure Tailwind CSS Marquee */}
        <div className="bg-slate-950/60 border-t border-slate-800/60 py-4 relative overflow-x-hidden flex select-none">
          <div className="animate-marquee whitespace-nowrap flex items-center min-w-full justify-around gap-16">
            {quotes.map((quote, idx) => (
              <span key={idx} className="flex items-center gap-2 text-sky-200/80">
                <HeartHandshake size={18} className="inline text-sky-400" /> "{quote}"
              </span>
            ))}
          </div>
          <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex items-center min-w-full justify-around gap-16">
            {quotes.map((quote, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-2 text-sky-200/80">
                <HeartHandshake size={18} className="inline text-sky-400" /> "{quote}"
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Donatebutton;