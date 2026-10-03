import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Te Levo Mobile - Seu App de Corridas",
  description:
    "TE LEVO Mobile: aplicativo de mobilidade de Parauapebas. Corridas seguras, preço claro antes de confirmar e suporte local. Baixe o app para Android e iPhone.",
  openGraph: {
    title: "Te Levo Mobile - Seu App de Corridas",
    description: "Corridas seguras em Parauapebas, com preço claro e suporte de quem é daqui.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#176f9d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${outfit.variable}`}>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
