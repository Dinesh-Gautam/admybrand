"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
};

export function FadeIn({
  children,
  className,
  delay = 0.1,
  duration = 0.4,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const directionOffset = {
    up: "20px",
    down: "-20px",
    left: "20px",
    right: "-20px",
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y:
          direction === "up" || direction === "down"
            ? directionOffset[direction]
            : 0,
        x:
          direction === "left" || direction === "right"
            ? directionOffset[direction]
            : 0,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y:
                direction === "up" || direction === "down"
                  ? directionOffset[direction]
                  : 0,
              x:
                direction === "left" || direction === "right"
                  ? directionOffset[direction]
                  : 0,
            }
      }
      transition={{
        delay,
        duration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
