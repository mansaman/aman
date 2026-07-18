import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-ink">
      <Hero />
      <Marquee />
    </main>
  );
}
