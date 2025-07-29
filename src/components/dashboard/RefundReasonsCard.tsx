import React from "react";
import BarChart from "@/components/charts/BarChart04";
import { reasonForRefundsChartData } from "@/constants/dashboard";
import { FadeIn } from "@/components/magicui/FadeIn";

function RefundReasonsCard() {
  return (
    <FadeIn className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-xs rounded-xl glassmorphism">
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
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-h-40">
        <BarChart
          data={reasonForRefundsChartData as any}
          width={595}
          height={150}
        />
      </div>
      <div className="px-5 pt-2 pb-6">
        <ul className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
          <li className="flex items-center py-1.5">
            <span
              className="block w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor: reasonForRefundsChartData.datasets[0]
                  .backgroundColorLegend[0] as string,
              }}
            ></span>
            <span>Having difficulties using the product</span>
            <span className="font-medium text-gray-800 dark:text-gray-100 ml-auto">
              {reasonForRefundsChartData.datasets[0].data[0]}%
            </span>
          </li>
          <li className="flex items-center py-1.5">
            <span
              className="block w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor: reasonForRefundsChartData.datasets[0]
                  .backgroundColorLegend[1] as string,
              }}
            ></span>
            <span>Missing features I need</span>
            <span className="font-medium text-gray-800 dark:text-gray-100 ml-auto">
              {reasonForRefundsChartData.datasets[0].data[1]}%
            </span>
          </li>
          <li className="flex items-center py-1.5">
            <span
              className="block w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor: reasonForRefundsChartData.datasets[0]
                  .backgroundColorLegend[2] as string,
              }}
            ></span>
            <span>Not satisfied about the quality of the product</span>
            <span className="font-medium text-gray-800 dark:text-gray-100 ml-auto">
              {reasonForRefundsChartData.datasets[0].data[2]}%
            </span>
          </li>
          <li className="flex items-center py-1.5">
            <span
              className="block w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor: reasonForRefundsChartData.datasets[0]
                  .backgroundColorLegend[3] as string,
              }}
            ></span>
            <span>The product doesn’t look as advertised</span>
            <span className="font-medium text-gray-800 dark:text-gray-100 ml-auto">
              {reasonForRefundsChartData.datasets[0].data[3]}%
            </span>
          </li>
          <li className="flex items-center py-1.5">
            <span
              className="block w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor: reasonForRefundsChartData.datasets[0]
                  .backgroundColorLegend[4] as string,
              }}
            ></span>
            <span>Other</span>
            <span className="font-medium text-gray-800 dark:text-gray-100 ml-auto">
              {reasonForRefundsChartData.datasets[0].data[4]}%
            </span>
          </li>
        </ul>
      </div>
    </FadeIn>
  );
}

export default RefundReasonsCard;
