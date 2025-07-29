import React from "react";
import LineChart from "@/components/charts/LineChart01";
import { acmeProfessionalChartData } from "@/constants/dashboard";
import DashboardCard from "./DashboardCard";

function AcmeProfessionalSalesCard() {
  return (
    <DashboardCard
      title="Acme Professional"
      sales="$9,962"
      percent="+49%"
      chart={
        <LineChart
          data={acmeProfessionalChartData as any}
          width={389}
          height={128}
        />
      }
    />
  );
}

export default AcmeProfessionalSalesCard;
