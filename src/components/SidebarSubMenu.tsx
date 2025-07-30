'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import SidebarLinkGroup from './SidebarLinkGroup';
import SidebarLink from './SidebarLink';
import { MenuItem } from '@/types';

interface SidebarSubMenuProps {
  item: MenuItem;
  setSidebarExpanded: (expanded: boolean) => void;
}

const SidebarSubMenu: React.FC<SidebarSubMenuProps> = ({
  item,
  setSidebarExpanded,
}) => {
  const pathname = usePathname();
  const isActive = pathname.includes(item.path);

  const handleSubmenuClick = (handleClick: () => void) => {
    handleClick();
    setSidebarExpanded(true);
  };

  return (
    <SidebarLinkGroup isActive={isActive}>
      {(handleClick, open) => (
        <React.Fragment>
          <button
            className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
              isActive ? '' : 'hover:text-gray-900 dark:hover:text-white'
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
                    isActive
                      ? 'text-violet-500'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                />
                <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  {item.label}
                </span>
              </div>
              <div
                className={`flex shrink-0 ml-2 items-center transition-all ${
                  open && 'rotate-180'
                }`}
              >
                <ChevronDown size={16} />
              </div>
            </div>
          </button>
          <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
            <ul className={`pl-8 mt-1 ${!open && 'hidden'}`}>
              {item.submenu?.map((subItem) => (
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
      )}
    </SidebarLinkGroup>
  );
};

export default SidebarSubMenu;
