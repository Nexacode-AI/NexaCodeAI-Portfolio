"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const styles = ["text-zinc-100", "stroke-text", "accent-text", "stroke-text-accent"];

/**
 * Giant kinetic typography band — huge words slide horizontally,
 * driven by scroll position, like the reference video.
 */
export default function KineticBand({
  words,
  reverse = false,
}: {
  words: string[];
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ["-32%", "2%"] : ["2%", "-32%"],
  );

  // repeat the words enough to overflow the viewport at any drift position
  const sequence = [...words, ...words, ...words];

  return (
    <div ref={ref} aria-hidden className="relative overflow-hidden py-8">
      <motion.div
        style={{ x }}
        className="flex w-max items-baseline gap-[0.6em] whitespace-nowrap font-(family-name:--font-display) text-[clamp(4.5rem,13vw,11rem)] font-bold leading-none tracking-tight"
      >
        {sequence.map((w, i) => (
          <span key={i} className={styles[i % styles.length]}>
            {w}
            <span className="mx-[0.25em] text-indigo-400/60">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
