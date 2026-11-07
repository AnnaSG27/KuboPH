
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kubo PH | Gestión de propiedad horizontal",
  description:
    "Plataforma integral para la gestión y administración de copropiedades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-800 antialiased md:flex`}
      >
        <Sidebar />

        <main className="min-w-0 flex-1 p-5 md:p-10">
          {children}
        </main>
      </body>
    </html>
  );
}
