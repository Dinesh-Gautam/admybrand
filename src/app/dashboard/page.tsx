"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import DashboardHeader from "./_components/DashboardHeader";
import DashboardActions from "./_components/DashboardActions";
import DashboardCardGrid from "./_components/DashboardCardGrid";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <DashboardHeader />
              <DashboardActions />
            </div>
            <DashboardCardGrid />
          </div>
        </main>
      </div>
    </div>
  );
}
