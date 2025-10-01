import { Hero } from "@/components/Hero";
import { Listing } from "@/components/Listing";
import { INVENTORY } from "@/content/inventory";

export default function Page() {
  return (
    <main>
      <Hero />
      <Listing items={INVENTORY} />
    </main>
  );
}
