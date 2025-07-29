import React, { useState, useRef, useEffect } from "react";
import Transition from "@/utils/Transition";

export interface FilterState {
  DirectorIndirect: boolean;
  RealTimeValue: boolean;
  Topcahnnels: boolean;
  SalesRefunds: boolean;
  SalesOverTime: boolean;
  TopCountries: boolean;
  Customers: boolean;
  RecentActivity: boolean;
  IncomeExpenses: boolean;
  RefundReasons: boolean;
}

interface DropdownFilterProps {
  align?: "left" | "right";
  onFilterChange: (filters: FilterState) => void;
}

function DropdownFilter({ align, onFilterChange }: DropdownFilterProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    DirectorIndirect: true,
    RealTimeValue: true,
    Topcahnnels: true,
    SalesRefunds: true,
    SalesOverTime: true,
    TopCountries: true,
    Customers: true,
    RecentActivity: true,
    IncomeExpenses: true,
    RefundReasons: true,
  });

  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  const handleClear = () => {
    setFilters({
      DirectorIndirect: false,
      RealTimeValue: false,
      Topcahnnels: false,
      SalesRefunds: false,
      SalesOverTime: false,
      TopCountries: false,
      Customers: false,
      RecentActivity: false,
      IncomeExpenses: false,
      RefundReasons: false,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target as Node) ||
        trigger.current?.contains(target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn px-2.5 bg-white dark:bg-gray-800 border-gray-200 hover:border-gray-300 dark:border-gray-700/60 dark:hover:border-gray-600 text-gray-400 dark:text-gray-500"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Filter</span>
        <wbr />
        <svg
          className="fill-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM3 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM7 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z" />
        </svg>
      </button>
      <Transition
        appear
        show={dropdownOpen}
        tag="div"
        className={`origin-top-right z-10 absolute top-full left-0 right-auto min-w-56 bg-white/50 backdrop-blur-md dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/60 pt-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${
          align === "right"
            ? "md:left-auto md:right-0"
            : "md:left-0 md:right-auto"
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
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="DirectorIndirect"
                  checked={filters.DirectorIndirect}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">
                  Direct VS Indirect
                </span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="RealTimeValue"
                  checked={filters.RealTimeValue}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">
                  Real Time Value
                </span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="Topcahnnels"
                  checked={filters.Topcahnnels}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">Top Channels</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="SalesRefunds"
                  checked={filters.SalesRefunds}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">
                  Sales VS Refunds
                </span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="SalesOverTime"
                  checked={filters.SalesOverTime}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">
                  Sales Over Time
                </span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="TopCountries"
                  checked={filters.TopCountries}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">Top Countries</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="Customers"
                  checked={filters.Customers}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">Customers</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="RecentActivity"
                  checked={filters.RecentActivity}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">
                  Recent Activity
                </span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="IncomeExpenses"
                  checked={filters.IncomeExpenses}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">
                  Income VS Expenses
                </span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input
                  name="RefundReasons"
                  checked={filters.RefundReasons}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="text-sm font-medium ml-2">Refund Reasons</span>
              </label>
            </li>
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
