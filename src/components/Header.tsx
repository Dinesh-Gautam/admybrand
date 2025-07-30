import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import DropdownHelp from '@/components/DropdownHelp';
import DropdownProfile from '@/components/DropdownProfile';
import ThemeToggle from '@/components/ThemeToggle';
import { useSidebar } from '@/context/SidebarContext';
import HamburgerIcon from './icons/HamburgerIcon';
import Logo from '@/images/logo.png';
import AiIcon from '@/components/icons/AiIcon';

const headerVariants = cva(
  'sticky top-0 before:absolute before:inset-0 before:-z-10 z-30 backdrop-blur-xl border-b-1 border-gray-600/10',
  {
    variants: {
      variant: {
        default: 'max-lg:shadow-xs',
        v2: 'before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10 dark:before:bg-gray-800',
        v3: 'before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10 dark:before:bg-gray-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const containerVariants = cva('flex items-center justify-between h-16', {
  variants: {
    variant: {
      default: '',
      v2: '',
      v3: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface HeaderProps extends VariantProps<typeof headerVariants> {
  smartAlerts?: React.ReactNode;
}

/**
 * The main header component for the application.
 * @param variant - The visual variant of the header.
 * @param smartAlerts - An optional component to render for smart alerts.
 */
const Header = ({ variant, smartAlerts }: HeaderProps) => {
  const { sidebarOpen, setSidebarOpen, alertsOpen, setAlertsOpen } =
    useSidebar();

  const handleSidebarToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className={headerVariants({ variant })}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={containerVariants({ variant })}>
          <div className="flex">
            <button
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={handleSidebarToggle}
            >
              <span className="sr-only">Open sidebar</span>
              <HamburgerIcon />
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button
              className="hidden sm:flex w-fit text-left hover:bg-white/50 dark:hover:bg-gray-800/50 px-4 py-1 pl-3 rounded-lg"
              onClick={() => setAlertsOpen(!alertsOpen)}
            >
              <div className="flex items-center w-fit ">
                <AiIcon className="mt-0.5" />
                <span className="text-sm font-medium ml-2 relative">
                  Smart Alerts
                  <div className="absolute top-0 -right-2 h-2 w-2 bg-red-500 rounded-full"></div>
                </span>
              </div>
            </button>

            {/* <DropdownNotifications align="right" /> */}
            <DropdownHelp align="right" />
            <ThemeToggle />
            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700 border-none" />
            <DropdownProfile
              user={{
                name: 'ADmyBrand',
                avatar: Logo,
                role: 'Admin',
                email: 'admin@admybrand.com',
                image: '',
              }}
              align="right"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
