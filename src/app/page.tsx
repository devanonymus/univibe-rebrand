import Ecosystem from "@/components/home-v2/Ecosystem";
import FinalCta from "@/components/home-v2/FinalCta";
import Hero from "@/components/home-v2/Hero";
import Impact from "@/components/home-v2/Impact";
import Manifesto from "@/components/home-v2/Manifesto";
import Method from "@/components/home-v2/Method";
import Projects from "@/components/home-v2/Projects";
import Transformation from "@/components/home-v2/Transformation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Manifesto />
        <Transformation />
        <Impact />
        <Method />
        <Ecosystem />
        <Projects />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
