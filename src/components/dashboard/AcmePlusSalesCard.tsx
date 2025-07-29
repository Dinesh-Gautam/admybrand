import React from "react";
import LineChart from "@/components/charts/LineChart01";
import { acmePlusChartData } from "@/constants/dashboard";
import DashboardCard from "./DashboardCard";

function AcmePlusSalesCard() {
  return (
    <DashboardCard
      title="Acme Plus"
      sales="$24,780"
      percent="+49%"
      chart={
        <LineChart data={acmePlusChartData as any} width={389} height={128} />
      }
    />
  );
}

export default AcmePlusSalesCard;
