export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs uppercase tracking-[0.35em] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Primordial</span>
        <p className="font-mono normal-case tracking-normal text-white/50">
          Built with Founders Grotesk & Fira Mono · Inspired by the Primordial poster system
        </p>
      </div>
    </footer>
  );
}
