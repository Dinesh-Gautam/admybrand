"use client";
import DatePickerWithRange from "@/components/Datepicker";
import DropdownFilter, { FilterState } from "@/components/DropdownFilter";
import PlusIcon from "@/components/icons/PlusIcon";
import React from "react";

interface DashboardActionsProps {
  onFilterChange: (filters: FilterState) => void;
}

const DashboardActions = ({ onFilterChange }: DashboardActionsProps) => {
  return (
    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
      <DropdownFilter align="right" onFilterChange={onFilterChange} />
      <DatePickerWithRange align="end" />
      <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
        <PlusIcon />
        <span className="max-xs:sr-only">Add View</span>
      </button>
    </div>
  );
};

export default DashboardActions;
