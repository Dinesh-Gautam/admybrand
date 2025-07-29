import React from "react";
import Tooltip from "../Tooltip";
import { chartAreaGradient } from "@/components/charts/ChartjsConfig";
import RealtimeChart from "@/components/charts/RealtimeChart";
import { realTimeChartData } from "@/constants/dashboard";
import useRealtimeChart from "@/hooks/useRealtimeChart";

// Import utilities
import { adjustColorOpacity, getCssVariable } from "@/utils/chart";

function DashboardCard05() {
  const { slicedData, slicedLabels } = useRealtimeChart(realTimeChartData);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      {
        data: slicedData,
        fill: true,
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          return chartAreaGradient(ctx, chartArea, [
            {
              stop: 0,
              color: adjustColorOpacity(
                getCssVariable("--color-violet-500"),
                0
              ),
            },
            {
              stop: 1,
              color: adjustColorOpacity(
                getCssVariable("--color-violet-500"),
                0.2
              ),
            },
          ]);
        },
        borderColor: getCssVariable("--color-violet-500"),
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable("--color-violet-500"),
        pointHoverBackgroundColor: getCssVariable("--color-violet-500"),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Real Time Value
        </h2>
        <Tooltip className="ml-2">
          <div className="text-xs text-center whitespace-nowrap">
            Built with{" "}
            <a
              className="underline"
              href="https://www.chartjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              Chart.js
            </a>
          </div>
        </Tooltip>
      </header>
      <RealtimeChart data={chartData as any} width={595} height={248} />
    </div>
  );
}

export default DashboardCard05;
