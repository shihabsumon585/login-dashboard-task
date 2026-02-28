// UserList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://task-api-eight-flax.vercel.app/api/users");
                const data = await response.json();
                setUsers(data.slice(0, 4));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm text-center mt-4">
                Loading users...
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow p-4 w-full max-w-sm mt-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="lg text-gray-700 font-semibold">Users</h2>
                <button
                    onClick={() => navigate("/dashboard/users")}
                    className="text-sm text-white bg-emerald-800 rounded-2xl hover:bg-emerald-700 px-3 py-1 flex items-center gap-1"
                >
                    All Users
                </button>
            </div>

            <ul className="text-gray-600 text-sm space-y-2">
                {users.map((user) => (
                    <li key={user.id} className="flex justify-between">
                        <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-xs text-gray-400">{user.email}</p>
                        </div>
                        <span
                            className={`px-2 rounded-md text-[9px] font-bold inline-flex items-center justify-center ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }`}
                        >
                            {user.status}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;