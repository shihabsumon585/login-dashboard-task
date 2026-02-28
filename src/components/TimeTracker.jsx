import React, { useState, useEffect } from 'react';
import { Play, Square, Pause } from 'lucide-react';

const TimeTracker = () => {
  const [seconds, setSeconds] = useState(5048);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return [hrs, mins, secs]
      .map((v) => (v < 10 ? "0" + v : v))
      .join(":");
  };

  return (
    <div className="w-full h-full bg-[#0a2310] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 border-[1px] border-green-400 rounded-full"></div>
        <div className="absolute -right-14 -bottom-14 w-48 h-48 border-[1px] border-green-500 rounded-full"></div>
        <div className="absolute -right-18 -bottom-18 w-56 h-56 border-[1px] border-green-600 rounded-full"></div>
      </div>

      <div className="z-10">
        <h3 className="text-white text- font-medium">Time Tracker</h3>
        <div className="text-white text-5xl font-semibold mt-8 tracking-wider flex justify-center">
          {formatTime(seconds)}
        </div>
      </div>

      <div className="flex justify-center gap-5 mb-7 z-10">
        {/* Play/Pause Button */}
        <button 
          onClick={() => setIsActive(!isActive)}
          className="bg-white p-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          {isActive ? (
            <Pause size={20} fill="black" className="text-black" />
          ) : (
            <Play size={20} fill="black" className="text-black ml-0.5" />
          )}
        </button>

        {/* Stop Button */}
        <button 
          onClick={() => {setIsActive(false); setSeconds(0);}}
          className="bg-[#ef4444] p-3 rounded-full hover:bg-red-600 transition-colors"
        >
          <Square size={20} fill="white" className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;