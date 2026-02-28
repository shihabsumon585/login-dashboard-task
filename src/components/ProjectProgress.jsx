const ProjectProgress = () => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
    <h4 className="text-sm font-bold mb-2">Project Progress</h4>
    <div className="relative flex justify-center items-center mt-4">
      {/* Custom SVG Half Donut */}
      <svg className="w-32 h-32 transform -rotate-90">
        <circle cx="64" cy="64" r="54" stroke="#e2e8f0" strokeWidth="12" fill="transparent" strokeDasharray="170 340" />
        <circle cx="64" cy="64" r="54" stroke="#064e3b" strokeWidth="12" fill="transparent" strokeDasharray="110 340" strokeLinecap="round" />
        <circle cx="64" cy="64" r="54" stroke="#059669" strokeWidth="12" fill="transparent" strokeDasharray="60 340" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-4">
        <span className="text-2xl font-black">41%</span>
        <span className="text-[9px] text-gray-400 font-semibold uppercase">Project Ended</span>
      </div>
    </div>
    <div className="flex justify-center gap-3 mt-6">
       <Legend color="bg-green-600" label="Completed" />
       <Legend color="bg-emerald-950" label="In Progress" />
       <Legend color="bg-gray-200" label="Pending" />
    </div>
  </div>
);

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-1.5">
    <div className={`w-2 h-2 rounded-full ${color}`}></div>
    <span className="text-[9px] text-gray-400 font-bold">{label}</span>
  </div>
);
export default ProjectProgress;