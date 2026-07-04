
const ServiceCards = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-6 mt-2">
      <div className="group w-full sm:w-auto text-center bg-white/80 backdrop-blur-md px-5 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-emerald-500 transition-all duration-300 hover:-translate-y-1">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
          Eye Care Services
        </h3>
      </div>

      <div className="group w-full sm:w-auto text-center bg-white/80 backdrop-blur-md px-5 py-3 rounded-lg shadow-lg cursor-pointer hover:bg-emerald-500 transition-all duration-300 hover:-translate-y-1">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
          General Health Facilities
        </h3>
      </div>
    </div>
  );
};

export default ServiceCards;