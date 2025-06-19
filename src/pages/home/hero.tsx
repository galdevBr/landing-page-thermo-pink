import ThermoPinkLogo from "@/assets/logo-thermo.png";
import { lazy, Suspense } from 'react';

import { Button } from "@/components/ui/button";
import { CircleCheckBig, Loader } from "lucide-react";

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
    <section className="relative w-full px-4 md:px-8 lg:px-16 mb-20">
      <div className="absolute top-[-450px] left-[-450px] w-[900px] h-[900px] md:w-[900px] md:h-[900px] bg-pink-500 opacity-20 rounded-full filter blur-[100px] z-0" />
      <div className="absolute bottom-[-400px] right-[-600px] w-[900px] h-[900px] md:w-[900px] md:h-[900px] bg-pink-500 opacity-20 rounded-full filter blur-[100px] z-0" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-8 pt-8 md:pt-20">
          <div className="flex justify-center md:justify-start">
            <img src={ThermoPinkLogo} alt="Thermo Pink Produto" />
          </div>

          <h1 className="text-4xl md:text-[5rem] font-extrabold text-pink-500 italic uppercase pr-10 text-center md:text-start">PARA SECAR SUA BARRIGA</h1>

          <p className="text-xl md:text-3xl uppercase font-medium italic text-center md:text-start">Com muito mais energia</p>
          <p className="text-lg md:text-xl font-medium md:w-2/3 text-center md:text-start">
            Experimente o único termogênico 100% natural que acelera a queima de gordura, eleva a sua disposição e reduz o inchaço.
          </p>


          <div className="flex flex-col gap-8 max-w-full md:max-w-max justify-start md:items-center">
            <div className="border-2 rounded-lg border-pink-600 p-6 grid grid-cols-2 gap-4 max-w-fit mx-auto">
              {prosList.map(item => (
                <div key={item} className="flex items-center gap-2 col-span-1">
                  <CircleCheckBig className="text-pink-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 self-center">
              <Button >
                COMPRAR AGORA
              </Button>
            </div>
          </div>
        </div>


        <Suspense fallback={<div className="flex items-center justify-center animate-spin"><Loader /></div>}>
          <HeroImg />
        </Suspense>
        {/* <div className="mt-0 hidden lg:flex -ml-32">
          <img
            src={HeroImg}
            alt="Thermo Pink Produto"
            // loading="lazy"
          />
        </div> */}
      </div>
    </section>
  )
}