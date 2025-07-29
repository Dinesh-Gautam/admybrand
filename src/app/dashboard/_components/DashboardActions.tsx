"use client";
import DatePickerWithRange from "@/components/Datepicker";
import DropdownFilter, { FilterState } from "@/components/DropdownFilter";
import DropdownExport from "@/components/DropdownExport";
import React from "react";

interface DashboardActionsProps {
  onFilterChange: (filters: FilterState) => void;
}

const DashboardActions = ({ onFilterChange }: DashboardActionsProps) => {
  return (
    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
      <DropdownFilter align="right" onFilterChange={onFilterChange} />
      <DatePickerWithRange align="end" />
      <DropdownExport />
    </div>
  );
};

export default DashboardActions;
