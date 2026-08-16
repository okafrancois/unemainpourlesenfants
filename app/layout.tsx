import type { Metadata } from "next";
import { Caprasimo, Figtree } from "next/font/google";
import "./globals.css";

const caprasimo = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--police-titres",
});

const figtree = Figtree({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--police-corps",
});

export const metadata: Metadata = {
  title: "Une main pour les enfants — Santé, éducation et espoir au Gabon",
  description:
    "Association qui agit pour la santé, l'éducation et l'espoir des enfants des zones les plus reculées du Gabon.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${caprasimo.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
