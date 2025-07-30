'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import SidebarLinkGroup from './SidebarLinkGroup';
import { MENU_ITEMS } from '@/constants/menu';
import SidebarLink from './SidebarLink';
import { ChevronDown } from 'lucide-react';
import AiIcon from '@/components/icons/AiIcon';

interface SidebarNavProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  alertsOpen: boolean;
  setAlertsOpen: (open: boolean) => void;
}

const SidebarNav = ({
  sidebarExpanded,
  setSidebarExpanded,
  alertsOpen,
  setAlertsOpen,
}: SidebarNavProps) => {
  const pathname = usePathname();

  const handleSubmenuClick = (handleClick: () => void) => {
    handleClick();
    setSidebarExpanded(true);
  };

  const renderSubmenu = (item: any, handleClick: () => void, open: boolean) => (
    <React.Fragment>
      <button
        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
          pathname.includes(item.path)
            ? ''
            : 'hover:text-gray-900 dark:hover:text-white'
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleSubmenuClick(handleClick);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <item.icon
              className={`shrink-0 fill-current ${
                pathname.includes(item.path)
                  ? 'text-violet-500'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            />
            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {item.label}
            </span>
          </div>
          <div
            className={`flex shrink-0 ml-2 items-center mt-1 transition-all ${
              open && 'rotate-180'
            }`}
          >
            <ChevronDown size={16} />
          </div>
        </div>
      </button>
      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-8 mt-1 ${!open && 'hidden'}`}>
          {item.submenu.map((subItem: any) => (
            <li key={subItem.label} className="mb-1 last:mb-0">
              <SidebarLink href={subItem.path}>
                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  {subItem.label}
                </span>
              </SidebarLink>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );

  const renderMenuItem = (item: any) => (
    <li
      key={item.label}
      className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-linear-to-r ${
        pathname.includes(item.path) &&
        'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
      }`}
    >
      <SidebarLink href={item.path}>
        <div className="flex items-center justify-between">
          <div className="grow flex items-center">
            <item.icon
              className={`shrink-0 fill-current ${
                pathname.includes(item.path)
                  ? 'text-violet-500'
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            />
            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {item.label}
            </span>
          </div>
          {item.badge && (
            <div className="flex shrink-0 ml-2">
              <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-violet-400 px-2 rounded-full">
                {item.badge}
              </span>
            </div>
          )}
        </div>
      </SidebarLink>
    </li>
  );

  return (
    <div className="space-y-8 flex-1">
      <div className="h-full">
        <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
          <span
            className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
            aria-hidden="true"
          >
            •••
          </span>
          <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
            Pages
          </span>
        </h3>
        <ul className="mt-3 h-full">
          {MENU_ITEMS.map((item) =>
            item.submenu ? (
              <SidebarLinkGroup
                key={item.label}
                activecondition={pathname.includes(item.path)}
              >
                {(handleClick, open) => renderSubmenu(item, handleClick, open)}
              </SidebarLinkGroup>
            ) : (
              renderMenuItem(item)
            ),
          )}
          <button
            onClick={() => setAlertsOpen(!alertsOpen)}
            className={`sm:opacity-0 sm:pointer-events-none pl-4 w-full pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-linear-to-r hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800/50`}
          >
            <div className="flex items-center justify-between">
              <div className="grow flex items-center">
                <AiIcon className="mt-0.5" />
                <span className="text-sm font-medium ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Smart Alerts
                </span>
              </div>
            </div>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SidebarNav;
