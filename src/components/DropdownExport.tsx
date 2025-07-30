import Transition from '@/utils/Transition';
import { Download } from 'lucide-react';
import { useDropdown } from '@/hooks/useDropdown';
import { handleExportToPdf, handleExportToCsv } from '@/utils/export';

interface DropdownExportProps {
  aiSummary: string;
}

/**
 * A dropdown menu for exporting data to PDF or CSV.
 *
 * @param {DropdownExportProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
function DropdownExport({ aiSummary }: DropdownExportProps) {
  const { dropdownOpen, setDropdownOpen, trigger, dropdown } =
    useDropdown<HTMLUListElement>();

  const onExportToPdf = () => {
    handleExportToPdf(aiSummary);
    setDropdownOpen(false);
  };

  const onExportToCsv = () => {
    handleExportToCsv(aiSummary);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300 shadow-lg "
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <Download className="w-4 h-4 text-muted-foreground" />
        <span className="hidden sm:inline ml-2">Export</span>
      </button>

      <Transition
        show={dropdownOpen}
        appear
        tag="div"
        className="origin-top-right z-10 absolute top-full min-w-44  bg-white/50 backdrop-blur-md dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 -right-10 sm:right-0"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <ul
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <li>
            <a
              className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3"
              href="#0"
              onClick={onExportToPdf}
            >
              Export to PDF
            </a>
          </li>
          <li>
            <a
              className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3"
              href="#0"
              onClick={onExportToCsv}
            >
              Export to CSV
            </a>
          </li>
        </ul>
      </Transition>
    </div>
  );
}

export default DropdownExport;
