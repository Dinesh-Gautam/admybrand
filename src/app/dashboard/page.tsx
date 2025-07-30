'use client';

import { FilterState } from '@/components/DropdownFilter';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import DashboardActions from './_components/DashboardActions';
import DashboardCardGrid from './_components/DashboardCardGrid';
import DashboardHeader from './_components/DashboardHeader';

export default function Dashboard() {
  const [filters, setFilters] = useState<FilterState>({
    DirectorIndirect: true,
    RealTimeValue: true,
    Topcahnnels: true,
    SalesRefunds: true,
    SalesOverTime: true,
    TopCountries: true,
    Customers: true,
    RecentActivity: true,
    IncomeExpenses: true,
    RefundReasons: true,
  });

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />

        <main className="grow">
          <div
            id="dashboard-content"
            className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"
          >
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <DashboardHeader />
              <DashboardActions onFilterChange={handleFilterChange} />
            </div>
            <DashboardCardGrid filters={filters} />
          </div>
        </main>
      </div>
    </div>
  );
}
