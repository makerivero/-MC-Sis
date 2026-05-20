import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InteractiveDemos } from "@/components/InteractiveDemos";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InteractiveDemos />
        <Pricing />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
