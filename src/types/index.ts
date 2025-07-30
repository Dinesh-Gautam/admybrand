export interface FilterState {
  DirectIndirect: boolean;
  RealTimeValue: boolean;
  TopChannels: boolean;
  SalesRefunds: boolean;
  SalesOverTime: boolean;
  TopCountries: boolean;
  Customers: boolean;
  RecentActivity: boolean;
  IncomeExpenses: boolean;
  RefundReasons: boolean;
}

export interface Notification {
  id: string;
  icon: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

import { StaticImageData } from 'next/image';

export interface User {
  name: string;
  role: string;
  avatar: StaticImageData;
}
