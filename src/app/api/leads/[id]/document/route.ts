import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("leads_mvog")
      .select("lead_document_html")
      .eq("id", id)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: error?.message || "Lead not found" },
        { status: 404 },
      );
    }

    return new Response(data.lead_document_html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Disposition": `attachment; filename="ficha-mvog-${id}.html"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500 },
    );
  }
}
