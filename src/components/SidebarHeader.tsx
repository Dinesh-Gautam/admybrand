import Link from 'next/link';
import CloseIcon from './icons/CloseIcon';
import Logo from './icons/Logo';
import { useSidebar } from '@/context/SidebarContext';

/**
 * Props for the SidebarHeader component.
 * @property {React.RefObject<HTMLButtonElement | null>} trigger - A ref to the button that opens/closes the sidebar.
 */
interface SidebarHeaderProps {
  trigger: React.RefObject<HTMLButtonElement | null>;
}

/**
 * Renders the header of the sidebar, including the logo and a button to close the sidebar on mobile.
 * @param {SidebarHeaderProps} props - The props for the component.
 */
const SidebarHeader = ({ trigger }: SidebarHeaderProps) => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  return (
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
  );
};

export default SidebarHeader;
