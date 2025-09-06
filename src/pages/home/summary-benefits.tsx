import ProductsImg from "@/assets/products-image.png";
import { HotmartButton } from "@/components/ui/button";
import { animationFadeInDown, animationStagger } from "@/lib/animation";
import { motion } from "framer-motion";

export function SummaryBenefits() {
  return (
    <motion.section
      className="relative w-full py-12 md:py-0 px-4 md:px-8 lg:px-16"
    >
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={animationStagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div className="flex justify-center md:justify-start" variants={animationFadeInDown}>
          <img
            src={ProductsImg}
            alt="Frascos dos produtos Thermo Pink"
            className="object-contain w-[90%]"
          />
        </motion.div>

        <motion.div className="space-y-8" variants={animationStagger}>
          <motion.p className="text-4xl md:text-6xl font-bold text-pink-500 mb-8 text-center md:text-start" variants={animationFadeInDown}>
            FACILITE SEU EMAGRECIMENTO
          </motion.p>

          <motion.p className="text-xl md:text-3xl uppercase font-medium md:w-2/3 text-center md:text-start" variants={animationFadeInDown}>
            De forma natural, inovadora e saudável
          </motion.p>

          <motion.p className="text-base md:text-lg md:w-2/3 text-center md:text-start" variants={animationFadeInDown}>
            <strong>
              Para aquela pessoa que deseja iniciar um método de emagrecimento e nunca tentou nada antes,
              indicamos o ThermoPink.
            </strong> Ele reduzirá o apetite, vai acelerar o metabolismo para queima de gordura, moderar seu apetite e inibir aquela
            vontade incontrolável de comer e te dará mais disposição durante o dia.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={animationFadeInDown}>
            <HotmartButton
              variant="secondaryPink"
              className="text-white italic"
            >
              QUERO EMAGRECER
            </HotmartButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}