import React, { useState, useEffect } from 'react';
import Transition from '@/utils/Transition';
import { FilterState } from '@/types';
import { useDropdown } from '@/hooks/useDropdown';
import FilterIcon from './icons/FilterIcon';

const filterConfig = [
  { name: 'DirectIndirect', label: 'Direct VS Indirect' },
  { name: 'RealTimeValue', label: 'Real Time Value' },
  { name: 'TopChannels', label: 'Top Channels' },
  { name: 'SalesRefunds', label: 'Sales VS Refunds' },
  { name: 'SalesOverTime', label: 'Sales Over Time' },
  { name: 'TopCountries', label: 'Top Countries' },
  { name: 'Customers', label: 'Customers' },
  { name: 'RecentActivity', label: 'Recent Activity' },
  { name: 'IncomeExpenses', label: 'Income VS Expenses' },
  { name: 'RefundReasons', label: 'Refund Reasons' },
];

const initialFilterState: FilterState = {
  DirectIndirect: true,
  RealTimeValue: true,
  TopChannels: true,
  SalesRefunds: true,
  SalesOverTime: true,
  TopCountries: true,
  Customers: true,
  RecentActivity: true,
  IncomeExpenses: true,
  RefundReasons: true,
};

interface DropdownFilterProps {
  align?: 'left' | 'right';
  onFilterChange: (filters: FilterState) => void;
}

function DropdownFilter({ align, onFilterChange }: DropdownFilterProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const { dropdownOpen, setDropdownOpen, trigger, dropdown } =
    useDropdown<HTMLDivElement>();

  const handleClear = () => {
    const clearedFilters = Object.fromEntries(
      Object.keys(filters).map((key) => [key, false]),
    ) as unknown as FilterState;
    setFilters(clearedFilters);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn px-2.5 bg-white dark:bg-gray-800 border-gray-200 hover:border-gray-300 dark:border-gray-700/60 dark:hover:border-gray-600 text-gray-400 dark:text-gray-500 shadow-lg"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Filter</span>
        <wbr />
        <FilterIcon />
      </button>
      <Transition
        appear
        show={dropdownOpen}
        tag="div"
        className={`origin-top-right z-10 absolute top-full left-0 right-auto min-w-56 bg-white/50 backdrop-blur-md dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/60 pt-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${
          align === 'right'
            ? 'md:left-auto md:right-0'
            : 'md:left-0 md:right-auto'
        }`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown}>
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pt-1.5 pb-2 px-3">
            Filters
          </div>
          <ul className="mb-4">
            {filterConfig.map((filter) => (
              <li key={filter.name} className="py-1 px-3">
                <label className="flex items-center">
                  <input
                    name={filter.name}
                    checked={filters[filter.name as keyof FilterState]}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                    className="form-checkbox"
                  />
                  <span className="text-sm font-medium ml-2">
                    {filter.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <div className="py-2 px-3 border-t border-gray-200 dark:border-gray-700/60 bg-black/5 dark:bg-black/10">
            <ul className="flex items-center justify-between">
              <li>
                <button
                  onClick={handleClear}
                  className="btn-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-red-500"
                >
                  Clear
                </button>
              </li>
              <li>
                <button
                  className="btn-xs bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                  onClick={() => setDropdownOpen(false)}
                  onBlur={() => setDropdownOpen(false)}
                >
                  Apply
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFilter;
