import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Statement } from "@/components/statement";
import { Work } from "@/components/work";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
