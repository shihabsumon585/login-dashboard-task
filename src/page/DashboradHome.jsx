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
      <main className="flex-1 p-8 overflow-y-auto">
        <Header />
        <div className=" mt-8">
          <TopCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <ProjectAnalytics />
            <Reminders />
            <ProductsList />
            <UserList />
            <ProjectProgress />
            <TimeTracker />
        </div>
      </main>
    </div>
  );
};

export default DashboardHome;