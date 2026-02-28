import React, { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "https://task-api-eight-flax.vercel.app/api/users"
                );
                const data = await response.json();
                setUsers(data);
                setFilteredUsers(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Search filter
    useEffect(() => {
        const filtered = users.filter(
            (user) =>
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [search, users]);

    if (loading) {
        return (
            <div className="bg-white p-6 rounded-xl shadow w-full max-w-4xl text-center">
                Loading users...
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow w-full px-30 mt-4">
            <h2 className="text-gray-700 font-semibold mb-4">Users</h2>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </div>

            <div className="divide-y divide-gray-200">
                {filteredUsers.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">No users found.</p>
                ) : (
                    filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            className="flex justify-between items-center py-3 hover:bg-gray-50 px-3 rounded-md transition-colors"
                        >
                            <div>
                                <p className="text-gray-900 font-medium">{user.name}</p>
                                <p className="text-gray-500 text-sm">{user.email}</p>
                            </div>
                            <span
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${user.status === "active"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                    }`}
                            >
                                {user.status}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Users;