import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import KeyFeatures from "@/components/KeyFeatures";
import AiAssistant from "@/components/AiAssistant";
import HemisIntegration from "@/components/HemisIntegration";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <KeyFeatures />
        <AiAssistant />
        <HemisIntegration />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
