"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.65, 0.32, 0.99] }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
    >
      <nav className="glass glass-edge flex items-center gap-1 rounded-full py-1.5 pl-5 pr-1.5">
        <a
          href="#home"
          className="mr-3 font-(family-name:--font-display) text-sm font-bold tracking-tight text-zinc-100"
        >
          nexacode<span className="text-zinc-500">.ai</span>
        </a>
        <ul className="hidden items-center md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="ml-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.04]"
        >
          Start a Project
        </a>
      </nav>
    </motion.header>
  );
}
