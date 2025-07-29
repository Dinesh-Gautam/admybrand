import React from "react";
import IncomeExpensesItem, {
  Transaction,
} from "@/components/dashboard/IncomeExpensesItem";
import { INCOME_EXPENSES_DATA } from "@/components/dashboard/IncomeExpensesData";

export default function IncomeExpenses() {
  return (
    <div className="p-3">
      <div>
        <header className="text-xs uppercase font-semibold p-2 header">
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
