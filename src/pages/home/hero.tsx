import ThermoPinkLogo from "@/assets/logo-thermo.png";
import { lazy, Suspense } from 'react';

import { LoaderComponent } from "@/components/loader";
import { HotmartButton } from "@/components/ui/button";
import { animationFadeInDown, animationStagger } from "@/lib/animation";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

export function Hero() {
  const HeroImg = lazy(() => import("../../components/hero-img"));

  const prosList = [
    'Acelera o metabolismo',
    'Queima gordura',
    'Controla o apetite',
    'Emagrecimento natural',
    'Reduz o inchaço',
    'Da energia e disposição'
  ]

  return (
    <motion.section className="relative w-full px-4 md:px-8 lg:px-16 mb-20" variants={animationStagger} initial="initial" animate="animate">
      <div className="absolute top-[-450px] left-[-450px] w-[900px] h-[900px] md:w-[900px] md:h-[900px] bg-pink-500 opacity-20 rounded-full filter blur-[100px] z-0" />
      <div className="absolute bottom-[-400px] right-[-600px] w-[900px] h-[900px] md:w-[900px] md:h-[900px] bg-pink-500 opacity-20 rounded-full filter blur-[100px] z-0" />

      <motion.div className="container mx-auto grid grid-cols-1 lg:grid-cols-2" variants={animationStagger} initial="initial" animate="animate">
        <motion.div className="space-y-8 pt-8 md:pt-20" variants={animationStagger} initial="initial" animate="animate">
          <motion.div className="flex justify-center md:justify-start" variants={animationFadeInDown}>
            <img src={ThermoPinkLogo} alt="Logo da marca Thermo Pink" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-[5rem] font-extrabold text-pink-500 italic uppercase pr-10 text-center md:text-start"
            variants={animationFadeInDown}
          >
            PARA SECAR SUA BARRIGA
          </motion.h1>

          <motion.p className="text-xl md:text-3xl uppercase font-medium italic text-center md:text-start" variants={animationFadeInDown}>Com muito mais energia</motion.p>
          <motion.p className="text-lg md:text-xl font-medium md:w-2/3 text-center md:text-start" variants={animationFadeInDown}>
            Experimente o único termogênico 100% natural que acelera a queima de gordura, eleva a sua disposição e reduz o inchaço.
          </motion.p>


          <div className="flex flex-col gap-8 max-w-full md:max-w-max justify-start md:items-center">
            <motion.div 
              className="border-2 rounded-lg border-pink-600 p-6 grid grid-cols-2 gap-4 max-w-fit mx-auto"
              variants={animationFadeInDown}
            >
              {prosList.map(item => (
                <div key={item} className="flex items-center gap-2 col-span-1">
                  <CircleCheckBig className="text-pink-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 self-center" variants={animationFadeInDown}>
              <HotmartButton>
                COMPRAR AGORA
              </HotmartButton>
            </motion.div>
          </div>
        </motion.div>

        <Suspense fallback={<LoaderComponent />}>
          <HeroImg />
        </Suspense>
      </motion.div>
    </motion.section>
  )
}