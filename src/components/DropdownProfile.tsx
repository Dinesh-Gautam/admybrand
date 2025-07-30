import React from 'react';
import Link from 'next/link';
import Transition from '@/utils/Transition';
import Image from 'next/image';
import { useDropdown } from '@/hooks/useDropdown';
import { User } from '@/types';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface DropdownProfileProps {
  align?: 'left' | 'right';
  user: User;
}

/**
 * A dropdown component that displays user profile information and links.
 * @param align - The alignment of the dropdown menu.
 * @param user - An object containing user information.
 */
function DropdownProfile({ align, user }: DropdownProfileProps) {
  const { dropdownOpen, setDropdownOpen, trigger, dropdown } =
    useDropdown<HTMLDivElement>();

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <Image
          className="w-8 h-8 rounded-full"
          src={user.avatar}
          width="32"
          height="32"
          alt={user.name}
        />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium text-gray-600 dark:text-gray-100 group-hover:text-gray-800 dark:group-hover:text-white">
            {user.name}
          </span>
          <ChevronDownIcon className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500" />
        </div>
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
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200 dark:border-gray-700/60">
            <div className="font-medium text-gray-800 dark:text-gray-100">
              {user.name}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 italic">
              {user.role}
            </div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 flex items-center py-1 px-3"
                href="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 flex items-center py-1 px-3"
                href="/signin"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownProfile;
