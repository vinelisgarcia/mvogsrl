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

export function normalizeDemoLeadPayload(input: unknown): LeadPayload {
  const data = input as {
    company?: unknown;
    contact?: unknown;
    email?: unknown;
    whatsapp?: unknown;
    country?: unknown;
    sector?: unknown;
    website?: unknown;
    service?: unknown;
    description?: unknown;
    consent?: unknown;
  };

  const service = String(data.service || "").trim();
  const description = String(data.description || "").trim();

  return {
    fullName: String(data.contact || "").trim(),
    company: String(data.company || "").trim(),
    role: "",
    email: String(data.email || "").trim(),
    whatsapp: String(data.whatsapp || "").trim(),
    country: String(data.country || "").trim(),
    city: "No indicado",
    industry: String(data.sector || "").trim(),
    idealClient: description,
    averageTicket: "",
    mainProducts: service,
    currentWebsite: String(data.website || "").trim(),
    socialNetworks: "",
    currentLeadCapture: "Formulario web MVOG",
    monthlyLeads: "",
    followUpProcess: "Pendiente de diagnostico MVOG",
    usesCrm: "no",
    commercialProblem: description,
    lostSalesPoint: "Pendiente de diagnostico MVOG",
    objectives: [service].filter(Boolean),
    otherObjective: "",
    budget: service.includes("USD 100")
      ? "150_1200"
      : service.includes("USD 200")
        ? "150_1200"
        : service.toLowerCase().includes("webapp")
          ? "1200_3000"
          : "150_1200",
    urgency: "evaluating",
    consent: Boolean(data.consent),
  };
}

export function validateDemoLeadPayload(payload: LeadPayload) {
  const missing: Array<keyof LeadPayload | "description"> = [];

  if (!payload.company) missing.push("company");
  if (!payload.email || !payload.email.includes("@")) missing.push("email");
  if (!payload.industry) missing.push("industry");
  if (!payload.mainProducts) missing.push("mainProducts");
  if (payload.commercialProblem.trim().length < 20) missing.push("description");
  if (!payload.consent) missing.push("consent");

  return {
    ok: missing.length === 0,
    missing: Array.from(new Set(missing)),
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
