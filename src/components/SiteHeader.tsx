export function SiteHeader() {
  const links = [
    ["Servicios", "#servicios"],
    ["Precios", "#precios"],
    ["Como funciona", "#como-funciona"],
    ["Ejemplos", "#ejemplos"],
    ["Solicitar demo", "#solicitar-demo"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 text-slate-950">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-950 text-sm font-black text-white">
            M
          </span>
          <span className="font-black tracking-tight">MVOG SRL</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-slate-950">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#solicitar-demo"
          className="rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-black text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Solicitar demo gratis
        </a>
      </div>
    </header>
  );
}
