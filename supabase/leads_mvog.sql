create extension if not exists "pgcrypto";

create table if not exists public.leads_mvog (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  full_name text not null,
  company text not null,
  role text,
  email text not null,
  whatsapp text not null,
  country text not null,
  city text not null,

  industry text not null,
  ideal_client text not null,
  average_ticket text,
  main_products text not null,
  current_website text,
  social_networks text,

  current_lead_capture text not null,
  monthly_leads text,
  follow_up_process text not null,
  uses_crm text not null check (uses_crm in ('si', 'no')),
  commercial_problem text not null,
  lost_sales_point text not null,

  objectives text[] not null default '{}',
  other_objective text,
  budget text not null check (budget in ('under_150', '150_1200', '1200_3000', 'over_3000')),
  urgency text not null check (urgency in ('immediate', 'this_month', 'next_3_months', 'evaluating')),
  consent boolean not null default false,

  recommended_package text not null,
  status text not null default 'Nuevo' check (
    status in (
      'Nuevo',
      'Contactado',
      'Diagnostico enviado',
      'Propuesta enviada',
      'Cerrado',
      'Perdido'
    )
  ),
  lead_document_html text not null
);

create index if not exists leads_mvog_created_at_idx on public.leads_mvog (created_at desc);
create index if not exists leads_mvog_status_idx on public.leads_mvog (status);
create index if not exists leads_mvog_budget_idx on public.leads_mvog (budget);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_leads_mvog_updated_at on public.leads_mvog;

create trigger set_leads_mvog_updated_at
before update on public.leads_mvog
for each row
execute function public.set_updated_at();

alter table public.leads_mvog enable row level security;

-- The MVP writes/reads through Next.js API routes with SUPABASE_SERVICE_ROLE_KEY.
-- Keep anon access closed until you intentionally add authenticated policies.
