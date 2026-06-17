"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * The signature scroll animation:
 * - a hairline progress bar across the top
 * - a vertical line down the left rail that draws itself as you scroll,
 *   tipped with a glowing dot
 */
export default function ScrollLine() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });
  const dotTop = useTransform(progress, (v) => `calc(${v * 100}% - 3px)`);

  return (
    <>
      {/* top progress hairline */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-zinc-100 via-indigo-300 to-indigo-500"
        style={{ scaleX: progress }}
      />

      {/* left rail line, desktop only */}
      <div className="fixed left-6 top-0 z-40 hidden h-screen w-px lg:block xl:left-10">
        <div className="absolute inset-0 bg-white/5" />
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-zinc-500 via-indigo-300 to-indigo-500"
          style={{ scaleY: progress }}
        />
        <motion.div
          className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-indigo-300 shadow-[0_0_14px_4px_rgba(124,138,255,0.8)]"
          style={{ top: dotTop }}
        />
      </div>
    </>
  );
}
