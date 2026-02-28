import React from "react";
import {
  LayoutDashboard,
  ClipboardList,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    toast.success("Logged out successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen w-64 bg-white border-r border-gray-100 p-6 fixed">
      <div className="flex items-center gap-1 mb-10 px-2">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-green-600 rounded-full border-t-transparent"></div>
        </div>
        <h1 className="text-xl font-bold text-gray-800">Donezo</h1>
      </div>

      <Section title="Menu">
        <SidebarLink to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <SidebarLink to="/dashboard/products" icon={<ClipboardList size={20} />} label="Products" />
        <SidebarLink to="/dashboard/calendar" icon={<Calendar size={20} />} label="Calendar" />
        <SidebarLink to="/dashboard/analytics" icon={<BarChart3 size={20} />} label="Analytics" />
        <SidebarLink to="/dashboard/users" icon={<Users size={20} />} label="Users" />
      </Section>

      <Section title="General">
        <SidebarLink to="/dashboard/help" icon={<HelpCircle size={20} />} label="Help" />
        <SidebarLink icon={<LogOut size={20} />} label="Logout" onClick={handleLogout} />
      </Section>

      <div className="mt-auto bg-emerald-950 p-4 rounded-2xl text-white">
        <p className="text-sm font-semibold">Download our Mobile App</p>

        <a
          href="https://apps.microsoft.com/store/detail/YOUR_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 w-full py-1 bg-green-500 rounded-lg text-xs font-bold text-center hover:bg-green-600 transition"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default DashboardSidebar;


const Section = ({ title, children }) => (
  <>
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
      {title}
    </p>
    <nav className="space-y-1 mb-6">{children}</nav>
  </>
);


const SidebarLink = ({ icon, label, badge, to, onClick }) => {
  const content = (
    <div className="flex items-center gap-3">
      <span className="text-gray-400">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );


  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition"
      >
        {content}
      </button>
    );
  }


  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-3 py-2 rounded-xl transition ${isActive
          ? "bg-green-50 text-green-700"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        }`
      }
    >
      {content}
      {badge && (
        <span className="bg-green-900 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">
          {badge}
        </span>
      )}
    </NavLink>
  );
};