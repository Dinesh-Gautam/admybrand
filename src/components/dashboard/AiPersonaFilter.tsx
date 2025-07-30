import React, { useState, useRef, useEffect } from 'react';
import Transition from '@/utils/Transition';
import { ChevronDown, Sparkles } from 'lucide-react';

interface AiPersonaFilterProps {
  personas: string[];
  selectedPersona: string | null;
  onPersonaChange: (persona: string | null) => void;
}

function AiPersonaFilter({
  personas,
  selectedPersona,
  onPersonaChange,
}: AiPersonaFilterProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target as Node) ||
        trigger.current?.contains(target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn px-3 bg-white dark:bg-gray-800/50 border-gray-200 hover:border-gray-300 dark:border-gray-700/60 dark:hover:border-gray-600 text-gray-500 dark:text-gray-400 flex items-center"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <Sparkles className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
        <span className="mr-2">{selectedPersona ?? 'All Personas'}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className="origin-top-right z-10 absolute top-full right-0 min-w-56 bg-white  dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 pt-1.5 rounded-lg shadow-lg overflow-hidden mt-1"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown}>
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pt-1.5 pb-2 px-4">
            Filter by AI Persona
          </div>
          <ul className="mb-1">
            {personas.map((persona) => (
              <li key={persona} className="py-1 px-2">
                <a
                  href="#"
                  className={`block text-sm font-medium rounded-md px-3 py-1 ${
                    persona === (selectedPersona ?? 'All')
                      ? 'bg-gray-900/10 dark:bg-gray-700/30 text-gray-800 dark:text-gray-200'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-900/5 hover:dark:bg-gray-700/20'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onPersonaChange(persona === 'All' ? null : persona);
                    setDropdownOpen(false);
                  }}
                >
                  {persona}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default AiPersonaFilter;
