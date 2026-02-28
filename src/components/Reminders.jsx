// Reminders.jsx
import React from "react";
import { Video } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reminders = () => {
  const handleStartMeeting = () => {
    toast.info("No meeting scheduled for this time", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between w-full max-w-sm">
      {/* Content */}
      <div>
        <h4 className="text-gray-700 font-semibold mb-2">Reminders</h4>
        <p className="text-lg font-bold text-gray-900 leading-tight">Meeting with Arc Company</p>
        <p className="text-xs text-gray-400 mt-1">Time: 02.00 pm - 04.00 pm</p>
      </div>

      {/* Button */}
      <button
        onClick={handleStartMeeting}
        className="mt-6 w-full py-3 bg-emerald-800 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors"
      >
        <Video size={16} /> Start Meeting
      </button>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Reminders;