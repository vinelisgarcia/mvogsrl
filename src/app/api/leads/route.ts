import { NextResponse } from "next/server";
import { generateLeadDocumentHtml } from "@/lib/document";
import { recommendPackage } from "@/lib/recommendation";
import { getSupabaseAdmin } from "@/lib/supabase";
import { normalizeLeadPayload, validateLeadPayload } from "@/lib/validation";

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
    const payload = normalizeLeadPayload(await request.json());
    const validation = validateLeadPayload(payload);

    if (!validation.ok) {
      return NextResponse.json(
        { error: "Campos requeridos incompletos.", missing: validation.missing },
        { status: 400 },
      );
    }

    const recommendation = recommendPackage(payload.budget);
    const documentHtml = generateLeadDocumentHtml(payload);
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
      .select("id, recommended_package, lead_document_html")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      id: data.id,
      recommendedPackage: data.recommended_package,
      documentHtml: data.lead_document_html,
      documentUrl: `/api/leads/${data.id}/document`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500 },
    );
  }
}
