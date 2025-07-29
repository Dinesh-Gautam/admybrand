import React from "react";
import IncomeExpensesItem, {
  Transaction,
} from "@/components/dashboard/IncomeExpensesItem";
import { INCOME_EXPENSES_DATA } from "@/components/dashboard/IncomeExpensesData";

export default function IncomeExpenses() {
  return (
    <div className="p-3">
      <div>
        <header className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs font-semibold p-2">
          Today
        </header>
        <ul className="my-1">
          {INCOME_EXPENSES_DATA.map((transaction) => (
            <IncomeExpensesItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
