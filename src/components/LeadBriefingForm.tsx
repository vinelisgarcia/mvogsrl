"use client";

import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import type { BudgetRange, LeadPayload, Urgency } from "@/lib/types";

const initialForm: LeadPayload = {
  fullName: "",
  company: "",
  role: "",
  email: "",
  whatsapp: "",
  country: "",
  city: "",
  industry: "",
  idealClient: "",
  averageTicket: "",
  mainProducts: "",
  currentWebsite: "",
  socialNetworks: "",
  currentLeadCapture: "",
  monthlyLeads: "",
  followUpProcess: "",
  usesCrm: "",
  commercialProblem: "",
  lostSalesPoint: "",
  objectives: [],
  otherObjective: "",
  budget: "",
  urgency: "",
  consent: false,
};

const objectiveOptions = [
  "Quiere mas leads",
  "Quiere mas cierres",
  "Quiere automatizar seguimiento",
  "Quiere mejorar imagen comercial",
  "Quiere organizar su equipo de ventas",
  "Quiere cumplimiento/KYC",
];

type SubmitResult = {
  id: string;
  recommendedPackage: string;
  documentUrl: string;
};

export function LeadBriefingForm() {
  const [form, setForm] = useState<LeadPayload>(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<SubmitResult | null>(null);

  const canSubmit = useMemo(
    () => form.consent && form.fullName && form.company && form.email && form.whatsapp,
    [form],
  );

  function updateField<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleObjective(objective: string) {
    setForm((current) => {
      const exists = current.objectives.includes(objective);
      return {
        ...current,
        objectives: exists
          ? current.objectives.filter((item) => item !== objective)
          : [...current.objectives, objective],
      };
    });
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No pudimos guardar el briefing.");
      }

      setResult(data);
      setForm(initialForm);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "No pudimos guardar el briefing.",
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20";
  const labelClass = "text-sm font-bold text-coal";

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-lg bg-ink p-8 text-white shadow-premium">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-gold">
          Briefing inteligente
        </p>
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Captura informacion lista para analisis, seguimiento y propuesta.
        </h2>
        <p className="mt-5 text-white/72">
          El formulario guarda el lead en Supabase, recomienda paquete y genera una
          ficha HTML descargable para uso interno MVOG.
        </p>
        <div className="mt-8 grid gap-4 text-sm text-white/80">
          <span className="rounded-lg border border-white/10 p-4">
            Validacion de campos requeridos y consentimiento explicito.
          </span>
          <span className="rounded-lg border border-white/10 p-4">
            Preparado para integraciones futuras con email, WhatsApp, Sheets,
            Notion o CRM.
          </span>
        </div>
      </div>

      <form onSubmit={submitLead} className="rounded-lg bg-white p-6 shadow-premium md:p-8">
        <FormGroup title="Datos del lead">
          <label className={labelClass}>
            Nombre completo
            <input className={inputClass} required value={form.fullName} onChange={(e) => updateField("fullName", e.target.value)} />
          </label>
          <label className={labelClass}>
            Empresa
            <input className={inputClass} required value={form.company} onChange={(e) => updateField("company", e.target.value)} />
          </label>
          <label className={labelClass}>
            Cargo
            <input className={inputClass} value={form.role} onChange={(e) => updateField("role", e.target.value)} />
          </label>
          <label className={labelClass}>
            Email
            <input className={inputClass} type="email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} />
          </label>
          <label className={labelClass}>
            WhatsApp
            <input className={inputClass} required value={form.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} />
          </label>
          <label className={labelClass}>
            Pais
            <input className={inputClass} required value={form.country} onChange={(e) => updateField("country", e.target.value)} />
          </label>
          <label className={labelClass}>
            Ciudad
            <input className={inputClass} required value={form.city} onChange={(e) => updateField("city", e.target.value)} />
          </label>
        </FormGroup>

        <FormGroup title="Informacion del negocio">
          <label className={labelClass}>
            Sector o industria
            <input className={inputClass} required value={form.industry} onChange={(e) => updateField("industry", e.target.value)} />
          </label>
          <label className={labelClass}>
            Tipo de cliente ideal
            <input className={inputClass} required value={form.idealClient} onChange={(e) => updateField("idealClient", e.target.value)} />
          </label>
          <label className={labelClass}>
            Ticket promedio
            <input className={inputClass} value={form.averageTicket} onChange={(e) => updateField("averageTicket", e.target.value)} />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Servicios/productos principales
            <textarea className={inputClass} required rows={3} value={form.mainProducts} onChange={(e) => updateField("mainProducts", e.target.value)} />
          </label>
          <label className={labelClass}>
            Pagina web actual
            <input className={inputClass} value={form.currentWebsite} onChange={(e) => updateField("currentWebsite", e.target.value)} />
          </label>
          <label className={labelClass}>
            Redes sociales
            <input className={inputClass} value={form.socialNetworks} onChange={(e) => updateField("socialNetworks", e.target.value)} />
          </label>
        </FormGroup>

        <FormGroup title="Situacion actual">
          <label className={`${labelClass} md:col-span-2`}>
            Como capta leads actualmente
            <textarea className={inputClass} required rows={3} value={form.currentLeadCapture} onChange={(e) => updateField("currentLeadCapture", e.target.value)} />
          </label>
          <label className={labelClass}>
            Cuantos leads recibe al mes
            <input className={inputClass} value={form.monthlyLeads} onChange={(e) => updateField("monthlyLeads", e.target.value)} />
          </label>
          <label className={labelClass}>
            Usa CRM
            <select className={inputClass} required value={form.usesCrm} onChange={(e) => updateField("usesCrm", e.target.value as "si" | "no")}>
              <option value="">Selecciona</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Como da seguimiento
            <textarea className={inputClass} required rows={3} value={form.followUpProcess} onChange={(e) => updateField("followUpProcess", e.target.value)} />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Principal problema comercial
            <textarea className={inputClass} required rows={3} value={form.commercialProblem} onChange={(e) => updateField("commercialProblem", e.target.value)} />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Donde siente que pierde ventas
            <textarea className={inputClass} required rows={3} value={form.lostSalesPoint} onChange={(e) => updateField("lostSalesPoint", e.target.value)} />
          </label>
        </FormGroup>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-black text-ink">Objetivos</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {objectiveOptions.map((objective) => (
              <label key={objective} className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 text-sm font-semibold text-coal">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-gold"
                  checked={form.objectives.includes(objective)}
                  onChange={() => toggleObjective(objective)}
                />
                {objective}
              </label>
            ))}
          </div>
          <label className={`${labelClass} mt-4 block`}>
            Otro objetivo
            <input className={inputClass} value={form.otherObjective} onChange={(e) => updateField("otherObjective", e.target.value)} />
          </label>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className={labelClass}>
            Presupuesto
            <select className={inputClass} required value={form.budget} onChange={(e) => updateField("budget", e.target.value as BudgetRange)}>
              <option value="">Selecciona</option>
              <option value="under_150">Menos de USD 150</option>
              <option value="150_1200">USD 150-1,200</option>
              <option value="1200_3000">USD 1,200-3,000</option>
              <option value="over_3000">Mas de USD 3,000</option>
            </select>
          </label>
          <label className={labelClass}>
            Urgencia
            <select className={inputClass} required value={form.urgency} onChange={(e) => updateField("urgency", e.target.value as Urgency)}>
              <option value="">Selecciona</option>
              <option value="immediate">Inmediato</option>
              <option value="this_month">Este mes</option>
              <option value="next_3_months">Proximos 3 meses</option>
              <option value="evaluating">Solo estoy evaluando</option>
            </select>
          </label>
        </div>

        <label className="mt-6 flex items-start gap-3 rounded-lg bg-slate-50 p-4 text-sm font-semibold text-coal">
          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 accent-gold"
            checked={form.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
          />
          Acepto que MVOG utilice esta informacion para analizar mi necesidad y
          preparar una propuesta comercial.
        </label>

        {error ? (
          <p className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
            {error}
          </p>
        ) : null}

        {result ? (
          <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
            <h3 className="font-black">Gracias. Hemos recibido tu informacion.</h3>
            <p className="mt-2">
              El equipo MVOG revisara tu caso y preparara un diagnostico inicial.
              Paquete recomendado: <strong>{result.recommendedPackage}</strong>.
            </p>
            <a
              className="mt-4 inline-flex rounded-lg bg-ink px-4 py-2 font-bold text-white"
              href={result.documentUrl}
            >
              Descargar ficha del lead
            </a>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading || !canSubmit}
          className="mt-8 w-full rounded-lg bg-gold px-5 py-4 text-base font-black text-ink transition hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Guardando briefing..." : "Enviar briefing y generar ficha"}
        </button>
      </form>
    </div>
  );
}

function FormGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="mt-8 border-t border-slate-200 pt-6 first:mt-0 first:border-t-0 first:pt-0">
      <legend className="mb-4 text-lg font-black text-ink">{title}</legend>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </fieldset>
  );
}
