import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconSprite } from "@/components/Icons";
import RevealOnScroll from "@/components/RevealOnScroll";
import About from "@/components/sections/About";
import Download from "@/components/sections/Download";
import Drivers from "@/components/sections/Drivers";
import FairPrice from "@/components/sections/FairPrice";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Passengers from "@/components/sections/Passengers";
import Safety from "@/components/sections/Safety";
import Trust from "@/components/sections/Trust";

export default function Home() {
  return (
    <>
      <IconSprite />
      <Header />
      <main>
        <Hero />
        <Trust />
        <Passengers />
        <Safety />
        <HowItWorks />
        <FairPrice />
        <Drivers />
        <About />
        <Faq />
        <Download />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
