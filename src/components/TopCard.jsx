import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const TopCard = () => {
  const [activeId, setActiveId] = useState(1);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://task-api-eight-flax.vercel.app/api/dashboard"
      );
      const data = await res.json();

      const mappedCards = [
        {
          id: 1,
          title: "Total Users",
          value: data.overview.totalUsers,
        },
        {
          id: 2,
          title: "Active Users",
          value: data.overview.activeUsers,
        },
        {
          id: 3,
          title: "Revenue",
          value: `$${data.overview.revenue}`,
        },
        {
          id: 4,
          title: "Growth",
          value: `${data.overview.growth}%`,
        },
      ];

      setCards(mappedCards);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const isActive = card.id === activeId;

        return (
          <div
            key={card.id}
            onClick={() => setActiveId(card.id)}
            className={`cursor-pointer rounded-2xl p-5 shadow-sm transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-br from-[#265842] via-[#3a7757] to-[#53a86f] text-white"
                : "bg-white text-gray-800 border hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl font-medium opacity-90">{card.title}</p>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isActive
                    ? "bg-white text-black"
                    : "border text-gray-600"
                }`}
              >
                <ArrowUpRight size={16} />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-2">{card.value}</h2>

            <p
              className={`text-xs ${
                isActive ? "text-green-100" : "text-gray-500"
              }`}
            >
              ↑ Increased from last month
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TopCard;