import Image from "next/image";
import { LeadBriefingForm } from "@/components/LeadBriefingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";

const offerItems = [
  "Pagina web/landing comercial",
  "Formulario de briefing inteligente",
  "Captura y organizacion de leads",
  "Generacion de ficha del cliente",
  "Automatizacion de seguimiento",
  "Dashboard basico de leads",
  "Propuesta comercial basada en la informacion recopilada",
  "Cumplimiento/KYC/PLAFT cuando aplique",
];

const comparisonRows = [
  ["Tiempo de implementacion", "Variable y lento", "Semanas de discovery", "Ruta MVP clara"],
  ["Enfoque en ventas", "Depende del cliente", "Diseño primero", "Conversion primero"],
  ["Automatizacion", "Manual", "Extra costoso", "Incluida por paquete"],
  ["Control de datos", "Disperso", "Depende del stack", "Supabase y ficha estructurada"],
  ["Seguimiento de leads", "Sin proceso", "No siempre incluido", "Estados y dashboard"],
  ["Cumplimiento/KYC/PLAFT", "No contemplado", "Proyecto aparte", "Preparado si aplica"],
  ["Escalabilidad", "Fragil", "A medida", "Sistema replicable"],
];

const nicheCards = [
  {
    title: "Inmobiliarias y promotoras",
    body: "Captura compradores, inversores y propietarios con fichas claras, scoring y seguimiento por proyecto.",
  },
  {
    title: "Servicios profesionales",
    body: "Convierte autoridad en consultas calificadas con paginas de oferta, casos y diagnostico inicial.",
  },
  {
    title: "Logistica y distribucion",
    body: "Ordena solicitudes B2B, rutas, volumen, frecuencia y necesidades operativas antes de cotizar.",
  },
  {
    title: "Hoteles/proveedores B2B",
    body: "Centraliza solicitudes comerciales, alianzas, eventos, abastecimiento y oportunidades corporativas.",
  },
  {
    title: "E-commerce",
    body: "Mejora conversion, recupera leads y organiza oportunidades de compra mayorista o recurrente.",
  },
  {
    title: "Consultores/agentes independientes",
    body: "Estandariza captacion, diagnostico, propuesta y seguimiento sin depender de mensajes manuales.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "Desde USD 150",
    features: [
      "Landing comercial",
      "Formulario basico",
      "Captura de leads",
      "Documento resumen del lead",
    ],
  },
  {
    name: "Growth",
    price: "Desde USD 1,200",
    featured: true,
    features: [
      "Todo Starter",
      "Formulario avanzado",
      "Lead scoring",
      "Dashboard basico",
      "Automatizacion email/WhatsApp",
    ],
  },
  {
    name: "Pro",
    price: "Desde USD 3,000",
    features: [
      "Todo Growth",
      "Flujo comercial completo",
      "Documentos automatizados",
      "Cumplimiento/KYC si aplica",
      "Reportes y propuesta automatizada",
    ],
  },
];

export default function Home() {
  return (
    <main id="inicio" className="bg-pearl">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/assets/mvog-hero.png"
          alt="Sistema comercial automatizado MVOG"
          fill
          priority
          className="absolute inset-0 -z-20 object-cover opacity-[0.42]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/86 to-navy/50" />
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-end px-5 pb-16 pt-28 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-gold">
              MVOG SRL | Sistemas comerciales automatizados
            </p>
            <h1 className="max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
              Convierte tus leads en ventas reales con un sistema comercial automatizado
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/78 md:text-xl">
              MVOG diseña paginas web, formularios inteligentes y flujos automatizados
              para captar, calificar y convertir clientes sin depender de procesos manuales.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="rounded-lg bg-gold px-6 py-4 font-black text-ink transition hover:bg-white" href="#briefing">
                Solicitar diagnostico
              </a>
              <a className="rounded-lg border border-white/30 px-6 py-4 font-black text-white transition hover:bg-white hover:text-ink" href="#pricing">
                Ver paquetes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Oferta principal"
          title="Sistema Comercial Automatizado MVOG"
          body="Un MVP comercial para captar, calificar, documentar y dar seguimiento a oportunidades reales desde una sola experiencia."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {offerItems.map((item, index) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <span className="mb-8 grid h-10 w-10 place-items-center rounded-lg bg-navy text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-black text-ink">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Comparativa"
            title="MVOG vs DIY vs Agencia tradicional"
            body="El valor no esta solo en publicar una pagina: esta en convertir cada lead en informacion accionable."
          />
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <div className="min-w-[820px]">
              <div className="grid grid-cols-4 bg-ink text-sm font-black text-white">
                <span className="p-4">Factor</span>
                <span className="p-4">DIY</span>
                <span className="p-4">Agencia tradicional</span>
                <span className="p-4 text-gold">MVOG</span>
              </div>
              {comparisonRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-4 border-t border-slate-200 text-sm">
                  {row.map((cell, index) => (
                    <span key={cell} className={`p-4 ${index === 0 ? "font-black text-ink" : "text-steel"} ${index === 3 ? "font-bold text-navy" : ""}`}>
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plantillas" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Plantillas por nicho"
          title="Estructuras comerciales listas para adaptar"
          body="Cada nicho necesita preguntas, mensajes, filtros y proximos pasos distintos."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {nicheCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-ink">{card.title}</h3>
              <p className="mt-4 text-steel">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-ink px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-gold">
              Pricing por paquete
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Paquetes claros para avanzar sin friccion
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Desde validacion comercial hasta flujos completos con documentos,
              dashboard y seguimiento.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((pack) => (
              <article
                key={pack.name}
                className={`rounded-lg border p-7 ${pack.featured ? "border-gold bg-white text-ink shadow-premium" : "border-white/10 bg-white/5 text-white"}`}
              >
                <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">{pack.name}</p>
                <h3 className="mt-4 text-3xl font-black">{pack.price}</h3>
                <ul className="mt-6 space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a className="mt-8 inline-flex w-full justify-center rounded-lg bg-gold px-5 py-3 font-black text-ink transition hover:bg-white" href="#briefing">
                  Solicitar {pack.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="briefing" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <LeadBriefingForm />
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <strong className="text-lg text-ink">MVOG SRL</strong>
            <p className="mt-1 text-sm text-steel">
              Sistemas comerciales automatizados para captacion, gestion y cierre de leads.
            </p>
          </div>
          <a href="/admin" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-ink hover:border-gold">
            Ver dashboard admin
          </a>
        </div>
      </footer>
    </main>
  );
}
