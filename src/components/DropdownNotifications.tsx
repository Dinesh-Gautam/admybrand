import React from 'react';
import Link from 'next/link';
import {
  NOTIFICATION_DOT_BORDER,
  NOTIFICATION_DOT_COLOR,
  NOTIFICATION_DOT_SIZE,
} from '@/constants/styles';
import Transition from '@/utils/Transition';
import { useDropdown } from '@/hooks/useDropdown';
import { Notification } from '@/types';
import NotificationIcon from './icons/NotificationIcon';

interface DropdownNotificationsProps {
  align?: 'left' | 'right';
  notifications: Notification[];
}

/**
 * A dropdown component that displays a list of notifications.
 * @param align - The alignment of the dropdown menu.
 * @param notifications - An array of notification objects.
 */
function DropdownNotifications({
  align,
  notifications,
}: DropdownNotificationsProps) {
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
        <span className="sr-only">Notifications</span>
        <NotificationIcon className="fill-current text-gray-500/80 dark:text-gray-400/80" />
        <div
          className={`absolute top-0 right-0 rounded-full ${NOTIFICATION_DOT_SIZE} ${NOTIFICATION_DOT_COLOR} ${NOTIFICATION_DOT_BORDER}`}
        ></div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${
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
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pt-1.5 pb-2 px-4">
            Notifications
          </div>
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="border-b border-gray-200 dark:border-gray-700/60 last:border-0"
              >
                <Link
                  className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700/20"
                  href={notification.link}
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="block text-sm mb-2">
                    {notification.icon}{' '}
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {notification.title}
                    </span>{' '}
                    {notification.description}
                  </span>
                  <span className="block text-xs font-medium text-gray-400 dark:text-gray-500">
                    {notification.date}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownNotifications;
