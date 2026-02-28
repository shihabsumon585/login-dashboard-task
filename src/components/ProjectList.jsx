import { MoreVertical, Play, Pause, Square } from 'lucide-react';

const ProjectList = () => {
  const items = [
    { title: 'Develop API Endpoints', date: 'Nov 26, 2024', color: 'text-blue-500' },
    { title: 'Onboarding Flow', date: 'Nov 28, 2024', color: 'text-teal-500' },
    { title: 'Build Dashboard', date: 'Nov 30, 2024', color: 'text-orange-500' },
    { title: 'Optimize Page Load', date: 'Dec 5, 2024', color: 'text-yellow-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold">Project</h4>
        <button className="text-[10px] border px-2 py-1 rounded-md font-bold text-gray-500">+ New</button>
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className={`mt-1 font-bold ${item.color}`}>//</div>
            <div>
              <p className="text-xs font-bold text-gray-800">{item.title}</p>
              <p className="text-[9px] text-gray-400">Due date: {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TimeTracker = () => (
  <div className="bg-emerald-950 p-6 rounded-3xl text-white relative overflow-hidden">
    <div className="relative z-10">
      <p className="text-xs font-semibold text-gray-400 mb-6">Time Tracker</p>
      <h2 className="text-3xl font-mono tracking-widest mb-8">01:24:08</h2>
      <div className="flex gap-4 justify-center">
        <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"><Pause size={20}/></button>
        <button className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition"><Square size={20}/></button>
      </div>
    </div>
    {/* Abstract Background SVG Pattern */}
    <div className="absolute top-0 right-0 opacity-20 transform scale-150 translate-x-1/4 -translate-y-1/4">
       <svg width="200" height="200" viewBox="0 0 200 200"><path d="M0,100 C50,150 150,50 200,100" fill="none" stroke="white" strokeWidth="2" /></svg>
    </div>
  </div>
);
export default { ProjectList, TimeTracker };