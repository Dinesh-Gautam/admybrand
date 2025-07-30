import React from 'react';
import { useThemeProvider } from '@/utils/theme-provider';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

/**
 * A toggle switch component to change the color theme between light and dark mode.
 */
export default function ThemeToggle() {
  const { currentTheme, changeCurrentTheme } = useThemeProvider();

  return (
    <div>
      <input
        type="checkbox"
        name="light-switch"
        id="light-switch"
        className="light-switch sr-only"
        checked={currentTheme === 'light'}
        onChange={() =>
          changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
        }
      />
      <label
        className="flex items-center justify-center cursor-pointer w-8 h-8 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-full"
        htmlFor="light-switch"
      >
        <SunIcon className="dark:hidden fill-current text-gray-500/80 dark:text-gray-400/80" />
        <MoonIcon className="hidden dark:block fill-current text-gray-500/80 dark:text-gray-400/80" />
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
