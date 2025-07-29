import DashboardCard01 from "@/components/dashboard/DashboardCard01";
import DashboardCard02 from "@/components/dashboard/DashboardCard02";
import DashboardCard03 from "@/components/dashboard/DashboardCard03";
import DashboardCard04 from "@/components/dashboard/DashboardCard04";
import DashboardCard05 from "@/components/dashboard/DashboardCard05";
import DashboardCard06 from "@/components/dashboard/DashboardCard06";
import DashboardCard07 from "@/components/dashboard/DashboardCard07";
import DashboardCard08 from "@/components/dashboard/DashboardCard08";
import DashboardCard09 from "@/components/dashboard/DashboardCard09";
import DashboardCard10 from "@/components/dashboard/DashboardCard10";
import DashboardCard11 from "@/components/dashboard/DashboardCard11";
import DashboardCard12 from "@/components/dashboard/DashboardCard12";
import DashboardCard13 from "@/components/dashboard/DashboardCard13";
import React from "react";

const DashboardCardGrid = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <DashboardCard01 />
      <DashboardCard02 />
      <DashboardCard03 />
      <DashboardCard04 />
      <DashboardCard05 />
      <DashboardCard06 />
      <DashboardCard07 />
      <DashboardCard08 />
      <DashboardCard09 />
      <DashboardCard10 />
      <DashboardCard11 />
      <DashboardCard12 />
      <DashboardCard13 />
    </div>
  );
};

export default DashboardCardGrid;
