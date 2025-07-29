import React from "react";
import LineChart from "@/components/charts/LineChart01";
import { acmeAdvancedChartData } from "@/constants/dashboard";
import DashboardCard from "./DashboardCard";

function DashboardCard02() {
  return (
    <DashboardCard
      title="Acme Advanced"
      sales="$17,489"
      percent="-14%"
      chart={
        <LineChart
          data={acmeAdvancedChartData as any}
          width={389}
          height={128}
        />
      }
    />
  );
}

export default DashboardCard02;
