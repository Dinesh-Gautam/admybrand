import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Transition from '@/utils/Transition';
import { useModal } from '@/hooks/useModal';
import SearchIcon from './icons/SearchIcon';
import RecentSearchIcon from './icons/RecentSearchIcon';
import RecentPageIcon from './icons/RecentPageIcon';

/**
 * Represents a single recent search entry.
 */
interface SearchEntry {
  /** Unique identifier for the search entry. */
  id: string;
  /** The text label for the search entry. */
  label: string;
  /** The link to navigate to for this search entry. */
  link: string;
}

/**
 * Represents a single recent page entry.
 */
interface PageEntry {
  id: string;
  title: string;
  category: string;
  link: string;
}

/**
 * Props for the ModalSearch component.
 */
interface ModalSearchProps {
  /** The unique ID for the modal transition. */
  id: string;
  /** The unique ID for the search input element. */
  searchId: string;
  /** Whether the modal is currently open. */
  isOpen: boolean;
  /** Function to control the open/closed state of the modal. */
  setIsOpen: (isOpen: boolean) => void;
  /** An array of recent search entries to display. */
  recentSearches: SearchEntry[];
  /** An array of recent page entries to display. */
  recentPages: PageEntry[];
}

/**
 * A modal search component that allows users to search for content.
 * It displays recent searches and pages, and integrates with a modal management hook.
 * @param {ModalSearchProps} props - The component props.
 * @param {string} props.id - The unique ID for the modal transition.
 * @param {string} props.searchId - The unique ID for the search input.
 * @param {boolean} props.isOpen - Whether the modal is currently open.
 * @param {(isOpen: boolean) => void} props.setIsOpen - Function to update the modal's open state.
 * @param {SearchEntry[]} props.recentSearches - An array of recent search entries.
 * @param {PageEntry[]} props.recentPages - An array of recent page entries.
 * @returns {JSX.Element} The ModalSearch component.
 */
function ModalSearch({
  id,
  searchId,
  isOpen,
  setIsOpen,
  recentSearches,
  recentPages,
}: ModalSearchProps) {
  const { modalOpen, setModalOpen, modalContent } = useModal();
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsOpen(modalOpen);
  }, [modalOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      searchInput.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-gray-900/30 z-50 transition-opacity"
        show={modalOpen}
        appear
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      >
        <div />
      </Transition>
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        appear
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700/60 overflow-auto max-w-2xl w-full max-h-full rounded-lg shadow-lg"
        >
          {/* Search form */}
          <form className="border-b border-gray-200 dark:border-gray-700/60">
            <div className="relative">
              <label htmlFor={searchId} className="sr-only">
                Search
              </label>
              <input
                id={searchId}
                className="w-full dark:text-gray-300 bg-white dark:bg-gray-800 border-0 focus:ring-transparent placeholder-gray-400 dark:placeholder-gray-500 appearance-none py-3 pl-10 pr-4"
                type="search"
                placeholder="Search Anything…"
                ref={searchInput}
              />
              <button
                className="absolute inset-0 right-auto group"
                type="submit"
                aria-label="Search"
              >
                <SearchIcon className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-4 mr-2" />
              </button>
            </div>
          </form>
          <div className="py-4 px-2">
            {/* Recent searches */}
            <div className="mb-3 last:mb-0">
              <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-2">
                Recent searches
              </div>
              <ul className="text-sm">
                {recentSearches.map((search) => (
                  <li key={search.id}>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href={search.link}
                      onClick={() => setModalOpen(false)}
                    >
                      <RecentSearchIcon className="fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-3" />
                      <span>{search.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Recent pages */}
            <div className="mb-3 last:mb-0">
              <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-2">
                Recent pages
              </div>
              <ul className="text-sm">
                {recentPages.map((page) => (
                  <li key={page.id}>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href={page.link}
                      onClick={() => setModalOpen(false)}
                    >
                      <RecentPageIcon className="fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-3" />
                      <span>
                        <span className="font-medium">{page.title}</span> -{' '}
                        <span className="text-gray-600 dark:text-gray-400">
                          {page.category}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default ModalSearch;
