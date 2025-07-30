import React, { useState } from 'react';
import Transition from '@/utils/Transition';
import { useDropdown } from '@/hooks/useDropdown';
import CalendarIcon from './icons/CalendarIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import CheckIcon from './icons/CheckIcon';

const options: {
  id: number;
  period: string;
}[] = [
  {
    id: 0,
    period: 'Today',
  },
  {
    id: 1,
    period: 'Last 7 Days',
  },
  {
    id: 2,
    period: 'Last Month',
  },
  {
    id: 3,
    period: 'Last 12 Months',
  },
  {
    id: 4,
    period: 'All Time',
  },
];

const INITIAL_SELECTED_OPTION_ID = 2;

/**
 * Renders a date selection dropdown component.
 *
 * @returns The rendered date selection dropdown component.
 */
function DateSelect() {
  const [selected, setSelected] = useState(INITIAL_SELECTED_OPTION_ID);
  const { dropdownOpen, setDropdownOpen, trigger, dropdown } =
    useDropdown<HTMLDivElement>();

  return (
    <div className="relative">
      <button
        ref={trigger}
        className="btn justify-between min-w-44 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        aria-label="Select date range"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="flex items-center">
          <CalendarIcon />
          <span>{options[selected].period}</span>
        </span>
        <ChevronDownIcon />
      </button>
      <Transition
        show={dropdownOpen}
        appear
        tag="div"
        className="z-10 absolute top-full right-0 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1"
        enter="transition ease-out duration-100 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          className="font-medium text-sm text-gray-600 dark:text-gray-300"
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          {options.map((option) => {
            return (
              <button
                key={option.id}
                tabIndex={0}
                className={`flex items-center w-full hover:bg-gray-50 dark:hover:bg-gray-700/20 py-1 px-3 cursor-pointer ${
                  option.id === selected && 'text-violet-500'
                }`}
                onClick={() => {
                  setSelected(option.id);
                  setDropdownOpen(false);
                }}
              >
                <CheckIcon
                  className={option.id !== selected ? 'invisible' : ''}
                />
                <span>{option.period}</span>
              </button>
            );
          })}
        </div>
      </Transition>
    </div>
  );
}

export default DateSelect;
