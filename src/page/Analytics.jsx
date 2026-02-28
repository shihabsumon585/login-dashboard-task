import React, { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ComposedChart,
    CartesianGrid,
} from "recharts";

const Analytics = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await fetch(
                    "https://task-api-eight-flax.vercel.app/api/analytics"
                );
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching analytics:", error);
                setLoading(false);
            }
        };

        fetchAnalytics();
    }, []);

    if (loading) {
        return (
            <div className="bg-white p-6 rounded-xl shadow w-full max-w-4xl text-center">
                Loading analytics...
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow w-full  mt-4">
            <h2 className="text-gray-700 font-semibold mb-4">Project Analytics</h2>

            <ResponsiveContainer width="100%" height={450}>
                <ComposedChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    {/* Views as Bar */}
                    <Bar dataKey="views" barSize={20} fill="#16a34a" radius={[4, 4, 0, 0]} />
                    {/* Clicks as Line */}
                    <Line type="monotone" dataKey="clicks" stroke="#3b82f6" strokeWidth={2} />
                    {/* Conversions as Line */}
                    <Line type="monotone" dataKey="conversions" stroke="#f59e0b" strokeWidth={2} />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Analytics;