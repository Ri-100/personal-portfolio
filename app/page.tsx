import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { NightSky } from "@/components/NightSky";
import { TechnicalRange } from "@/components/TechnicalRange";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <NightSky />
      <div className="relative z-10">
        <Hero />
        <Experience />
        <TechnicalRange />
        <Work />
      </div>
    </main>
  );
}
