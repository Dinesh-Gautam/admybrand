'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Props for the SidebarLink component.
 * @property {string} href - The URL to link to.
 * @property {React.ReactNode} children - The content to display inside the link.
 */
interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}

/**
 * A link component for the sidebar that highlights itself when the current URL matches its href.
 * @param {SidebarLinkProps} props - The props for the component.
 */
const SidebarLink: React.FC<SidebarLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block transition duration-150 truncate ${
        isActive
          ? 'text-violet-500'
          : 'text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
      }`}
    >
      {children}
    </Link>
  );
};

export default SidebarLink;
