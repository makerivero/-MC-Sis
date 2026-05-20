export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#16051f] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="display-title bg-gradient-to-br from-magenta via-coral to-orange bg-clip-text text-3xl text-transparent">MC</span>
          <span className="text-xl font-black text-white">MC-Sis</span>
        </div>
        <p>Diseño y desarrollo web que impulsa negocios.</p>
        <p>
          <span className="text-lime">●</span> © 2026 MC-Sis. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
