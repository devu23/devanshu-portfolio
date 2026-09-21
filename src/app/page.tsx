import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FlashWire, ScrollSpineWire } from "@/components/flash-wire";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollSpineWire />
      <main>
        <Hero />
        <FlashWire label="01 // STACK & FOCUS" />
        <Marquee />
        <Services />
        <FlashWire label="02 // SELECTED WORK" />
        <Work />
        <FlashWire label="03 // ENGINEERING MINDSET" />
        <About />
        <FlashWire label="04 // DELIVERY PROCESS" />
        <Process />
        <FlashWire label="05 // INITIATE TRANSMISSION" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
