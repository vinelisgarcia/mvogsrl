import type { BudgetRange } from "./types";

export function recommendPackage(budget: BudgetRange | "") {
  if (budget === "under_150") {
    return {
      packageName: "Lead no calificado / seguimiento educativo",
      nextStep:
        "Enviar contenido educativo, explicar alcance minimo y nutrir hasta que exista presupuesto viable.",
    };
  }

  if (budget === "150_1200") {
    return {
      packageName: "Starter",
      nextStep:
        "Preparar diagnostico corto con landing comercial, formulario basico y ficha resumen del lead.",
    };
  }

  if (budget === "1200_3000") {
    return {
      packageName: "Growth",
      nextStep:
        "Preparar propuesta con formulario avanzado, lead scoring, dashboard basico y automatizacion de seguimiento.",
    };
  }

  if (budget === "over_3000") {
    return {
      packageName: "Pro",
      nextStep:
        "Agendar sesion de discovery y preparar flujo completo con documentos, reportes, propuesta y KYC si aplica.",
    };
  }

  return {
    packageName: "Pendiente de calificacion",
    nextStep: "Completar informacion faltante antes de preparar propuesta.",
  };
}

export const budgetLabels: Record<BudgetRange, string> = {
  under_150: "Menos de USD 150",
  "150_1200": "USD 150-1,200",
  "1200_3000": "USD 1,200-3,000",
  over_3000: "Mas de USD 3,000",
};

export const urgencyLabels = {
  immediate: "Inmediato",
  this_month: "Este mes",
  next_3_months: "Proximos 3 meses",
  evaluating: "Solo estoy evaluando",
} as const;
