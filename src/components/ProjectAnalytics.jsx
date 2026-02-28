import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProjectAnalytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://task-api-eight-flax.vercel.app/api/analytics");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm text-center">
        Loading analytics...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm">
      <h2 className="text-gray-700 font-semibold mb-4">Project Analytics</h2>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <XAxis dataKey="date" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="views" fill="#16a34a" radius={[4, 4, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectAnalytics;