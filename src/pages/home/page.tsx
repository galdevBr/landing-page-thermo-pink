import { animationStagger } from "@/lib/animation";
import { motion } from "framer-motion";
import { Benefits } from "./benefits";
import { ContactSection } from "./contact";
import { DetailedBenefits } from "./detailed-benefits";
import { FAQSection } from "./faq";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { LoseWeight } from "./lose-weight";
import { NutricionalDetails } from "./nutricional-details";
import { ProductOffer } from "./product-offer";
import { SummaryBenefits } from "./summary-benefits";
import { UsageGuide } from "./usage-guide";
import { Video } from "./video";

export function Home() {
  return (
    <motion.main 
      className="flex min-h-screen flex-col bg-gradient-to-b from-background to-black text-white overflow-hidden"
      variants={animationStagger}
    >
      <Hero />
      <SummaryBenefits />
      <Benefits />
      <LoseWeight />
      <Video />
      <DetailedBenefits />
      <UsageGuide />
      <NutricionalDetails />
      <ProductOffer />
      <FAQSection />
      <ContactSection />
      <Footer />
    </motion.main>
  )
}