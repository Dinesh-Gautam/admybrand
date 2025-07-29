import React from "react";
import LineChart from "@/components/charts/LineChart02";
import { salesOverTimeChartData } from "@/constants/dashboard";
import { FadeIn } from "@/components/magicui/FadeIn";

function SalesOverTimeCard() {
  return (
    <FadeIn className="flex flex-col col-span-full sm:col-span-6 shadow-xs rounded-xl glassmorphism">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Sales Over Time
        </h2>
      </header>
      <LineChart
        data={salesOverTimeChartData as any}
        width={595}
        height={248}
      />
    </FadeIn>
  );
}

export default SalesOverTimeCard;
