import React from "react";

import DashboardSidebar from "../components/DashboardSidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md border-r">
        <DashboardSidebar />
      </div>

      <div className="flex-1 flex flex-col">

        <div className=" flex-1 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;