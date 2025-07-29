import React, { ReactNode } from "react";
import Link from "next/link";
import EditMenu from "@/components/DropdownEditMenu";

interface DashboardCardProps {
  title: string;
  sales: string;
  percent: string;
  chart: ReactNode;
}

const DashboardCard = ({
  title,
  sales,
  percent,
  chart,
}: DashboardCardProps) => {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-xs rounded-xl glassmorphism">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {title}
          </h2>
          <EditMenu align="right">
            <li>
              <Link
                className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3"
                href="#0"
              >
                Option 1
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3"
                href="#0"
              >
                Option 2
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3"
                href="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Sales
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            {sales}
          </div>
          <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">
            {percent}
          </div>
        </div>
      </div>
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">{chart}</div>
    </div>
  );
};

export default DashboardCard;
