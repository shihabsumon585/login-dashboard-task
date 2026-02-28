import { Video } from 'lucide-react';

const Reminders = () => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
    <div>
      <h4 className="text-sm font-bold mb-4">Reminders</h4>
      <p className="text-lg font-bold text-gray-800 leading-tight">Meeting with Arc Company</p>
      <p className="text-xs text-gray-400 mt-1">Time : 02.00 pm - 04.00 pm</p>
    </div>
    <button className="mt-6 w-full py-3 bg-emerald-800 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-900">
      <Video size={16} /> Start Meeting
    </button>
  </div>
);
export default Reminders;