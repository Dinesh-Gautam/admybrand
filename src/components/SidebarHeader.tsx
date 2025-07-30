import Link from 'next/link';
import CloseIcon from './icons/CloseIcon';
import Logo from './icons/Logo';
import { useSidebar } from '@/context/SidebarContext';

interface SidebarHeaderProps {
  trigger: React.RefObject<HTMLButtonElement | null>;
}

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
