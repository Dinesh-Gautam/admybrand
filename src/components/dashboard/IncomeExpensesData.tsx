import {
  Transaction,
  TransactionType,
} from "@/components/dashboard/IncomeExpensesItem";

export const INCOME_EXPENSES_DATA: Transaction[] = [
  {
    id: "1",
    type: TransactionType.Expense,
    name: "Qonto",
    description: "billing",
    amount: -49.88,
    time: "2024-07-29T10:00:00Z",
  },
  {
    id: "2",
    type: TransactionType.Income,
    name: "ADmyBRAND",
    description: "Market Ltd 70 Wilson St London",
    amount: 249.88,
    time: "2024-07-29T09:30:00Z",
  },
  {
    id: "3",
    type: TransactionType.Income,
    name: "Notion Labs Inc",
    description: "",
    amount: 99.99,
    time: "2024-07-29T08:00:00Z",
  },
  {
    id: "4",
    type: TransactionType.Income,
    name: "Market Cap Ltd",
    description: "",
    amount: 1200.88,
    time: "2024-07-29T07:45:00Z",
  },
  {
    id: "5",
    type: TransactionType.Canceled,
    name: "App.com",
    description: "Market Ltd 70 Wilson St London",
    amount: 99.99,
    time: "2024-07-29T07:00:00Z",
  },
  {
    id: "6",
    type: TransactionType.Expense,
    name: "App.com",
    description: "Market Ltd 70 Wilson St London",
    amount: -49.88,
    time: "2024-07-29T06:45:00Z",
  },
];
