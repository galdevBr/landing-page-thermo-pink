import { OfferCard } from "@/components/offer-card";
import { ShadowedStrokeTitle } from "@/components/shadowed-stroke-title";
import { HotmartButton } from "@/components/ui/button";
import { offersList } from "@/constants/offers-cards-list";
import { animationStagger } from "@/lib/animation";
import { motion } from "framer-motion";

export function ProductOffer() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#65002A] to-[#090003]">
      <div className="container mx-auto space-y-6">
        <ShadowedStrokeTitle text="OFERTA ESPECIAL">
          <><span className="text-white">OFERTA </span>ESPECIAL</>
        </ShadowedStrokeTitle>

        <p className="text-center md:text-2xl mb-12 uppercase italic">
          Aproveite os preços exclusivos do nosso site e escolha o melhor combo para você!
        </p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:max-w-7xl mx-auto place-items-center"
          variants={animationStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {offersList.map((plan, index) => (
            <OfferCard
              key={index}
              product={plan}
            />
          ))}
        </motion.div>
        <div className="mt-12 flex flex-col items-center justify-center text-center gap-8">

          <HotmartButton className="mt-10">CLIQUE AQUI</HotmartButton>
        </div>
      </div>
    </section>
  )
}