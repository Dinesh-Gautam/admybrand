import React from 'react';
import LineChart from '@/components/charts/LineChart01';
import { AdvancedChartData } from '@/constants/dashboard';
import DashboardCard from './DashboardCard';

function AdvancedSalesCard() {
  return (
    <DashboardCard
      title="Advanced"
      sales="$17,489"
      percent="-14%"
      chart={
        <LineChart data={AdvancedChartData as any} width={389} height={128} />
      }
    />
  );
}

export default AdvancedSalesCard;
