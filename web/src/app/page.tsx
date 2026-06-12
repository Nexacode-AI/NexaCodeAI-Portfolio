import About from "@/components/About";
import Contact from "@/components/Contact";
import FogBackground from "@/components/FogBackground";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import KineticBand from "@/components/KineticBand";
import Navbar from "@/components/Navbar";
import ScrollLine from "@/components/ScrollLine";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative">
      <FogBackground />
      <ScrollLine />
      <Navbar />
      <Hero />
      <KineticBand words={["Build", "Deploy", "Scale", "Automate"]} />
      <About />
      <Services />
      <TechStack />
      <Industries />
      <Work />
      <KineticBand
        words={["Let's build", "your AI", "together"]}
        reverse
      />
      <Contact />
      <Footer />
    </main>
  );
}
