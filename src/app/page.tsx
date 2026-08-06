import FinalCta from "@/components/home/FinalCta";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Technology from "@/components/home/Technology";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Stats />
        <Process />
        <Technology />
        <Projects />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
