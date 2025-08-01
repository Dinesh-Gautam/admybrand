import React from "react";
import DoughnutChart from "@/components/charts/DoughnutChart";
import { topCountriesChartData } from "@/constants/dashboard";
import { FadeIn } from "@/components/magicui/FadeIn";

function TopCountriesCard() {
  return (
    <FadeIn className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-xs rounded-xl glassmorphism">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Top Countries
        </h2>
      </header>
      <DoughnutChart
        data={topCountriesChartData as any}
        width={389}
        height={260}
      />
    </FadeIn>
  );
}

export default TopCountriesCard;
