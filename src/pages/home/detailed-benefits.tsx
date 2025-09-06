import DetailedProductImg from "@/assets/detail-benefits-product-image.png";
import FormulaImg from "@/assets/formula-logo.png";
import USAImportImg from "@/assets/usa-import-logo.png";
import { benefitsList } from "@/constants/benefits-list";
import { animationFadeInDown, animationStagger } from "@/lib/animation";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function DetailedBenefits() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:w-3/4">
        <motion.div
          className="space-y-4 mx-auto w-3/4"
          variants={animationStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefitsList.map((benefit, index) => (
            <motion.div key={index} className="flex items-start gap-3" variants={animationFadeInDown}>
              <CheckCircle className="text-pink-400 h-6 w-6 flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-semibold text-sm md:text-base italic">{benefit}</p>
            </motion.div>
          ))}
          <motion.div 
            className="flex gap-4 mt-8 ml-8"
            variants={animationStagger}
          >
            <motion.img
              src={USAImportImg}
              alt="USA Import image"
              width={60}
              height={60}
              className="object-contain"
              variants={animationFadeInDown}
            />
            <motion.img
              src={FormulaImg}
              alt="Formula image"
              width={60}
              height={60}
              className="object-contain"
              variants={animationFadeInDown}
            />
          </motion.div>
        </motion.div>

        <div className="hidden md:flex items-center justify-center">
          <img
            src={DetailedProductImg}
            alt="Frascos dos produtos Thermo Pink"
            // fill
            className="object-contain h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}