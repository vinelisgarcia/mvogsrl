alter table public.leads_mvog
drop constraint if exists leads_mvog_budget_check;

-- Optional normalization for old rows if the previous MVP was already receiving leads.
update public.leads_mvog
set budget = 'under_150'
where budget = 'under_500';

update public.leads_mvog
set budget = '150_1200'
where budget = '500_1200';

alter table public.leads_mvog
add constraint leads_mvog_budget_check
check (budget in ('under_150', '150_1200', '1200_3000', 'over_3000'));
