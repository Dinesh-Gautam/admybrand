import React from "react";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "@/components/icons";

export enum TransactionType {
  Income,
  Expense,
  Canceled,
}

export interface Transaction {
  id: string;
  type: TransactionType;
  name: string;
  description: string;
  amount: number;
  time: string;
}

const ICONS_MAP = {
  [TransactionType.Income]: ArrowRightIcon,
  [TransactionType.Expense]: ArrowLeftIcon,
  [TransactionType.Canceled]: CloseIcon,
};

const BG_COLOR_MAP = {
  [TransactionType.Income]: "bg-green-500",
  [TransactionType.Expense]: "bg-red-500",
  [TransactionType.Canceled]: "bg-gray-200",
};

const TEXT_COLOR_MAP = {
  [TransactionType.Income]: "text-green-600",
  [TransactionType.Expense]: "text-gray-800 dark:text-gray-100",
  [TransactionType.Canceled]: "text-gray-800 dark:text-gray-100 line-through",
};

export default function IncomeExpensesItem({
  transaction,
}: {
  transaction: Transaction;
}) {
  const { type, name, description, amount } = transaction;
  const Icon = ICONS_MAP[type];
  const bgColor = BG_COLOR_MAP[type];
  const textColor = TEXT_COLOR_MAP[type];

  return (
    <li className="flex px-2">
      <div
        className={`w-9 h-9 rounded-full shrink-0 my-2 mr-3 flex items-center justify-center ${bgColor}`}
      >
        <Icon
          className={`w-5 h-5 fill-current ${
            type === TransactionType.Canceled ? "text-gray-400" : "text-white"
          }`}
        />
      </div>
      <div className="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
        <div className="grow flex justify-between">
          <div className="self-center">
            <a
              className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
              href="#0"
            >
              {name}
            </a>{" "}
            {description}
          </div>
          <div className="shrink-0 self-start ml-2">
            <span className={`font-medium ${textColor}`}>
              {amount > 0 ? "+" : ""}
              {amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
