import React, { useState } from "react";

const faqs = [
  {
    question: "What is BHERA Society?",
    answer:
      "BHERA Society stands for 'Society for Health, Education, Poverty Alleviation and Rural Development'. It is a non-profit organization working to improve healthcare access and awareness in rural Telangana.",
  },
  {
    question: "What healthcare services are provided?",
    answer:
      "BHERA Society conducts free eye screening camps, cataract surgeries, general health awareness programs, and mobile medical services for underserved areas.",
  },
  {
    question: "Who are the hospitals managed by BHERA Society?",
    answer:
      "They manage Shree Sathya Lion’s Eye Hospital in Mahabubabad and Bhavani Eye Care Centre in Shadnagar, both offering free and subsidized eye care services.",
  },
  {
    question: "Do they charge for medical services?",
    answer:
      "No, the core medical services like eye checkups, cataract surgeries, and distribution of eyeglasses are provided free of cost to economically weaker sections.",
  },
  {
    question: "How do they help old people?",
    answer:
      "BHERA Society manages 14 old age homes that provide shelter, medical care, and rehabilitation to senior citizens.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/0 transition-colors text-white duration-300" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-slate-900/0 border rounded-2xl transition-all duration-300 overflow-hidden outline-none focus-within:ring-2 focus-within:ring-blue-500/40 ${
                  isOpen 
                    ? "border-blue-500 shadow-lg shadow-blue-500/5 dark:border-blue-500" 
                    : "border-gray-200 dark:border-gray-700 shadow-sm hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 font-semibold text-base sm:text-lg text-gray-900 dark:text-white flex justify-between items-center gap-4 transition-colors duration-200 hover:bg-gray-50/50 dark:hover:bg-gray-700/30"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug font-extrabold">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}`}>
                    <svg 
                      className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Animated Body Container using CSS Grid for dynamic height scaling */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed border-t border-gray-50 dark:border-gray-700/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;