# MVOG SRL Lead Capture MVP

MVP comercial en Next.js para captar leads, guardar briefing en Supabase, generar una ficha HTML del lead y gestionar estados desde un panel admin simple.

## Stack

- Frontend: Next.js App Router, React, Tailwind CSS
- Backend/API: Next.js Route Handlers
- Base de datos: Supabase
- Documento: ficha HTML descargable generada por el backend
- Preparado para: email, WhatsApp, Google Sheets, Notion o CRM via webhooks

## Estructura

- `src/app/page.tsx`: landing comercial MVOG
- `src/components/LeadBriefingForm.tsx`: formulario de briefing
- `src/app/api/leads/route.ts`: crear y listar leads
- `src/app/api/leads/[id]/document/route.ts`: descargar ficha HTML
- `src/app/api/leads/[id]/status/route.ts`: actualizar estado del lead
- `src/app/admin/page.tsx`: dashboard basico de leads
- `src/lib/*`: Supabase, validacion, recomendacion y generacion de documento
- `supabase/leads_mvog.sql`: SQL de tabla e indices

## Configurar Supabase

1. Crea un proyecto en Supabase.
2. Abre SQL Editor.
3. Ejecuta el contenido de `supabase/leads_mvog.sql`.
   - Si ya habias creado la tabla con la version anterior, ejecuta tambien `supabase/update_budget_150.sql`.
4. Copia la URL del proyecto y la `service_role key`.
5. Crea `.env.local` desde `.env.example`:

```bash
cp .env.example .env.local
```

6. Completa:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Importante: `SUPABASE_SERVICE_ROLE_KEY` solo debe vivir en el servidor. No la publiques en frontend ni en repositorios.

## Correr localmente

```bash
npm install
npm run dev
```

Abre:

- Landing: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`

## Flujo funcional

1. El cliente completa el briefing.
2. `POST /api/leads` valida campos y consentimiento.
3. El backend recomienda paquete segun presupuesto:
   - Menos de USD 150: Lead no calificado / seguimiento educativo
   - USD 150-1,200: Starter
   - USD 1,200-3,000: Growth
   - Mas de USD 3,000: Pro
4. Se genera `lead_document_html`.
5. Se envia un correo automatico con el lead a `mvogsrl@gmail.com`.
6. Si Supabase esta configurado, se guarda todo en `leads_mvog`.
7. El cliente ve confirmacion.
8. MVOG ve el lead en `/admin`, descarga ficha y cambia estado.

## Configurar email automatico

El formulario envia una notificacion interna usando Resend. En Vercel agrega estas variables en Project Settings > Environment Variables:

```bash
RESEND_API_KEY=re_your_api_key
LEAD_EMAIL_TO=mvogsrl@gmail.com
LEAD_EMAIL_FROM=MVOG SRL <onboarding@resend.dev>
```

Para produccion, lo ideal es verificar un dominio en Resend y cambiar `LEAD_EMAIL_FROM` por un remitente propio, por ejemplo `MVOG SRL <leads@tudominio.com>`.

## Despliegue

### Vercel

1. Importa el repositorio.
2. Agrega las variables de entorno en Project Settings.
3. Deploy.

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Agrega las variables de entorno.
4. Usa el runtime/plugin de Next.js de Netlify si el panel lo solicita.

## Seguridad pendiente antes de produccion

- Agregar autenticacion al dashboard `/admin`.
- Restringir acceso a descarga de documentos internos.
- Agregar rate limiting al endpoint de formulario.
- Agregar captcha o proteccion anti-spam.
- Definir politica formal de privacidad y retencion de datos.

## Siguientes mejoras recomendadas

- Generar PDF real con Playwright, React PDF o servicio serverless.
- Enviar email interno a MVOG cuando entra un lead.
- Crear automatizacion WhatsApp/email segun paquete recomendado.
- Sincronizar con Google Sheets, Notion o CRM.
- Agregar lead scoring por reglas de industria, presupuesto, urgencia y dolor comercial.
- Crear filtros y busqueda en el dashboard.
- Agregar autenticacion por usuario y roles.
