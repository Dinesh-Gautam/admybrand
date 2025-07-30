'use client';
import React from 'react';
import { MENU_ITEMS } from '@/constants/menu';
import { MenuItem } from '@/types';
import AiIcon from '@/components/icons/AiIcon';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarSubMenu from './SidebarSubMenu';

interface SidebarNavProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  alertsOpen: boolean;
  setAlertsOpen: (open: boolean) => void;
  menuConfig?: MenuItem[];
}

/**
 * Renders the navigation menu in the sidebar.
 * @param {SidebarNavProps} props - The props for the component.
 * @param {boolean} props.sidebarExpanded - Whether the sidebar is currently expanded.
 * @param {function} props.setSidebarExpanded - Function to set the sidebar's expanded state.
 * @param {boolean} props.alertsOpen - Whether the alerts panel is open.
 * @param {function} props.setAlertsOpen - Function to set the alerts panel's open state.
 * @param {MenuItem[]} [props.menuConfig=MENU_ITEMS] - The configuration for the menu items.
 */
const SidebarNav = ({
  sidebarExpanded,
  setSidebarExpanded,
  alertsOpen,
  setAlertsOpen,
  menuConfig = MENU_ITEMS,
}: SidebarNavProps) => {
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
          {menuConfig.map((item) =>
            item.submenu ? (
              <SidebarSubMenu
                key={item.label}
                item={item}
                setSidebarExpanded={setSidebarExpanded}
              />
            ) : (
              <SidebarMenuItem key={item.label} item={item} />
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
