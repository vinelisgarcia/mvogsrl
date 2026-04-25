export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-ink">
            M
          </span>
          <span>MVOG SRL</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
          <a href="#oferta" className="hover:text-white">
            Oferta
          </a>
          <a href="#plantillas" className="hover:text-white">
            Nichos
          </a>
          <a href="#pricing" className="hover:text-white">
            Paquetes
          </a>
          <a href="#briefing" className="hover:text-white">
            Briefing
          </a>
          <a href="/admin" className="hover:text-white">
            Admin
          </a>
        </nav>
        <a
          href="#briefing"
          className="rounded-lg bg-gold px-4 py-2 text-sm font-bold text-ink transition hover:bg-white"
        >
          Solicitar diagnostico
        </a>
      </div>
    </header>
  );
}
