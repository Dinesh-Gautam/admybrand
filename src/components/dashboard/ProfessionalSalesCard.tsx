import React from 'react';
import LineChart from '@/components/charts/LineChart01';
import { ProfessionalChartData } from '@/constants/dashboard';
import DashboardCard from './DashboardCard';

function ProfessionalSalesCard() {
  return (
    <DashboardCard
      title="Professional"
      sales="$9,962"
      percent="+49%"
      chart={
        <LineChart
          data={ProfessionalChartData as any}
          width={389}
          height={128}
        />
      }
    />
  );
}

export default ProfessionalSalesCard;
