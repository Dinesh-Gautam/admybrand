import React, { useState, ReactNode } from 'react';
import Transition from '@/utils/Transition';
import InfoIcon from './icons/InfoIcon';

/**
 * Props for the Tooltip component.
 * @property {ReactNode} children - The content to display inside the tooltip.
 * @property {string} [className] - Additional classes to apply to the tooltip container.
 * @property {('light'|'dark'|'default')} [bg='default'] - The background color of the tooltip.
 * @property {('sm'|'md'|'lg'|'default')} [size='default'] - The size of the tooltip.
 * @property {('top'|'bottom'|'left'|'right')} [position='top'] - The position of the tooltip relative to the trigger.
 * @property {ReactNode} [trigger] - The element that triggers the tooltip. Defaults to an InfoIcon.
 */
interface TooltipProps {
  children: ReactNode;
  className?: string;
  bg?: 'light' | 'dark' | 'default';
  size?: 'sm' | 'md' | 'lg' | 'default';
  position?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: ReactNode;
}

const TOOLTIP_SIZE_CLASSES = {
  lg: 'min-w-72 px-3 py-2',
  md: 'min-w-56 px-3 py-2',
  sm: 'min-w-44 px-3 py-2',
  default: 'px-3 py-2',
};

const TOOLTIP_COLOR_CLASSES = {
  light: 'bg-white text-gray-600 border-gray-200',
  dark: 'bg-gray-800 text-gray-100 border-gray-700/60',
  default:
    'text-gray-600 bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700/60',
};

const TOOLTIP_POSITION_OUTER_CLASSES = {
  right: 'left-full top-1/2 -translate-y-1/2',
  left: 'right-full top-1/2 -translate-y-1/2',
  bottom: 'top-full left-1/2 -translate-x-1/2',
  top: 'bottom-full left-1/2 -translate-x-1/2',
};

const TOOLTIP_POSITION_INNER_CLASSES = {
  right: 'ml-2',
  left: 'mr-2',
  bottom: 'mt-2',
  top: 'mb-2',
};

/**
 * A tooltip component that displays a message when the user hovers over an element.
 * @param {TooltipProps} props - The props for the component.
 */
const Tooltip = ({
  children,
  className,
  bg = 'default',
  size = 'default',
  position = 'top',
  trigger = <InfoIcon />,
}: TooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const sizeClass = TOOLTIP_SIZE_CLASSES[size] || TOOLTIP_SIZE_CLASSES.default;
  const colorClass = TOOLTIP_COLOR_CLASSES[bg] || TOOLTIP_COLOR_CLASSES.default;
  const positionOuterClass =
    TOOLTIP_POSITION_OUTER_CLASSES[position] ||
    TOOLTIP_POSITION_OUTER_CLASSES.top;
  const positionInnerClass =
    TOOLTIP_POSITION_INNER_CLASSES[position] ||
    TOOLTIP_POSITION_INNER_CLASSES.top;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setTooltipOpen(true)}
      onMouseLeave={() => setTooltipOpen(false)}
      onFocus={() => setTooltipOpen(true)}
      onBlur={() => setTooltipOpen(false)}
    >
      <button
        className="block"
        aria-haspopup="true"
        aria-expanded={tooltipOpen}
        onClick={(e) => e.preventDefault()}
      >
        {trigger}
      </button>
      <div className={`z-10 absolute ${positionOuterClass}`}>
        <Transition
          show={tooltipOpen}
          appear
          tag="div"
          className={`rounded-lg border overflow-hidden shadow-lg ${sizeClass} ${colorClass} ${positionInnerClass}`}
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          {children}
        </Transition>
      </div>
    </div>
  );
};

export default Tooltip;
