import Qr from "../../assets/images/Qr.png";
const QRDonation = () => {
  return (
    <div
      className="
      fixed
      bottom-4
      right-4
      md:top-28
      md:bottom-auto
      md:right-4
      lg:right-6
      z-50
      bg-[#1e293b]/90
      backdrop-blur-sm
      p-2
      rounded-xl
      shadow-2xl
      border border-white/20
      scale-75
      md:scale-100
      hover:scale-105
      transition-all
      duration-300
      mt-8   "
    >
      <div className="bg-white p-1.5 rounded-lg mb-1">
        <img
          src={Qr}
          alt="Donate QR"
          className="w-20 h-20 object-contain"
        />
      </div>

      <p className="text-white text-center text-[11px] font-bold">
        Scan to Donate
      </p>
    </div>
  );
};

export default QRDonation;