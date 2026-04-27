import type { LeadPayload } from "./types";

const leadEmailTo = process.env.LEAD_EMAIL_TO || "mvogsrl@gmail.com";
const leadEmailFrom =
  process.env.LEAD_EMAIL_FROM || "MVOG SRL <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <th style="text-align:left;padding:10px;border:1px solid #e5e7eb;background:#f8fafc;width:34%;">${escapeHtml(label)}</th>
      <td style="padding:10px;border:1px solid #e5e7eb;">${escapeHtml(value || "No indicado")}</td>
    </tr>`;
}

export function buildLeadEmailHtml(lead: LeadPayload, recommendedPackage: string) {
  return `<!doctype html>
<html lang="es">
<body style="margin:0;background:#f3f4f6;font-family:Arial,sans-serif;color:#111827;">
  <div style="max-width:720px;margin:0 auto;padding:28px 16px;">
    <div style="background:#0f172a;color:#ffffff;border-radius:18px;padding:24px;">
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#67e8f9;">Nuevo lead MVOG SRL</p>
      <h1 style="margin:0;font-size:28px;line-height:1.15;">${escapeHtml(lead.company)}</h1>
      <p style="margin:12px 0 0;color:#cbd5e1;">Paquete recomendado: <strong style="color:#ffffff;">${escapeHtml(recommendedPackage)}</strong></p>
    </div>

    <div style="margin-top:16px;background:#ffffff;border-radius:18px;padding:20px;border:1px solid #e5e7eb;">
      <h2 style="margin:0 0 12px;font-size:18px;">Datos del lead</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row("Empresa", lead.company)}
        ${row("Persona de contacto", lead.fullName)}
        ${row("Email", lead.email)}
        ${row("WhatsApp", lead.whatsapp)}
        ${row("Pais", lead.country)}
        ${row("Sector/nicho", lead.industry)}
        ${row("Web actual", lead.currentWebsite)}
        ${row("Necesita", lead.mainProducts)}
      </table>
    </div>

    <div style="margin-top:16px;background:#ffffff;border-radius:18px;padding:20px;border:1px solid #e5e7eb;">
      <h2 style="margin:0 0 12px;font-size:18px;">Descripcion y objetivo</h2>
      <p style="white-space:pre-wrap;margin:0;font-size:15px;line-height:1.6;">${escapeHtml(lead.commercialProblem || lead.idealClient)}</p>
    </div>

    <div style="margin-top:16px;background:#ecfeff;border:1px solid #a5f3fc;border-radius:18px;padding:18px;">
      <p style="margin:0;font-size:14px;line-height:1.6;">
        Proximo paso sugerido: revisar la web actual, responder al lead y preparar demo/propuesta inicial.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendLeadEmail(lead: LeadPayload, recommendedPackage: string) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      sent: false,
      reason: "RESEND_API_KEY is not configured.",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: leadEmailFrom,
      to: [leadEmailTo],
      reply_to: lead.email,
      subject: `Nuevo lead MVOG: ${lead.company}`,
      html: buildLeadEmailHtml(lead, recommendedPackage),
      text: [
        "Nuevo lead MVOG SRL",
        "",
        `Empresa: ${lead.company}`,
        `Contacto: ${lead.fullName || "No indicado"}`,
        `Email: ${lead.email}`,
        `WhatsApp: ${lead.whatsapp || "No indicado"}`,
        `Pais: ${lead.country || "No indicado"}`,
        `Sector: ${lead.industry}`,
        `Web actual: ${lead.currentWebsite || "No indicada"}`,
        `Necesita: ${lead.mainProducts}`,
        `Paquete recomendado: ${recommendedPackage}`,
        "",
        "Descripcion:",
        lead.commercialProblem || lead.idealClient,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email failed: ${errorText}`);
  }

  const data = (await response.json()) as { id?: string };
  return {
    sent: true,
    id: data.id,
  };
}
