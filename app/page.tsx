import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Experience />
      <Work />
    </main>
  );
}
