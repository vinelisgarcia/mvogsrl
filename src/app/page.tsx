import { LeadBriefingForm } from "@/components/LeadBriefingForm";
import { SiteHeader } from "@/components/SiteHeader";

const services = [
  ["Landing pages de venta", "Una pagina clara para presentar una oferta y captar contactos."],
  ["Webs corporativas", "Presencia profesional con secciones para servicios, equipo y contacto."],
  ["Blogs y contenido", "Estructura para publicar articulos, novedades o recursos de tu empresa."],
  ["Formularios de captacion", "Solicitudes ordenadas con los datos que realmente necesitas."],
  ["Webapps internas", "Herramientas privadas para operar mejor sin depender de hojas sueltas."],
  ["Dashboards", "Paneles para ver clientes, solicitudes, reservas, pedidos o indicadores."],
  ["Automatizaciones basicas", "Flujos simples para ahorrar pasos manuales en tu operacion."],
  ["CRM o panel simple", "Una vista a medida para organizar leads, clientes y seguimiento."],
];

const pricing = [
  {
    name: "Landing Simple",
    price: "USD 100",
    badge: "Mas rapida para empezar",
    body: "Para empresas que necesitan una pagina profesional rapida para presentar su negocio, captar leads o validar una oferta.",
    features: [
      "Pagina tipo landing",
      "Diseno moderno responsive",
      "Seccion de servicios/oferta",
      "CTA de contacto",
      "Formulario basico",
      "Demo/propuesta inicial gratis",
      "Solo pagas si te gusta",
    ],
  },
  {
    name: "Web Completa",
    price: "USD 200",
    badge: "Mejor para empresas en crecimiento",
    featured: true,
    body: "Para empresas que necesitan una web mas completa, con estructura clara y espacio para crecer.",
    features: [
      "Varias secciones o paginas",
      "Menus",
      "Pagina de servicios",
      "Pagina sobre nosotros",
      "Contacto",
      "Posibilidad de blog/posts",
      "Mejor estructura SEO inicial",
      "Demo/propuesta inicial gratis",
    ],
  },
  {
    name: "Webapp / Sistema",
    price: "USD 500-1,000+",
    badge: "Para procesos mas complejos",
    body: "Para empresas que necesitan paneles, formularios inteligentes, dashboards o sistemas internos.",
    features: [
      "Panel interno",
      "Gestion de clientes",
      "Automatizacion de procesos",
      "Dashboards",
      "Reservas, pedidos o solicitudes",
      "Inventario simple o CRM basico",
      "Precio segun complejidad",
    ],
  },
];

const steps = [
  ["Rellenas el formulario", "Nos dices que hace tu empresa y que necesitas."],
  ["Analizamos tu empresa", "Revisamos sector, objetivo, web actual y alcance probable."],
  ["Te enviamos una propuesta/demo", "Ves una idea visual antes de comprometerte."],
  ["Si te gusta, pagas y publicamos", "Sin riesgo inicial para webs simples."],
];

const sectors = [
  "Inmobiliarias",
  "Restaurantes",
  "Hoteles",
  "Consultores",
  "Clinicas",
  "Tiendas",
  "Logistica",
  "Servicios profesionales",
  "Educacion",
  "Construccion",
  "E-commerce",
  "Empresas B2B",
];

const decisionCards = [
  ["Si solo necesitas presencia", "Empieza con una landing de USD 100 para validar mensaje y captar contactos."],
  ["Si tu empresa necesita explicar mas", "Pide una web completa de USD 200 con estructura, servicios y contacto."],
  ["Si el problema es operativo", "Vamos a webapp o sistema: panel, dashboard, formularios o CRM simple."],
];

const examples = [
  ["Landing para empresa de servicios", "Presenta la oferta, explica beneficios y lleva al usuario a WhatsApp o formulario."],
  ["Web completa para hotel o restaurante", "Ordena menus, habitaciones, reservas, ubicacion, fotos y datos de contacto."],
  ["Sistema interno para gestionar solicitudes", "Centraliza pedidos, reservas, incidencias o formularios en un panel privado."],
  ["Panel para organizar leads/clientes", "Permite ver contactos, estado, prioridad y proximo paso comercial."],
];

const guarantees = [
  "Consulta inicial gratis",
  "Ves una propuesta antes de pagar",
  "Precios claros desde el inicio",
  "Diseno responsive",
  "Pensado para conversion",
  "Escalable si luego necesitas automatizacion",
];

const faqs = [
  [
    "De verdad no pago si no me gusta?",
    "Para webs simples, la consulta y propuesta/demo inicial no tiene coste. Si la idea te convence, pagas y seguimos hasta dejarla lista para publicar.",
  ],
  [
    "Que incluye la landing de USD 100?",
    "Una pagina tipo landing, diseno responsive, seccion de oferta/servicios, CTA de contacto, formulario basico y propuesta inicial gratis.",
  ],
  [
    "Que diferencia hay entre la web de USD 100 y la de USD 200?",
    "La de USD 100 es una pagina simple. La de USD 200 permite una estructura mas completa: varias secciones o paginas, menus, servicios, sobre nosotros, contacto y base SEO inicial.",
  ],
  [
    "Cuando cuesta USD 500 o mas?",
    "Cuando necesitas una webapp o sistema: panel interno, gestion de clientes, dashboards, reservas, pedidos, inventario simple o automatizaciones.",
  ],
  [
    "Necesito tener textos o imagenes listas?",
    "No necesariamente. Si ya los tienes, ayuda. Si no, podemos ayudarte a ordenar el mensaje y definir que contenido necesita la primera version.",
  ],
  [
    "Pueden mejorar mi web actual?",
    "Si. Puedes enviar tu web actual en el formulario y te diremos si conviene mejorarla, rehacerla o crear algo nuevo.",
  ],
  [
    "Cuanto tarda la propuesta inicial?",
    "Depende de la complejidad y claridad del formulario. Tras revisar tu solicitud te indicamos alcance, siguiente paso y tiempos realistas.",
  ],
  [
    "Trabajan con cualquier sector?",
    "Si. No importa el sector: si puedes explicar tu negocio, podemos convertirlo en una web o sistema util.",
  ],
];

function SectionHeading({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-500">{kicker}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-lg text-slate-600">{body}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main id="inicio" className="bg-[#f7fafc] text-slate-950">
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-[#071017] px-5 py-20 text-white md:py-28 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.24),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">
              Webs simples desde USD 100
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Creamos la web o sistema que tu empresa necesita. Ves la demo antes de pagar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/72 md:text-xl">
              Cuentanos que hace tu empresa, revisamos tu caso y te enviamos una propuesta inicial.
              Webs simples desde USD 100. Si te gusta, la pagas y te la quedas. Si no, no pagas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-cyan-300 px-6 py-4 font-black text-[#071017] transition hover:-translate-y-0.5 hover:bg-white" href="#solicitar-demo">
                Solicitar demo gratis
              </a>
              <a className="rounded-full border border-white/20 px-6 py-4 font-black text-white transition hover:bg-white hover:text-[#071017]" href="#precios">
                Ver precios
              </a>
            </div>
            <p className="mt-6 text-sm font-semibold text-white/58">
              Consulta y demo inicial sin coste para webs simples.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-950 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-cyan-300">MVOG Studio</p>
                    <h2 className="text-2xl font-black">Propuesta visual</h2>
                  </div>
                  <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-black text-emerald-950">
                    Demo gratis
                  </span>
                </div>
                <div className="grid gap-3">
                  {[
                    ["Landing USD 100", "Una pagina para captar", "w-1/3"],
                    ["Web completa USD 200", "Estructura con mas secciones", "w-2/3"],
                    ["Webapp desde USD 500", "Flujo o panel a medida", "w-[92%]"],
                  ].map(([item, detail, width]) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white p-4 text-slate-950">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-black">{item}</p>
                          <p className="mt-1 text-xs font-semibold text-slate-500">{detail}</p>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-black text-slate-600">
                          alcance
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-100">
                        <div className={`h-2 ${width} rounded-full bg-cyan-400`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Problema y solucion"
            title="Tu empresa necesita verse profesional sin perder semanas ni gastar miles."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="grid gap-4">
              {[
                "No tienes web o tu web actual no vende",
                "Tienes procesos manuales que consumen tiempo",
                "No sabes que solucion digital necesitas",
              ].map((problem) => (
                <div key={problem} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-black text-slate-950">{problem}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Solucion MVOG</p>
              <h3 className="mt-3 text-3xl font-black">Pocos datos, propuesta clara, decision despues de verla.</h3>
              <div className="mt-6 grid gap-3 text-white/76">
                <p>Te pedimos pocos datos.</p>
                <p>Disenamos una propuesta/demo.</p>
                <p>Decides despues de verla.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Que podemos crear"
            title="Desde una landing simple hasta un sistema interno."
            body="Para empresas que necesitan presencia digital sin complicarse, y tambien para quienes ya necesitan automatizar procesos."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, body]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                <h3 className="font-black">{title}</h3>
                <p className="mt-3 text-sm text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="precios" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Precios"
            title="Elige el punto de partida. Ves la demo antes de pagar."
            body="La demo/propuesta inicial es gratis para webs simples. Solo pagas si decides quedarte con el resultado."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl ${
                  plan.featured
                    ? "border-cyan-300 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                <p className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${plan.featured ? "bg-cyan-300 text-slate-950" : "bg-cyan-100 text-cyan-900"}`}>
                  {plan.badge}
                </p>
                <h3 className="mt-5 text-2xl font-black">{plan.name}</h3>
                <p className="mt-2 text-4xl font-black">{plan.price}</p>
                <p className={`mt-4 text-sm ${plan.featured ? "text-white/70" : "text-slate-600"}`}>{plan.body}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 font-black transition ${plan.featured ? "bg-cyan-300 text-slate-950 hover:bg-white" : "bg-slate-950 text-white hover:bg-cyan-500"}`} href="#solicitar-demo">
                  Solicitar propuesta
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Como funciona</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Un proceso simple, sin riesgo inicial.</h2>
            <p className="mt-4 text-lg text-white/64">Ves una propuesta/demo antes de pagar. Si te gusta, avanzamos.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map(([title, body], index) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan-300 font-black text-slate-950">{index + 1}</span>
                <h3 className="mt-5 font-black">{title}</h3>
                <p className="mt-3 text-sm text-white/64">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Como elegir"
            title="Tres caminos claros segun lo que necesita tu empresa."
            body="La pagina no tiene que venderte el paquete mas grande. Tiene que ayudarte a empezar por el alcance correcto."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {decisionCards.map(([title, body]) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Sectores"
            title="Para empresas de cualquier sector"
            body="No importa el sector: si puedes explicar tu negocio, podemos convertirlo en una web o sistema util."
          />
          <div className="-mx-5 overflow-x-auto px-5 pb-3 [scrollbar-width:thin]">
            <div className="flex min-w-max gap-3">
              {sectors.map((sector) => (
                <article key={sector} className="w-56 shrink-0 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm font-black text-slate-950">{sector}</p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">
                    Web, landing o sistema adaptado al contexto del negocio.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ejemplos" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="Ejemplos conceptuales" title="Ideas de lo que podemos resolver" />
          <div className="grid gap-5 md:grid-cols-2">
            {examples.map(([title, body]) => (
              <article key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="Garantias" title="Claro desde el inicio" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guarantees.map((item) => (
              <article key={item} className="rounded-3xl border border-slate-200 bg-white p-6 font-black shadow-sm">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="FAQ" title="Preguntas frecuentes" />
          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <summary className="cursor-pointer text-lg font-black text-slate-950">{question}</summary>
                <p className="mt-3 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="solicitar-demo" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <LeadBriefingForm />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <strong className="text-lg text-slate-950">MVOG SRL</strong>
            <p className="mt-1 text-sm text-slate-600">
              Paginas web, webapps y sistemas de gestion a demanda para empresas.
            </p>
          </div>
          <a href="#solicitar-demo" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-cyan-500">
            Quiero mi propuesta
          </a>
        </div>
      </footer>
    </main>
  );
}
