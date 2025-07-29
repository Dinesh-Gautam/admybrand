"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import DashboardHeader from "./_components/DashboardHeader";
import DashboardActions from "./_components/DashboardActions";
import DashboardCardGrid from "./_components/DashboardCardGrid";
import { FilterState } from "@/components/DropdownFilter";
import AiInsightSummaryCard from "@/components/dashboard/AiInsightSummaryCard";

export default function Dashboard() {
  const [alerOtsOpen, setAlertsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      <Sidebar
        alertsOpen={alerOtsOpen}
        setAlertsOpen={setAlertsOpen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header
          alertsOpen={alerOtsOpen}
          setAlertsOpen={setAlertsOpen}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

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
