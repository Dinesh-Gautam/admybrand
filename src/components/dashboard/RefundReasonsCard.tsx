import React from "react";
import BarChart from "@/components/charts/BarChart03";
import { reasonForRefundsChartData } from "@/constants/dashboard";

function RefundReasonsCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 shadow-xs rounded-xl glassmorphism">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Reason for Refunds
        </h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            449
          </div>
          <div className="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">
            -22%
          </div>
        </div>
      </div>
      <div className="grow">
        <BarChart
          data={reasonForRefundsChartData as any}
          width={595}
          height={48}
        />
      </div>
    </div>
  );
}

export default RefundReasonsCard;
