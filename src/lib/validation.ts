import type { LeadPayload } from "./types";

const requiredTextFields: Array<keyof LeadPayload> = [
  "fullName",
  "company",
  "email",
  "whatsapp",
  "country",
  "city",
  "industry",
  "idealClient",
  "mainProducts",
  "currentLeadCapture",
  "followUpProcess",
  "commercialProblem",
  "lostSalesPoint",
];

export function normalizeLeadPayload(input: unknown): LeadPayload {
  const data = input as Partial<LeadPayload>;

  return {
    fullName: String(data.fullName || "").trim(),
    company: String(data.company || "").trim(),
    role: String(data.role || "").trim(),
    email: String(data.email || "").trim(),
    whatsapp: String(data.whatsapp || "").trim(),
    country: String(data.country || "").trim(),
    city: String(data.city || "").trim(),
    industry: String(data.industry || "").trim(),
    idealClient: String(data.idealClient || "").trim(),
    averageTicket: String(data.averageTicket || "").trim(),
    mainProducts: String(data.mainProducts || "").trim(),
    currentWebsite: String(data.currentWebsite || "").trim(),
    socialNetworks: String(data.socialNetworks || "").trim(),
    currentLeadCapture: String(data.currentLeadCapture || "").trim(),
    monthlyLeads: String(data.monthlyLeads || "").trim(),
    followUpProcess: String(data.followUpProcess || "").trim(),
    usesCrm: data.usesCrm === "si" || data.usesCrm === "no" ? data.usesCrm : "",
    commercialProblem: String(data.commercialProblem || "").trim(),
    lostSalesPoint: String(data.lostSalesPoint || "").trim(),
    objectives: Array.isArray(data.objectives)
      ? data.objectives.map(String).filter(Boolean)
      : [],
    otherObjective: String(data.otherObjective || "").trim(),
    budget: data.budget || "",
    urgency: data.urgency || "",
    consent: Boolean(data.consent),
  };
}

export function validateLeadPayload(payload: LeadPayload) {
  const missing = requiredTextFields.filter((field) => !payload[field]);

  if (!payload.budget) {
    missing.push("budget");
  }

  if (!payload.urgency) {
    missing.push("urgency");
  }

  if (!payload.usesCrm) {
    missing.push("usesCrm");
  }

  if (!payload.consent) {
    missing.push("consent");
  }

  if (!payload.email.includes("@")) {
    missing.push("email");
  }

  return {
    ok: missing.length === 0,
    missing: Array.from(new Set(missing)),
  };
}
