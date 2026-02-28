const TeamCollaboration = () => {
  const teams = [
    { name: 'Alexandra Deff', task: 'Github Project Repository', status: 'Completed', color: 'bg-green-100 text-green-600' },
    { name: 'Edwin Adenike', task: 'Integrate User Authentication System', status: 'In Progress', color: 'bg-orange-100 text-orange-600' },
    { name: 'Isaac Oluwatemilorun', task: 'Develop Search and Filter Functionality', status: 'Pending', color: 'bg-red-100 text-red-600' },
    { name: 'David Oshodi', task: 'Responsive Layout for Homepage', status: 'In Progress', color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-sm font-bold">Team Collaboration</h4>
        <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1 font-semibold text-gray-600">
          + Add Member
        </button>
      </div>
      <div className="space-y-4">
        {teams.map((member, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{member.name}</p>
                <p className="text-gray-400 text-[10px]">Working on <span className="font-medium text-gray-600">{member.task}</span></p>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-md text-[9px] font-bold ${member.color}`}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamCollaboration;