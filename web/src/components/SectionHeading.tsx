"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Section header with a giant ghosted backdrop word that parallaxes
 * as the section scrolls through the viewport.
 */
export default function SectionHeading({
  backdrop,
  label,
  title,
  children,
}: {
  backdrop: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <div ref={ref} className="relative mb-16">
      <motion.span
        aria-hidden
        style={{ x }}
        className="backdrop-word absolute -top-[0.35em] left-0 text-[clamp(5rem,16vw,14rem)]"
      >
        {backdrop}
      </motion.span>
      <div className="relative pt-[clamp(3rem,9vw,8rem)]">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            <span className="h-px w-10 bg-zinc-600" />
            {label}
          </p>
          <h2 className="font-(family-name:--font-display) text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            {title}
          </h2>
          {children && (
            <div className="mt-5 max-w-2xl text-zinc-400">{children}</div>
          )}
        </Reveal>
      </div>
    </div>
  );
}
