import React from 'react';
import Header from '../components/Header';
import TopCard from '../components/TopCard';
import ProjectAnalytics from '../components/ProjectAnalytics';
import ProjectProgress from '../components/ProjectProgress';
import Reminders from '../components/Reminders';
import ProductsList from '../components/ProductsList';
import UserList from '../components/UserList';
import TimeTracker from '../components/TimeTracker';

const DashboardHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-slate-900">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Header />

        {/* Stats Grid */}
        <div className=" mt-8">
          <TopCard />
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* <div className=" grid grid-cols-1 lg:col-span-2 md:grid-cols-3 gap-6"> */}
            <ProjectAnalytics />
            <Reminders />
            <ProductsList />
            <UserList />
            <ProjectProgress />
            <TimeTracker />
          
          {/* </div> */}
          
            {/* <TeamCollaboration /> */}
          {/* <div className="space-y-6"> */}
            {/* <ProjectList /> */}
          {/* </div> */}
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;