import { Benefits } from "./benefits";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { LoseWeight } from "./lose-weight";
import { SummaryBenefits } from "./summary-benefits";

export function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-background to-black text-white">
      <Hero />
      <SummaryBenefits />
      <Benefits />
      <LoseWeight />
      
      <Footer />
    </main>
  )
}