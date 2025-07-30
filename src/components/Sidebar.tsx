'use client';
import React, { useEffect } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { useSidebar } from '@/context/SidebarContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { cn } from '@/lib/utils';
import ExpandCollapseIcon from './icons/ExpandCollapseIcon';
import { SmartAlertsFeed } from './dashboard/SmartAlertsFeed';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';

const sidebarVariants = cva(
  'flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:w-64! shrink-0 p-4 transition-all duration-200 ease-in-out bg-transparent',
  {
    variants: {
      variant: {
        default: 'rounded-r-2xl shadow-xs',
        v2: 'border-r border-gray-200 dark:border-gray-700/60',
      },
      sidebarOpen: {
        true: 'translate-x-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl',
        false: '-translate-x-64',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface SidebarProps extends VariantProps<typeof sidebarVariants> {}

/**
 * Sidebar component that provides navigation and access to other features.
 * It can be collapsed or expanded, and its state is persisted in localStorage.
 * @param {SidebarProps} props - The props for the component.
 * @param {('default'|'v2')} [props.variant='default'] - The visual variant of the sidebar.
 */
const Sidebar = ({ variant }: SidebarProps) => {
  const { sidebarOpen, setAlertsOpen, alertsOpen, sidebar, trigger } =
    useSidebar();
  const [sidebarExpanded, setSidebarExpanded] = useLocalStorage(
    'sidebar-expanded',
    false,
  );

  useEffect(() => {
    document.body.classList.toggle('sidebar-expanded', sidebarExpanded);
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      <div
        className={cn(
          'fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200',
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={cn(sidebarVariants({ variant, sidebarOpen }))}
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
        className={cn(
          'fixed top-0 right-0 h-full w-xl max-w-full backdrop-blur-xl shadow-lg z-50 transform transition-transform duration-300 ease-in-out',
          alertsOpen
            ? 'translate-x-0 bg-white/60 dark:bg-gray-800/70'
            : 'translate-x-full bg-white/20 dark:bg-black/10',
        )}
      >
        <SmartAlertsFeed onClose={() => setAlertsOpen(false)} />
      </div>
    </div>
  );
};

export default Sidebar;
