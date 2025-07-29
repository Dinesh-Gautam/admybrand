import DropdownHelp from "@/components/DropdownHelp";
import DropdownNotifications from "@/components/DropdownNotifications";
import DropdownProfile from "@/components/DropdownProfile";
import ModalSearch from "@/components/ModalSearch";
import ThemeToggle from "@/components/ThemeToggle";
import React, { useState } from "react";
import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import AiIcon from "@/components/icons/AiIcon";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  variant?: "default" | "v2" | "v3";
  alertsOpen: boolean;
  setAlertsOpen: (open: boolean) => void;
}

const Header = ({
  sidebarOpen,
  setSidebarOpen,
  variant = "default",
  alertsOpen,
  setAlertsOpen,
}: HeaderProps) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleSidebarToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  const openSearchModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSearchModalOpen(true);
  };

  const getHeaderClassName = () => {
    const baseClasses =
      "sticky top-0 before:absolute before:inset-0 before:-z-10 z-30 backdrop-blur-xl border-b-1 border-gray-600/10";
    const variantClasses = {
      default: "max-lg:shadow-xs",
      v2: "before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10 dark:before:bg-gray-800",
      v3: "before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10 dark:before:bg-gray-900",
    };
    return `${baseClasses} ${variantClasses[variant] || ""}`;
  };

  const getContainerClassName = () => {
    const baseClasses = "flex items-center justify-between h-16";
    const variantClasses = {
      default: "",
      v2: "",
      v3: "",
    };
    return `${baseClasses} ${variantClasses[variant] || ""}`;
  };

  return (
    <header className={`${getHeaderClassName()} `}>
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className={getContainerClassName()}>
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
              className="hidden sm:flex w-fit text-left hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 px-4 py-1 pl-3 rounded-lg"
              onClick={() => setAlertsOpen(!alertsOpen)}
            >
              <div className="flex items-center w-fit ">
                <AiIcon className="mt-0.5" />
                <span className="text-sm font-medium ml-2 relative">
                  Smart Alerts
                  <div className="absolute top-0 -right-2 h-2 w-2 border-2 border-white bg-red-500 rounded-full"></div>
                </span>
              </div>
            </button>

            {/* <DropdownNotifications align="right" /> */}
            <DropdownHelp align="right" />
            <ThemeToggle />
            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700 border-none" />
            <DropdownProfile align="right" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
