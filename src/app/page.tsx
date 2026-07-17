import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Noise aesthetic overlay */}
      <div className="noise-overlay" />
      
      {/* Immersive cursor */}
      <CustomCursor />
      
      {/* Main navigation */}
      <Navbar />
      
      {/* Layout sequence */}
      <main className="flex flex-col w-full min-h-screen bg-[#030307]">
        {/* Hero Landing */}
        <Hero />
        
        {/* Horizontal Life Milestones Scroll */}
        <Timeline />
        
        {/* Experience Dashboard & Matrix */}
        <Experience />
        
        {/* Call Me / Callbacks */}
        <Contact />
      </main>
    </SmoothScroll>
  );
}
