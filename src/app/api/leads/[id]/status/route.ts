import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { LeadStatus } from "@/lib/types";

const allowedStatuses: LeadStatus[] = [
  "Nuevo",
  "Contactado",
  "Diagnostico enviado",
  "Propuesta enviada",
  "Cerrado",
  "Perdido",
];

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const { status } = (await request.json()) as { status?: LeadStatus };

    if (!status || !allowedStatuses.includes(status)) {
      return NextResponse.json({ error: "Estado invalido." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("leads_mvog")
      .update({ status })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ lead: data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500 },
    );
  }
}
