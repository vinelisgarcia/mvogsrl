import { LeadBriefingForm } from "@/components/LeadBriefingForm";
import { SiteHeader } from "@/components/SiteHeader";

const services = [
  ["Landing pages de venta", "Una pagina clara para presentar una oferta y captar contactos."],
  ["Webs corporativas", "Presencia profesional con secciones para servicios, equipo y contacto."],
  ["Blogs y contenido", "Estructura para publicar articulos, novedades o recursos."],
  ["Formularios de captacion", "Solicitudes ordenadas con los datos que realmente necesitas."],
  ["Webapps internas", "Herramientas privadas para operar mejor sin hojas sueltas."],
  ["Dashboards", "Paneles para ver clientes, solicitudes, pedidos o indicadores."],
  ["Automatizaciones basicas", "Flujos simples para ahorrar pasos manuales."],
  ["CRM o panel simple", "Una vista a medida para organizar leads y seguimiento."],
];

const pricing = [
  {
    name: "Landing Simple",
    price: "USD 100",
    badge: "Mas rapida para empezar",
    body: "Para empresas que necesitan una pagina profesional rapida para presentar su negocio, captar leads o validar una oferta.",
    features: ["Pagina tipo landing", "Diseno responsive", "Servicios/oferta", "CTA de contacto", "Formulario basico", "Demo gratis", "Solo pagas si te gusta"],
  },
  {
    name: "Web Completa",
    price: "USD 200",
    badge: "Mejor para empresas en crecimiento",
    featured: true,
    body: "Para empresas que necesitan una web mas completa, con estructura clara y espacio para crecer.",
    features: ["Varias secciones o paginas", "Menus", "Servicios", "Sobre nosotros", "Contacto", "Blog/posts opcional", "SEO inicial"],
  },
  {
    name: "Webapp / Sistema",
    price: "USD 500-1,000+",
    badge: "Para procesos mas complejos",
    body: "Para empresas que necesitan paneles, formularios inteligentes, dashboards o sistemas internos.",
    features: ["Panel interno", "Gestion de clientes", "Automatizacion", "Dashboards", "Reservas o pedidos", "CRM basico", "Precio segun complejidad"],
  },
];

const steps = [
  ["Rellenas el formulario", "Nos dices que hace tu empresa y que necesitas."],
  ["Analizamos tu caso", "Revisamos sector, objetivo, web actual y alcance probable."],
  ["Recibes una propuesta/demo", "Ves una idea concreta antes de comprometerte."],
  ["Decides si avanzar", "Si te gusta, pagas y publicamos. Si no, no pagas."],
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
  ["De verdad no pago si no me gusta?", "Para webs simples, la consulta y propuesta/demo inicial no tiene coste. Si la idea te convence, pagas y seguimos hasta dejarla lista para publicar."],
  ["Que incluye la landing de USD 100?", "Una pagina tipo landing, diseno responsive, seccion de oferta/servicios, CTA de contacto, formulario basico y propuesta inicial gratis."],
  ["Que diferencia hay entre la web de USD 100 y la de USD 200?", "La de USD 100 es una pagina simple. La de USD 200 permite una estructura mas completa: varias secciones o paginas, menus, servicios, sobre nosotros, contacto y base SEO inicial."],
  ["Cuando cuesta USD 500 o mas?", "Cuando necesitas una webapp o sistema: panel interno, gestion de clientes, dashboards, reservas, pedidos, inventario simple o automatizaciones."],
  ["Necesito tener textos o imagenes listas?", "No necesariamente. Si ya los tienes, ayuda. Si no, podemos ayudarte a ordenar el mensaje y definir que contenido necesita la primera version."],
  ["Pueden mejorar mi web actual?", "Si. Puedes enviar tu web actual en el formulario y te diremos si conviene mejorarla, rehacerla o crear algo nuevo."],
  ["Cuanto tarda la propuesta inicial?", "Depende de la complejidad y claridad del formulario. Tras revisar tu solicitud te indicamos alcance y tiempos realistas."],
  ["Trabajan con cualquier sector?", "Si. No importa el sector: si puedes explicar tu negocio, podemos convertirlo en una web o sistema util."],
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
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{kicker}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-lg text-slate-600">{body}</p> : null}
    </div>
  );
}

function Card({ title, body }: { title: string; body?: string }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-black text-slate-950">{title}</h3>
      {body ? <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p> : null}
    </article>
  );
}

export default function Home() {
  return (
    <main id="inicio" className="bg-slate-50 text-slate-950">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-white px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-slate-500">
              Webs simples desde USD 100
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-7xl">
              Creamos la web o sistema que tu empresa necesita. Ves la demo antes de pagar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Cuentanos que hace tu empresa, revisamos tu caso y te enviamos una propuesta inicial.
              Si te gusta, la pagas y te la quedas. Si no, no pagas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-lg bg-slate-950 px-5 py-3.5 font-black text-white transition hover:bg-slate-800" href="#solicitar-demo">
                Solicitar demo gratis
              </a>
              <a className="rounded-lg border border-slate-300 bg-white px-5 py-3.5 font-black text-slate-950 transition hover:border-slate-950" href="#precios">
                Ver precios
              </a>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-500">
              Consulta y demo inicial sin coste para webs simples.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="rounded-lg border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">MVOG SRL</p>
                  <h2 className="mt-1 text-lg font-black">Resumen de propuesta</h2>
                </div>
                <span className="rounded-md bg-slate-950 px-3 py-1.5 text-xs font-black text-white">Demo gratis</span>
              </div>
              <div className="grid gap-0 divide-y divide-slate-200">
                {[
                  ["Landing Simple", "USD 100", "Captacion rapida"],
                  ["Web Completa", "USD 200", "Presencia completa"],
                  ["Webapp / Sistema", "USD 500+", "Operacion interna"],
                ].map(([name, price, note]) => (
                  <div key={name} className="grid grid-cols-[1fr_auto] gap-4 px-5 py-4">
                    <div>
                      <p className="font-black text-slate-950">{name}</p>
                      <p className="mt-1 text-sm text-slate-500">{note}</p>
                    </div>
                    <p className="font-black text-slate-950">{price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
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
                <Card key={problem} title={problem} />
              ))}
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">Solucion MVOG</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight">Pocos datos, propuesta clara, decision despues de verla.</h3>
              <div className="mt-6 grid gap-3 text-slate-300">
                <p>Te pedimos pocos datos.</p>
                <p>Disenamos una propuesta/demo.</p>
                <p>Decides despues de verla.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-y border-slate-200 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Que podemos crear"
            title="Desde una landing simple hasta un sistema interno."
            body="Para empresas que necesitan presencia digital sin complicarse, y tambien para quienes ya necesitan automatizar procesos."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, body]) => (
              <Card key={title} title={title} body={body} />
            ))}
          </div>
        </div>
      </section>

      <section id="precios" className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Precios"
            title="Elige el punto de partida. Ves la demo antes de pagar."
            body="La demo/propuesta inicial es gratis para webs simples. Solo pagas si decides quedarte con el resultado."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-lg border p-6 shadow-sm ${
                  plan.featured ? "border-slate-950 bg-white" : "border-slate-200 bg-white"
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">{plan.badge}</p>
                <h3 className="mt-4 text-2xl font-black text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-4xl font-black tracking-tight text-slate-950">{plan.price}</p>
                <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">{plan.body}</p>
                <ul className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a className="mt-7 inline-flex w-full justify-center rounded-lg bg-slate-950 px-5 py-3 font-black text-white transition hover:bg-slate-800" href="#solicitar-demo">
                  Solicitar propuesta
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-slate-950 px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">Como funciona</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Un proceso simple, sin riesgo inicial.</h2>
            <p className="mt-4 text-lg text-slate-300">Ves una propuesta/demo antes de pagar. Si te gusta, avanzamos.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map(([title, body], index) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <span className="text-sm font-black text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Sectores"
            title="Para empresas de cualquier sector"
            body="No importa el sector: si puedes explicar tu negocio, podemos convertirlo en una web o sistema util."
          />
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span key={sector} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="ejemplos" className="border-y border-slate-200 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="Ejemplos conceptuales" title="Ideas de lo que podemos resolver" />
          <div className="grid gap-5 md:grid-cols-2">
            {examples.map(([title, body]) => (
              <Card key={title} title={title} body={body} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="Garantias" title="Claro desde el inicio" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guarantees.map((item) => (
              <Card key={item} title={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="FAQ" title="Preguntas frecuentes" />
          <div className="grid gap-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer text-base font-black text-slate-950">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="solicitar-demo" className="px-5 py-16 lg:px-8">
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
          <a href="#solicitar-demo" className="rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800">
            Quiero mi propuesta
          </a>
        </div>
      </footer>
    </main>
  );
}
