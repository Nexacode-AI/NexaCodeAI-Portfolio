import About from "@/components/About";
import Chatbots from "@/components/Chatbots";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FogBackground from "@/components/FogBackground";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import KineticBand from "@/components/KineticBand";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import ScrollLine from "@/components/ScrollLine";
import Services from "@/components/Services";
import StickyCTA from "@/components/StickyCTA";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative">
      <FogBackground />
      <ScrollLine />
      <StickyCTA />
      <Navbar />
      <Hero />
      <KineticBand words={["Build", "Deploy", "Scale", "Automate"]} />
      <About />
      <Services />
      <Chatbots />
      <TechStack />
      <Industries />
      <Process />
      <Work />
      <FAQ />
      <KineticBand words={["Let's build", "your AI", "together"]} reverse />
      <Contact />
      <Footer />
    </main>
  );
}
