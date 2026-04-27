"use client";

import type { FormEvent } from "react";
import { useState } from "react";

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

export function LeadBriefingForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailWarning, setEmailWarning] = useState("");

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

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationError = validate();
    setError(validationError);
    setEmailWarning("");

    if (validationError) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        error?: string;
        emailSent?: boolean;
        emailWarning?: string;
      };

      if (!response.ok) {
        throw new Error(result.error || "No pudimos enviar la solicitud.");
      }

      if (!result.emailSent && result.emailWarning) {
        setEmailWarning(
          "La solicitud quedo validada, pero falta configurar el envio automatico de email en el servidor.",
        );
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "No pudimos enviar la solicitud. Intentalo nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200/70";
  const labelClass = "text-sm font-bold text-slate-800";

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 lg:p-10">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
          Demo/propuesta gratis
        </p>
        <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
          Solicita tu demo/propuesta gratis
        </h2>
        <p className="mt-5 text-lg text-white/72">
          Dinos que hace tu empresa. Te devolvemos una propuesta visual. Ves la
          idea antes de pagar.
        </p>
        <div className="mt-8 grid gap-3 text-sm font-semibold text-white/82">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            Webs simples desde <strong className="text-cyan-300">USD 100</strong>.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            Si te gusta, pagas y publicamos. Si no, no pagas.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            Si necesitas algo mas que una web, tambien hacemos webapps y sistemas internos.
          </div>
        </div>
      </div>

      <form
        onSubmit={submitForm}
        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/10 md:p-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className={labelClass}>
            Nombre de empresa
            <input
              className={inputClass}
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              required
            />
          </label>
          <label className={labelClass}>
            Persona de contacto
            <input
              className={inputClass}
              value={form.contact}
              onChange={(event) => updateField("contact", event.target.value)}
            />
          </label>
          <label className={labelClass}>
            Email
            <input
              className={inputClass}
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
          </label>
          <label className={labelClass}>
            WhatsApp opcional
            <input
              className={inputClass}
              value={form.whatsapp}
              onChange={(event) => updateField("whatsapp", event.target.value)}
              placeholder="+1 809..."
            />
          </label>
          <label className={labelClass}>
            Pais
            <input
              className={inputClass}
              value={form.country}
              onChange={(event) => updateField("country", event.target.value)}
            />
          </label>
          <label className={labelClass}>
            Sector/nicho
            <input
              className={inputClass}
              value={form.sector}
              onChange={(event) => updateField("sector", event.target.value)}
              required
            />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Web actual, si tiene
            <input
              className={inputClass}
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
              placeholder="https://..."
            />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Que necesitas
            <select
              className={inputClass}
              value={form.service}
              onChange={(event) => updateField("service", event.target.value)}
              required
            >
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
              placeholder="Ej. Somos una clinica dental y queremos una landing para recibir solicitudes por WhatsApp..."
              required
            />
          </label>
        </div>

        <label className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-cyan-500"
            checked={form.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            required
          />
          Acepto que MVOG use esta informacion para preparar una propuesta comercial.
        </label>

        {error ? (
          <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">
            {error}
          </p>
        ) : null}

        {submitted ? (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
            <h3 className="font-black">Solicitud recibida.</h3>
            <p className="mt-2">
              Revisaremos tu empresa y prepararemos una propuesta inicial. La
              informacion fue enviada al equipo MVOG.
            </p>
            {emailWarning ? <p className="mt-2 font-bold">{emailWarning}</p> : null}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full rounded-full bg-slate-950 px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-200"
        >
          {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}
        </button>
      </form>
    </div>
  );
}
