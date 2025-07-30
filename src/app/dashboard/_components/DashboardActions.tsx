'use client';
import DatePickerWithRange from '@/components/Datepicker';
import DropdownFilter from '@/components/DropdownFilter';
import DropdownExport from '@/components/DropdownExport';
import React from 'react';
import type { FilterState } from '@/types';

interface DashboardActionsProps {
  onFilterChange: (filters: FilterState) => void;
}

const MOCK_AI_SUMMARY = `AI Summary: Key Insights for This Period - Overall sales show a 12% increase this month. The 'Google'
channel is the top performer, and we predict a 5% growth in new customers next quarter.`;

const DashboardActions = ({ onFilterChange }: DashboardActionsProps) => {
  return (
    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
      <DropdownFilter align="right" onFilterChange={onFilterChange} />
      <DatePickerWithRange align="end" />
      <DropdownExport aiSummary={MOCK_AI_SUMMARY} />
    </div>
  );
};

export default DashboardActions;
