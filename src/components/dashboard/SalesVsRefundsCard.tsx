import React from "react";
import Tooltip from "../Tooltip";
import BarChart from "@/components/charts/BarChart02";
import { salesVsRefundsChartData } from "@/constants/dashboard";

function SalesVsRefundsCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 shadow-xs rounded-xl glassmorphism">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Sales VS Refunds
        </h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">
            Sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit.
          </div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            +$6,796
          </div>
          <div className="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">
            -34%
          </div>
        </div>
      </div>
      <div className="grow">
        <BarChart
          data={salesVsRefundsChartData as any}
          width={595}
          height={248}
        />
      </div>
    </div>
  );
}

export default SalesVsRefundsCard;
