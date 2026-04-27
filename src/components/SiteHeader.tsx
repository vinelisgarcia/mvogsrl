export function SiteHeader() {
  const links = [
    ["Servicios", "#servicios"],
    ["Precios", "#precios"],
    ["Como funciona", "#como-funciona"],
    ["Ejemplos", "#ejemplos"],
    ["Solicitar demo", "#solicitar-demo"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071017]/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 font-black tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300 text-[#071017]">
            M
          </span>
          <span>MVOG SRL</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/70 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#solicitar-demo"
          className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#071017] shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-200"
        >
          Solicitar demo gratis
        </a>
      </div>
    </header>
  );
}
