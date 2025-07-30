'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import SidebarLink from './SidebarLink';
import { MenuItem } from '@/types';

interface SidebarMenuItemProps {
  item: MenuItem;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(item.path);

  return (
    <li
      className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-linear-to-r ${
        isActive &&
        'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
      }`}
    >
      <SidebarLink href={item.path}>
        <div className="flex items-center justify-between">
          <div className="grow flex items-center">
            <item.icon
              className={`shrink-0 fill-current ${
                isActive
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
};

export default SidebarMenuItem;
