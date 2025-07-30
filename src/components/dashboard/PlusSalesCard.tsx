import React from 'react';
import LineChart from '@/components/charts/LineChart01';
import { PlusChartData } from '@/constants/dashboard';
import DashboardCard from './DashboardCard';

function PlusSalesCard() {
  return (
    <DashboardCard
      title="Plus"
      sales="$24,780"
      percent="+49%"
      chart={<LineChart data={PlusChartData as any} width={389} height={128} />}
    />
  );
}

export default PlusSalesCard;
