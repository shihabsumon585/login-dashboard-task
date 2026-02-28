import { Search, Bell, Mail, Command } from 'lucide-react';
import userImg from '../assets/user.png';

const Header = () => (
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
          <p className="text-xs font-bold text-gray-800">Totok Michael</p>
          <p className="text-[10px] text-gray-500">tmichael20@mail.com</p>
        </div>
        <img src={userImg} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="profile" />
      </div>
    </div>
  </div>
);
export default Header;