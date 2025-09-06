import { ShadowedStrokeTitle } from "@/components/shadowed-stroke-title"
import { HotmartButton } from "@/components/ui/button"
import { benefitsCardList } from "@/constants/benefits-card-list"
import { animationFadeInDown, animationStagger } from "@/lib/animation"
import { motion } from "framer-motion"

export function Benefits() {
  return (
    <motion.section
      id="benefits"
      className="relative w-full py-4 md:py-16 px-4 md:px-8 lg:px-16 md:mt-12"
      variants={animationStagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute bottom-[-500px] right-[-400px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-pink-500 opacity-10 rounded-full filter blur-[100px] z-0" />

      <motion.div className="container mx-auto space-y-8"
        variants={animationStagger}
      >
        <ShadowedStrokeTitle>
          BENEFÍCIOS
        </ShadowedStrokeTitle>

        <p className="text-lg md:text-2xl uppercase font-regular italic text-center">
          Alternativa perfeita para quem realmente deseja perder peso e medidas
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:mt-12 md:mx-40"
        >
          {benefitsCardList.map(item => (
            <motion.div
              key={item.title}
              className="border border-pink-400 flex flex-col items-center justify-center gap-4 p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
              variants={animationFadeInDown}

            >
              {item.icon && <div>{item.icon}</div>}

              <span className="text-pink-500 font-[Bebas_Neue] text-4xl tracking-tight uppercase font-bold text-center">{item.title}</span>
              <p className="text-sm italic leading-tight text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-16" variants={animationFadeInDown}>
          <HotmartButton >
            ATIVE SUA MELHOR VERSÃO
          </HotmartButton>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}