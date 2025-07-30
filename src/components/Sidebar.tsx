'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import ExpandCollapseIcon from './icons/ExpandCollapseIcon';
import { SmartAlertsFeed } from './dashboard/SmartAlertsFeed';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import { useSidebar } from '@/context/SidebarContext';

interface SidebarProps {
  variant?: 'default' | 'v2';
}

const Sidebar = ({ variant = 'default' }: SidebarProps) => {
  const { sidebarOpen, setSidebarOpen, alertsOpen, setAlertsOpen } =
    useSidebar();
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement | null>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
      return storedSidebarExpanded === 'true';
    }
    return false;
  });

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [sidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.body.classList.add('sidebar-expanded');
    } else {
      document.body.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      <div
        className={`fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:w-64! shrink-0 p-4 transition-all duration-200 ease-in-out bg-transparent  ${
          sidebarOpen
            ? 'translate-x-0  bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl'
            : '-translate-x-64'
        } ${
          variant === 'v2'
            ? 'border-r border-gray-200 dark:border-gray-700/60 '
            : 'rounded-r-2xl shadow-xs '
        } `}
      >
        <SidebarHeader trigger={trigger} />
        <SidebarNav
          sidebarExpanded={sidebarExpanded}
          setSidebarExpanded={setSidebarExpanded}
          alertsOpen={alertsOpen}
          setAlertsOpen={setAlertsOpen}
        />

        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <ExpandCollapseIcon />
            </button>
          </div>
        </div>
      </div>
      {alertsOpen && (
        <div
          className="fixed inset-0 bg-gray-900/30 z-40 transition-opacity duration-200 lg:hidden"
          onClick={() => setAlertsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-xl max-w-full backdrop-blur-xl shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          alertsOpen
            ? 'translate-x-0 bg-white/60 dark:bg-gray-800/70'
            : 'translate-x-full bg-white/20 dark:bg-black/10'
        }`}
      >
        <SmartAlertsFeed onClose={() => setAlertsOpen(false)} />
      </div>
    </div>
  );
};

export default Sidebar;
