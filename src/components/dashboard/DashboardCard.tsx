import React, { ReactNode } from 'react';
import Link from 'next/link';
import EditMenu from '@/components/DropdownEditMenu';
import { NumberTicker } from '@/components/ui/number-ticker';
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  Card,
} from '@/components/ui/Card';

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
  const SalesValue = Number(sales.replace(/[^0-9]/g, ''));

  return (
    <Card className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-xs rounded-xl glassmorphism">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
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
          </EditMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Sales
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            $
            <NumberTicker
              startValue={Math.round(SalesValue / 1.2)}
              value={SalesValue}
            />
          </div>
          <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">
            {percent}
          </div>
        </div>
      </CardContent>
      <CardFooter className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {chart}
      </CardFooter>
    </Card>
  );
};

export default DashboardCard;
