export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-(family-name:--font-display) text-sm font-bold tracking-tight text-zinc-100">
          nexacode<span className="text-zinc-500">.ai</span>
        </p>
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Nexacode AI. Production-grade AI
          solutions.
        </p>
        <a
          href="mailto:nexacode.ai@gmail.com"
          className="text-xs text-zinc-400 transition-colors hover:text-white"
        >
          nexacode.ai@gmail.com
        </a>
      </div>
    </footer>
  );
}
