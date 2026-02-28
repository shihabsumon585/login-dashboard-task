const ProjectAnalytics = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const data = [45, 75, 55, 95, 80, 60, 40];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <h4 className="text-sm font-bold mb-6">Project Analytics</h4>
      <div className="flex justify-between items-end h-32 gap-2">
        {data.map((h, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <div 
              className={`w-full rounded-full transition-all duration-500 ${
                i === 0 || i === 6 ? 'border-2 border-dashed border-gray-200' : 
                i === 3 ? 'bg-emerald-900' : 'bg-emerald-600'
              }`}
              style={{ height: `${h}%` }}
            >
              {i === 2 && (
                <div className="relative">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-100 text-[8px] px-1 py-0.5 rounded border border-gray-200">74%</span>
                </div>
              )}
            </div>
            <span className="text-[10px] text-gray-400 mt-2 font-medium">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectAnalytics;
