"use client";

import { useEffect, useState } from "react";
import type { LeadStatus } from "@/lib/types";
import { budgetLabels, urgencyLabels } from "@/lib/recommendation";

type LeadRow = {
  id: string;
  created_at: string;
  full_name: string;
  company: string;
  whatsapp: string;
  industry: string;
  budget: keyof typeof budgetLabels;
  urgency: keyof typeof urgencyLabels;
  recommended_package: string;
  status: LeadStatus;
};

const statuses: LeadStatus[] = [
  "Nuevo",
  "Contactado",
  "Diagnostico enviado",
  "Propuesta enviada",
  "Cerrado",
  "Perdido",
];

export function AdminLeadsTable() {
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadLeads() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/leads", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No pudimos cargar los leads.");
      }

      setLeads(data.leads || []);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "No pudimos cargar los leads.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: LeadStatus) {
    const previous = leads;
    setLeads((current) =>
      current.map((lead) => (lead.id === id ? { ...lead, status } : lead)),
    );

    try {
      const response = await fetch(`/api/leads/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No pudimos actualizar el estado.");
      }
    } catch (statusError) {
      setLeads(previous);
      setError(
        statusError instanceof Error
          ? statusError.message
          : "No pudimos actualizar el estado.",
      );
    }
  }

  useEffect(() => {
    loadLeads();
  }, []);

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-premium">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-black text-ink">Leads recibidos</h2>
          <p className="mt-1 text-sm text-steel">
            Cambia el estado del lead y descarga su ficha comercial.
          </p>
        </div>
        <button
          type="button"
          onClick={loadLeads}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-ink hover:border-gold"
        >
          Actualizar
        </button>
      </div>

      {error ? (
        <p className="m-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}

      {loading ? (
        <div className="p-8 text-sm font-semibold text-steel">Cargando leads...</div>
      ) : leads.length === 0 ? (
        <div className="p-8 text-sm font-semibold text-steel">
          Todavia no hay leads guardados.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[1060px] w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.08em] text-steel">
              <tr>
                <th className="p-4">Fecha</th>
                <th className="p-4">Nombre</th>
                <th className="p-4">Empresa</th>
                <th className="p-4">WhatsApp</th>
                <th className="p-4">Sector</th>
                <th className="p-4">Presupuesto</th>
                <th className="p-4">Urgencia</th>
                <th className="p-4">Paquete</th>
                <th className="p-4">Estado</th>
                <th className="p-4">Ficha</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t border-slate-200">
                  <td className="p-4 text-steel">
                    {new Date(lead.created_at).toLocaleDateString("es-DO")}
                  </td>
                  <td className="p-4 font-bold text-ink">{lead.full_name}</td>
                  <td className="p-4 text-steel">{lead.company}</td>
                  <td className="p-4 text-steel">{lead.whatsapp}</td>
                  <td className="p-4 text-steel">{lead.industry}</td>
                  <td className="p-4 text-steel">{budgetLabels[lead.budget] || lead.budget}</td>
                  <td className="p-4 text-steel">{urgencyLabels[lead.urgency] || lead.urgency}</td>
                  <td className="p-4 font-bold text-navy">{lead.recommended_package}</td>
                  <td className="p-4">
                    <select
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-ink"
                      value={lead.status}
                      onChange={(event) => updateStatus(lead.id, event.target.value as LeadStatus)}
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4">
                    <a className="font-bold text-navy underline" href={`/api/leads/${lead.id}/document`}>
                      Descargar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
