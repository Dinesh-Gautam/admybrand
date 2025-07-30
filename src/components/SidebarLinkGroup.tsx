'use client';

import React, { useState } from 'react';

/**
 * Props for the SidebarLinkGroup component.
 * @property {Function} children - A render prop that receives a handleClick function and an open state.
 * @property {boolean} isActive - Whether the link group is currently active.
 */
interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => React.ReactNode;
  isActive: boolean;
}

/**
 * A component that groups sidebar links and provides a collapsible container.
 * It uses a render prop to pass down the click handler and open state to its children.
 * @param {SidebarLinkGroupProps} props - The props for the component.
 */
const SidebarLinkGroup: React.FC<SidebarLinkGroupProps> = ({
  children,
  isActive,
}) => {
  const [open, setOpen] = useState(isActive);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li
      className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-linear-to-r ${
        isActive &&
        'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
      }`}
    >
      {children(handleClick, open)}
    </li>
  );
};

export default SidebarLinkGroup;
