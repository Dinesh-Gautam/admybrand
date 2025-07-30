import React from 'react';
import Link from 'next/link';
import Transition from '@/utils/Transition';
import { useDropdown } from '@/hooks/useDropdown';
import HelpIcon from './icons/HelpIcon';
import DocumentationIcon from './icons/DocumentationIcon';
import SupportIcon from './icons/SupportIcon';
import ContactIcon from './icons/ContactIcon';

interface DropdownHelpProps {
  align?: 'left' | 'right';
}

/**
 * A dropdown component that provides help and support links.
 * @param align - The alignment of the dropdown menu.
 */
function DropdownHelp({ align }: DropdownHelpProps) {
  const { dropdownOpen, setDropdownOpen, trigger, dropdown } =
    useDropdown<HTMLDivElement>();

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ${
          dropdownOpen && 'bg-gray-200 dark:bg-gray-800'
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Need help?</span>
        <HelpIcon className="fill-current text-gray-500/80 dark:text-gray-400/80" />
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        show={dropdownOpen}
        appear
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pt-1.5 pb-2 px-3">
            Need help?
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 flex items-center py-1 px-3"
                href="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <DocumentationIcon className="w-3 h-3 fill-current text-violet-500 shrink-0 mr-2" />
                <span>Documentation</span>
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 flex items-center py-1 px-3"
                href="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <SupportIcon className="w-3 h-3 fill-current text-violet-500 shrink-0 mr-2" />
                <span>Support Site</span>
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 flex items-center py-1 px-3"
                href="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <ContactIcon className="w-3 h-3 fill-current text-violet-500 shrink-0 mr-2" />
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownHelp;
