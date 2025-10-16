import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IberiPol connect — PL ⇄ ES B2B",
  description: "Łączymy polskich producentów ze hiszpańskimi dystrybutorami. Pakiet 5 rozmów — 2000 zł.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
