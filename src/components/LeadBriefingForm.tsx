"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type DemoForm = {
  company: string;
  contact: string;
  email: string;
  whatsapp: string;
  country: string;
  sector: string;
  website: string;
  service: string;
  description: string;
  consent: boolean;
};

const initialForm: DemoForm = {
  company: "",
  contact: "",
  email: "",
  whatsapp: "",
  country: "",
  sector: "",
  website: "",
  service: "",
  description: "",
  consent: false,
};

const serviceOptions = [
  "Landing simple USD 100",
  "Web completa USD 200",
  "Webapp/sistema de gestion",
  "No estoy seguro",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildSummary(form: DemoForm) {
  return [
    "Nueva solicitud de demo MVOG SRL",
    "",
    `Empresa: ${form.company}`,
    `Contacto: ${form.contact || "No indicado"}`,
    `Email: ${form.email}`,
    `WhatsApp: ${form.whatsapp || "No indicado"}`,
    `Pais: ${form.country || "No indicado"}`,
    `Sector: ${form.sector}`,
    `Web actual: ${form.website || "No tiene / no indicada"}`,
    `Necesita: ${form.service}`,
    "",
    "Descripcion:",
    form.description,
  ].join("\n");
}

export function LeadBriefingForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const summary = useMemo(() => buildSummary(form), [form]);
  const mailtoHref = `mailto:info@mvogsrl.com?subject=${encodeURIComponent(
    `Solicitud de demo - ${form.company || "MVOG"}`,
  )}&body=${encodeURIComponent(summary)}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(summary)}`;

  function updateField<K extends keyof DemoForm>(key: K, value: DemoForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function validate() {
    if (!form.company.trim()) return "Indica el nombre de la empresa.";
    if (!isValidEmail(form.email)) return "Indica un email valido.";
    if (!form.sector.trim()) return "Indica el sector o nicho.";
    if (!form.service) return "Selecciona que necesitas.";
    if (form.description.trim().length < 20) {
      return "Describe tu empresa y objetivo con al menos 20 caracteres.";
    }
    if (!form.consent) return "Debes aceptar el uso de la informacion para preparar la propuesta.";
    return "";
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate();
    setError(validationError);

    if (validationError) return;
    setSubmitted(true);
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-200";
  const labelClass = "text-sm font-bold text-slate-800";

  return (
    <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
      <aside className="rounded-lg border border-slate-200 bg-slate-950 p-7 text-white lg:p-8">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-300">
          Solicitud
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
          Solicita tu demo/propuesta gratis
        </h2>
        <p className="mt-4 text-base text-slate-300">
          Dinos que hace tu empresa. Te devolvemos una propuesta visual y decides
          despues de verla.
        </p>
        <dl className="mt-7 grid gap-4 border-t border-white/10 pt-6 text-sm">
          <div>
            <dt className="font-black text-white">Precio de entrada</dt>
            <dd className="mt-1 text-slate-300">Webs simples desde USD 100.</dd>
          </div>
          <div>
            <dt className="font-black text-white">Riesgo inicial</dt>
            <dd className="mt-1 text-slate-300">Si no te gusta la propuesta, no pagas.</dd>
          </div>
          <div>
            <dt className="font-black text-white">Alcance</dt>
            <dd className="mt-1 text-slate-300">Webs, webapps y sistemas internos segun necesidad.</dd>
          </div>
        </dl>
      </aside>

      <form onSubmit={submitForm} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <label className={labelClass}>
            Nombre de empresa
            <input className={inputClass} value={form.company} onChange={(event) => updateField("company", event.target.value)} required />
          </label>
          <label className={labelClass}>
            Persona de contacto
            <input className={inputClass} value={form.contact} onChange={(event) => updateField("contact", event.target.value)} />
          </label>
          <label className={labelClass}>
            Email
            <input className={inputClass} type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} required />
          </label>
          <label className={labelClass}>
            WhatsApp opcional
            <input className={inputClass} value={form.whatsapp} onChange={(event) => updateField("whatsapp", event.target.value)} placeholder="+1 809..." />
          </label>
          <label className={labelClass}>
            Pais
            <input className={inputClass} value={form.country} onChange={(event) => updateField("country", event.target.value)} />
          </label>
          <label className={labelClass}>
            Sector/nicho
            <input className={inputClass} value={form.sector} onChange={(event) => updateField("sector", event.target.value)} required />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Web actual, si tiene
            <input className={inputClass} value={form.website} onChange={(event) => updateField("website", event.target.value)} placeholder="https://..." />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Que necesitas
            <select className={inputClass} value={form.service} onChange={(event) => updateField("service", event.target.value)} required>
              <option value="">Selecciona una opcion</option>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Describe brevemente tu empresa y que quieres conseguir
            <textarea
              className={inputClass}
              rows={5}
              minLength={20}
              value={form.description}
              onChange={(event) => updateField("description", event.target.value)}
              placeholder="Ej. Somos una clinica dental y queremos una landing para recibir solicitudes por WhatsApp."
              required
            />
          </label>
        </div>

        <label className="mt-5 flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-slate-950"
            checked={form.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            required
          />
          Acepto que MVOG use esta informacion para preparar una propuesta comercial.
        </label>

        {error ? (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">
            {error}
          </p>
        ) : null}

        {submitted ? (
          <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
            <h3 className="font-black">Solicitud recibida.</h3>
            <p className="mt-2">
              Revisaremos tu empresa y prepararemos una propuesta inicial. Tambien puedes enviarnos el resumen por tu canal preferido:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="rounded-lg bg-slate-950 px-4 py-2 font-black text-white" href={mailtoHref}>
                Enviar por email
              </a>
              <a className="rounded-lg border border-emerald-300 bg-white px-4 py-2 font-black text-emerald-900" href={whatsappHref} target="_blank">
                Enviar por WhatsApp
              </a>
            </div>
          </div>
        ) : null}

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-slate-950 px-6 py-4 text-base font-black text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Enviar solicitud
        </button>
      </form>
    </div>
  );
}
