import { NextResponse } from "next/server";
import { generateLeadDocumentHtml } from "@/lib/document";
import { sendLeadEmail } from "@/lib/email";
import { recommendPackage } from "@/lib/recommendation";
import { getSupabaseAdmin } from "@/lib/supabase";
import {
  normalizeDemoLeadPayload,
  normalizeLeadPayload,
  validateDemoLeadPayload,
  validateLeadPayload,
} from "@/lib/validation";

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("leads_mvog")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ leads: data ?? [] });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const isDemoForm = "sector" in body || "service" in body || "description" in body;
    const payload = isDemoForm
      ? normalizeDemoLeadPayload(body)
      : normalizeLeadPayload(body);
    const validation = isDemoForm
      ? validateDemoLeadPayload(payload)
      : validateLeadPayload(payload);

    if (!validation.ok) {
      return NextResponse.json(
        { error: "Campos requeridos incompletos.", missing: validation.missing },
        { status: 400 },
      );
    }

    const recommendation = isDemoForm
      ? recommendDemoPackage(payload.mainProducts)
      : recommendPackage(payload.budget);
    const documentHtml = generateLeadDocumentHtml(payload, recommendation);

    const emailResult = await sendLeadEmail(payload, recommendation.packageName);
    let leadId: string | null = null;

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = getSupabaseAdmin();

      const { data, error } = await supabase
        .from("leads_mvog")
        .insert({
          full_name: payload.fullName,
          company: payload.company,
          role: payload.role,
          email: payload.email,
          whatsapp: payload.whatsapp,
          country: payload.country,
          city: payload.city,
          industry: payload.industry,
          ideal_client: payload.idealClient,
          average_ticket: payload.averageTicket,
          main_products: payload.mainProducts,
          current_website: payload.currentWebsite,
          social_networks: payload.socialNetworks,
          current_lead_capture: payload.currentLeadCapture,
          monthly_leads: payload.monthlyLeads,
          follow_up_process: payload.followUpProcess,
          uses_crm: payload.usesCrm,
          commercial_problem: payload.commercialProblem,
          lost_sales_point: payload.lostSalesPoint,
          objectives: payload.objectives,
          other_objective: payload.otherObjective,
          budget: payload.budget,
          urgency: payload.urgency,
          consent: payload.consent,
          recommended_package: recommendation.packageName,
          status: "Nuevo",
          lead_document_html: documentHtml,
        })
        .select("id")
        .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      leadId = data.id;
    }

    return NextResponse.json({
      id: leadId,
      emailSent: emailResult.sent,
      emailId: emailResult.id,
      emailWarning: emailResult.sent ? undefined : emailResult.reason,
      recommendedPackage: recommendation.packageName,
      documentHtml,
      documentUrl: leadId ? `/api/leads/${leadId}/document` : null,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500 },
    );
  }
}

function recommendDemoPackage(service: string) {
  if (service.includes("USD 100")) {
    return {
      packageName: "Landing Simple - USD 100",
      nextStep: "Preparar demo visual de landing simple y CTA de contacto.",
    };
  }

  if (service.includes("USD 200")) {
    return {
      packageName: "Web Completa - USD 200",
      nextStep: "Preparar estructura de web completa con servicios, sobre nosotros y contacto.",
    };
  }

  if (service.toLowerCase().includes("webapp")) {
    return {
      packageName: "Webapp / Sistema de gestion - USD 500 a USD 1,000+",
      nextStep: "Agendar diagnostico para definir alcance, pantallas y flujo operativo.",
    };
  }

  return {
    packageName: "Pendiente de diagnostico",
    nextStep: "Revisar necesidad y recomendar si conviene landing, web completa o sistema.",
  };
}
