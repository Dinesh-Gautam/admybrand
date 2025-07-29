"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { MENU_ITEMS } from "@/constants/menu";
import SidebarLink from "./SidebarLink";
import { ChevronDown } from "lucide-react";
import CloseIcon from "./icons/CloseIcon";
import Logo from "./icons/Logo";
import ExpandCollapseIcon from "./icons/ExpandCollapseIcon";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  variant?: "default" | "v2";
}

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  variant = "default",
}: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(() => {
    if (typeof window !== "undefined") {
      const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
      return storedSidebarExpanded === "true";
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
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.body.classList.add("sidebar-expanded");
    } else {
      document.body.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const handleSubmenuClick = (handleClick: () => void) => {
    handleClick();
    setSidebarExpanded(true);
  };

  const renderSubmenu = (item: any, handleClick: () => void, open: boolean) => (
    <React.Fragment>
      <button
        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
          pathname.includes(item.path)
            ? ""
            : "hover:text-gray-900 dark:hover:text-white"
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
                  ? "text-violet-500"
                  : "text-gray-400 dark:text-gray-500"
              }`}
            />
            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {item.label}
            </span>
          </div>
          <div
            className={`flex shrink-0 ml-2 items-center mt-1 transition-all ${
              open && "rotate-180"
            }`}
          >
            <ChevronDown size={16} />
          </div>
        </div>
      </button>
      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
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
        "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
      }`}
    >
      <SidebarLink href={item.path}>
        <div className="flex items-center justify-between">
          <div className="grow flex items-center">
            <item.icon
              className={`shrink-0 fill-current ${
                pathname.includes(item.path)
                  ? "text-violet-500"
                  : "text-gray-400 dark:text-gray-500"
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
    <div className="min-w-fit">
      <div
        className={`fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:w-64! shrink-0 p-4 transition-all duration-200 ease-in-out bg-transparent  ${
          sidebarOpen
            ? "translate-x-0  !bg-white/70 backdrop-blur-xl"
            : "-translate-x-64 "
        } ${
          variant === "v2"
            ? "border-r border-gray-200 dark:border-gray-700/60 "
            : "rounded-r-2xl shadow-xs "
        } `}
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <CloseIcon />
          </button>
          <Link href="/" className="block">
            <Logo />
          </Link>
        </div>

        <div className="space-y-8">
          <div>
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
            <ul className="mt-3">
              {MENU_ITEMS.map((item) =>
                item.submenu ? (
                  <SidebarLinkGroup
                    key={item.label}
                    activecondition={pathname.includes(item.path)}
                  >
                    {(handleClick, open) =>
                      renderSubmenu(item, handleClick, open)
                    }
                  </SidebarLinkGroup>
                ) : (
                  renderMenuItem(item)
                )
              )}
            </ul>
          </div>
        </div>

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
    </div>
  );
};

export default Sidebar;
