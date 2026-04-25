import { budgetLabels, recommendPackage, urgencyLabels } from "./recommendation";
import type { LeadPayload } from "./types";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string) {
  return `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value || "No indicado")}</td></tr>`;
}

export function generateLeadDocumentHtml(lead: LeadPayload) {
  const recommendation = recommendPackage(lead.budget);
  const budget = lead.budget ? budgetLabels[lead.budget] : "No indicado";
  const urgency = lead.urgency ? urgencyLabels[lead.urgency] : "No indicada";
  const objectives = lead.objectives.length
    ? lead.objectives.join(", ")
    : "No indicados";

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Ficha Comercial del Lead - MVOG</title>
  <style>
    body { font-family: Arial, sans-serif; color: #111827; margin: 40px; line-height: 1.5; }
    h1 { color: #0b1f3a; margin-bottom: 8px; }
    h2 { color: #0b1f3a; border-bottom: 1px solid #d1d5db; padding-bottom: 6px; margin-top: 30px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    th, td { text-align: left; vertical-align: top; border: 1px solid #e5e7eb; padding: 10px; }
    th { width: 28%; background: #f3f4f6; }
    .badge { display: inline-block; background: #d6b25e; color: #090b0f; padding: 6px 10px; border-radius: 999px; font-weight: 700; }
    .note { background: #f8fafc; border-left: 4px solid #d6b25e; padding: 14px; }
  </style>
</head>
<body>
  <h1>Ficha Comercial del Lead - MVOG</h1>
  <p class="badge">${escapeHtml(recommendation.packageName)}</p>

  <h2>Datos generales</h2>
  <table>
    ${row("Nombre completo", lead.fullName)}
    ${row("Empresa", lead.company)}
    ${row("Cargo", lead.role)}
    ${row("Email", lead.email)}
    ${row("WhatsApp", lead.whatsapp)}
    ${row("Pais", lead.country)}
    ${row("Ciudad", lead.city)}
  </table>

  <h2>Informacion del negocio</h2>
  <table>
    ${row("Sector o industria", lead.industry)}
    ${row("Tipo de cliente ideal", lead.idealClient)}
    ${row("Ticket promedio", lead.averageTicket)}
    ${row("Servicios/productos principales", lead.mainProducts)}
    ${row("Pagina web actual", lead.currentWebsite)}
    ${row("Redes sociales", lead.socialNetworks)}
  </table>

  <h2>Diagnostico inicial</h2>
  <table>
    ${row("Como capta leads actualmente", lead.currentLeadCapture)}
    ${row("Leads al mes", lead.monthlyLeads)}
    ${row("Como da seguimiento", lead.followUpProcess)}
    ${row("Usa CRM", lead.usesCrm || "No indicado")}
    ${row("Principal problema comercial", lead.commercialProblem)}
    ${row("Donde pierde ventas", lead.lostSalesPoint)}
  </table>

  <h2>Necesidad principal detectada</h2>
  <p>${escapeHtml(objectives)}${lead.otherObjective ? `, ${escapeHtml(lead.otherObjective)}` : ""}</p>

  <h2>Nivel de urgencia</h2>
  <p>${escapeHtml(urgency)}</p>

  <h2>Presupuesto estimado</h2>
  <p>${escapeHtml(budget)}</p>

  <h2>Paquete recomendado</h2>
  <p>${escapeHtml(recommendation.packageName)}</p>

  <h2>Proximo paso sugerido</h2>
  <p>${escapeHtml(recommendation.nextStep)}</p>

  <h2>Notas internas MVOG</h2>
  <div class="note">Validar decision maker, urgencia real, fuente del lead, restricciones de cumplimiento/KYC/PLAFT y proxima accion de seguimiento.</div>
</body>
</html>`;
}
