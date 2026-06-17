"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * A floating "Start a Project" pill that appears after the hero and
 * hides once the contact section is in view.
 */
export default function StickyCTA() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setShow(v > 0.12 && v < 0.9);
    });
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.21, 0.65, 0.32, 0.99] }}
          className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 shadow-[0_0_30px_-4px_rgba(124,138,255,0.6)] transition-transform hover:scale-[1.05]"
        >
          Start a Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
