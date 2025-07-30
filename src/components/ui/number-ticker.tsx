'use client';

import { useInView, useMotionValue, useSpring } from 'motion/react';
import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

/**
 * Props for the NumberTicker component.
 */
interface NumberTickerProps extends ComponentPropsWithoutRef<'span'> {
  /** The target number to animate to. */
  value: number;
  /** The initial number to start the animation from. Defaults to 0. */
  startValue?: number;
  /** The direction of the animation ('up' or 'down'). Defaults to 'up'. */
  direction?: 'up' | 'down';
  /** Delay in seconds before the animation starts. Defaults to 0. */
  delay?: number;
  /** The number of decimal places to display. Defaults to 0. */
  decimalPlaces?: number;
}

/**
 * A component that animates a number from a start value to a target value using motion.
 * The animation is triggered when the component enters the viewport.
 * @param {NumberTickerProps} props - The component props.
 * @param {number} props.value - The target number to animate to.
 * @param {number} [props.startValue=0] - The initial number to start the animation from.
 * @param {'up' | 'down'} [props.direction='up'] - The direction of the animation.
 * @param {number} [props.delay=0] - The delay in seconds before the animation starts.
 * @param {string} [props.className] - Additional CSS classes to apply.
 * @param {number} [props.decimalPlaces=0] - The number of decimal places to display.
 * @param {any} [props.props] - Other props to be passed to the span element.
 * @returns {JSX.Element} The NumberTicker component.
 */
export function NumberTicker({
  value,
  startValue = 0,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? startValue : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction, startValue]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces],
  );

  return (
    <span
      ref={ref}
      className={cn(
        'inline-block tabular-nums tracking-wider text-black dark:text-white',
        className,
      )}
      {...props}
    >
      {startValue}
    </span>
  );
}
