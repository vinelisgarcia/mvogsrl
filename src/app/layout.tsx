import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVOG SRL | Sistema Comercial Automatizado",
  description:
    "MVOG diseña paginas web, formularios inteligentes, automatizacion de leads, dashboards y propuestas comerciales.",
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
