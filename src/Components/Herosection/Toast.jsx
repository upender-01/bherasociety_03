
const Toast = ({ toast }) => {
  return (
    <div
      className={`fixed top-24 right-4 z-[60] transition-all duration-500 ${
        toast.show
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`px-4 py-3 rounded-lg shadow-2xl border-l-4 text-white font-semibold text-sm ${
          toast.type === "success"
            ? "bg-emerald-600 border-emerald-900"
            : "bg-red-600 border-red-900"
        }`}
      >
        {toast.message}
      </div>
    </div>
  );
};

export default Toast;