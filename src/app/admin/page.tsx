import { AdminLeadsTable } from "@/components/AdminLeadsTable";
import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-pearl px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Link href="/" className="text-sm font-bold text-navy underline">
              Volver a la landing
            </Link>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-ink md:text-6xl">
              Dashboard MVOG
            </h1>
            <p className="mt-3 max-w-2xl text-steel">
              Vista operativa para revisar leads, descargar fichas y mover cada
              oportunidad por el flujo comercial.
            </p>
          </div>
          <div className="rounded-lg bg-ink px-5 py-4 text-sm font-semibold text-white">
            MVP interno. Agregar autenticacion antes de produccion.
          </div>
        </div>
        <AdminLeadsTable />
      </div>
    </main>
  );
}
