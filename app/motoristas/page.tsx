import type { Metadata } from "next";
import DriverCta from "@/components/driver/DriverCta";
import DriverFaq from "@/components/driver/DriverFaq";
import DriverHero from "@/components/driver/DriverHero";
import DriverSafety from "@/components/driver/DriverSafety";
import HowToStart from "@/components/driver/HowToStart";
import Requirements from "@/components/driver/Requirements";
import WhyDrive from "@/components/driver/WhyDrive";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RevealOnScroll from "@/components/RevealOnScroll";
import Trust, { type TrustItem } from "@/components/sections/Trust";

export const metadata: Metadata = {
  title: "Seja motorista parceiro | Te Levo Mobile",
  description:
    "Dirija com a TE LEVO em Parauapebas: faça seu horário, tenha ganhos justos e conte com suporte local. Baixe o app do motorista e cadastre-se.",
  openGraph: {
    title: "Seja motorista parceiro | Te Levo Mobile",
    description: "Faça seu horário, tenha ganhos justos e conte com suporte de quem é daqui.",
    type: "website",
  },
};

const navLinks = [
  { href: "#vantagens", label: "Vantagens" },
  { href: "#como-comecar", label: "Como começar" },
  { href: "#requisitos", label: "Requisitos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "/", label: "Para passageiros" },
];

const highlights: TrustItem[] = [
  { icon: "i-calendar", title: "Horário livre", text: "Fique online quando quiser, sem escala fixa." },
  { icon: "i-wallet", title: "Ganhos justos", text: "Um valor digno para quem dirige, em cada corrida." },
  { icon: "i-shield", title: "Mais segurança", text: "Passageiros cadastrados e avaliados." },
  { icon: "i-chat", title: "Suporte local", text: "Equipe de Parauapebas, que responde de perto." },
];

export default function DriversPage() {
  return (
    <>
      <Header links={navLinks} cta={{ href: "#baixar", label: "Quero dirigir" }} />
      <main>
        <DriverHero />
        <Trust items={highlights} />
        <WhyDrive />
        <HowToStart />
        <Requirements />
        <DriverSafety />
        <DriverFaq />
        <DriverCta />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
