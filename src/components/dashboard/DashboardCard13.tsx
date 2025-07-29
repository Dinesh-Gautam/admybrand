import React from "react";
import IncomeExpenses from "./IncomeExpenses";

function DashboardCard13() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Income/Expenses
        </h2>
      </header>
      <IncomeExpenses />
    </div>
  );
}

export default DashboardCard13;
