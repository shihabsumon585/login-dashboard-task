import React, { useState } from "react";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calender = () => {
  const [currentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= lastDate; i++) {
    days.push(i);
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full m-4 pr-10">
      <h2 className="text-gray-700 font-semibold mb-3">
        {currentDate.toLocaleString("default", { month: "long" })} {year}
      </h2>
      <div className="grid grid-cols-7 gap-15 text-xs text-center text-gray-500">
        {weekdays.map((day) => (
          <div key={day} className="font-medium">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`h-8 text-xl font-semibold flex items-center justify-center rounded-md ${
              day === currentDate.getDate()
                ? "bg-emerald-600 text-white font-bold"
                : "text-gray-700"
            }`}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;