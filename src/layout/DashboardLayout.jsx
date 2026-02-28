import React from "react";

import DashboardSidebar from "../components/DashboardSidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md border-r">
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        {/* <div className="h-16 bg-white shadow-sm flex items-center px-6 border-b">
          <h1 className="text-xl font-semibold text-gray-700">
            Dashboard
          </h1>
        </div> */}

        {/* Page Content */}
        <div className=" flex-1 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;