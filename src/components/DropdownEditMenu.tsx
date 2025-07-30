import React from 'react';
import Transition from '@/utils/Transition';
import { ReactNode } from 'react';
import { useDropdown } from '@/hooks/useDropdown';
import ThreeDotsIcon from './icons/ThreeDotsIcon';

interface DropdownEditMenuProps {
  children: ReactNode;
  align?: 'left' | 'right';
}

/**
 * A dropdown menu for editing actions.
 *
 * @param {DropdownEditMenuProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
function DropdownEditMenu({ children, align, ...rest }: DropdownEditMenuProps) {
  const { dropdownOpen, setDropdownOpen, trigger, dropdown } =
    useDropdown<HTMLUListElement>();

  return (
    <div className="relative" {...rest}>
      <button
        ref={trigger}
        className={`rounded-full ${
          dropdownOpen
            ? 'bg-gray-100 dark:bg-gray-700/60 text-gray-500 dark:text-gray-400'
            : 'text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Menu</span>
        <ThreeDotsIcon />
      </button>
      <Transition
        show={dropdownOpen}
        appear
        tag="div"
        className={`origin-top-right z-10 absolute top-full min-w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <ul
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          {children}
        </ul>
      </Transition>
    </div>
  );
}

export default DropdownEditMenu;
