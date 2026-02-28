import { Search, Bell, Mail, Command } from 'lucide-react';
import userImg from '../assets/user.png';
import { use, useEffect } from 'react';

const Header = () => {
  const email = localStorage.getItem("email");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="relative w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search task"
            className="w-full bg-white border border-gray-100 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-300 text-[10px] font-bold border rounded px-1">
            <Command size={10} /> F
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-gray-500 border-r pr-6">
            <Mail size={20} className="cursor-pointer hover:text-gray-600" />
            <Bell size={20} className="cursor-pointer hover:text-gray-600" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-gray-800">{email}</p>

            </div>
            <img src={userImg} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="profile" />
          </div>
        </div>
      </div>
      <div className='my-2 flex justify-between items-between px-4 mt-4'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
          <p className='text-sm text-gray-500'>Welcome to your dashboard</p>
        </div>
        <div className='space-x-2'>
          <button className='bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors'>Create New</button>
          <button className='bg-white text-emerald-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors border-1 border-1 hover:border-emerald-900'>Create New</button>
        </div>
      </div>
    </div>
  );
};
export default Header;