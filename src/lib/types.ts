export type BudgetRange = "under_150" | "150_1200" | "1200_3000" | "over_3000";

export type Urgency = "immediate" | "this_month" | "next_3_months" | "evaluating";

export type LeadStatus =
  | "Nuevo"
  | "Contactado"
  | "Diagnostico enviado"
  | "Propuesta enviada"
  | "Cerrado"
  | "Perdido";

export type LeadPayload = {
  fullName: string;
  company: string;
  role: string;
  email: string;
  whatsapp: string;
  country: string;
  city: string;
  industry: string;
  idealClient: string;
  averageTicket: string;
  mainProducts: string;
  currentWebsite: string;
  socialNetworks: string;
  currentLeadCapture: string;
  monthlyLeads: string;
  followUpProcess: string;
  usesCrm: "si" | "no" | "";
  commercialProblem: string;
  lostSalesPoint: string;
  objectives: string[];
  otherObjective: string;
  budget: BudgetRange | "";
  urgency: Urgency | "";
  consent: boolean;
};

export type LeadRecord = LeadPayload & {
  id: string;
  created_at: string;
  recommended_package: string;
  status: LeadStatus;
  lead_document_html: string;
};
