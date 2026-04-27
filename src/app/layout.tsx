import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVOG SRL | Webs, webapps y sistemas para empresas",
  description:
    "Creamos paginas web, webapps y sistemas de gestion a demanda. Webs simples desde USD 100. Solicita una demo/propuesta gratis y paga solo si te gusta.",
  openGraph: {
    title: "MVOG SRL | Webs, webapps y sistemas para empresas",
    description:
      "Webs simples desde USD 100. Pide una demo/propuesta gratis y paga solo si te gusta.",
    url: "https://mvogsrl.vercel.app",
    siteName: "MVOG SRL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
