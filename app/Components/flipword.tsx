// npm i framer-motion
// Tailwind is optional but used for spacing/typography in the demo.
"use client"
import { useEffect, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * FlipWords — a small, reusable 3D flip word rotator.
 *
 * Props:
 * - words: string[] — words to cycle through
 * - interval?: number — ms between flips (default 2000)
 * - duration?: number — seconds for each flip animation (default 0.5)
 * - className?: string — extra classes for the outer wrapper
 */
export function FlipWords({
  words,
  interval = 2000,
  duration = 0.5,
  className = "",
}: {
  words: string[];
  interval?: number;
  duration?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  // Precompute a constant height so the line doesn't jump between words of different heights.
  const maxWord = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), ""),
    [words]
  );

  useEffect(() => {
    if (!words?.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <span
      className={`relative inline-flex h-[1em] items-center overflow-hidden align-baseline ${className}`}
      style={{ perspective: 1000 }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Invisible spacer to lock the width/height */}
      <span className="invisible select-none">{maxWord}</span>

      {/* Animated word — we absolutely position so we can stack entries/exits */}
      <span className="absolute inset-0 flex items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={index}
            initial={{ rotateX: 90, opacity: 0, y: 6 }}
            animate={{
              rotateX: 0,
              opacity: 1,
              y: 0,
              transition: { duration, ease: [0.2, 0.8, 0.2, 1] },
            }}
            exit={{
              rotateX: -90,
              opacity: 0,
              y: -6,
              transition: { duration: duration * 0.7, ease: [0.4, 0, 0.2, 1] },
            }}
            style={{
              transformOrigin: "50% 50%",
              backfaceVisibility: "hidden",
              willChange: "transform, opacity",
              display: "inline-block",
            }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}


