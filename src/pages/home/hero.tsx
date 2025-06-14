import HeroImg from "@/assets/hero-image.svg";
// import HeroImg from "@/assets/hero-image.png";
import ThermoPinkLogo from "@/assets/logo-thermo.png";

import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";

export function Hero() {
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

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-8 pt-8 md:pt-20">
          <img src={ThermoPinkLogo} alt="Thermo Pink Produto" className="" />
          <h1 className="text-4xl md:text-[5rem] font-extrabold text-pink-500 italic uppercase pr-10">PARA SECAR SUA BARRIGA</h1>

          <p className="text-xl md:text-3xl uppercase font-medium italic">Com muito mais energia</p>
          <p className="text-lg md:text-xl font-medium w-2/3">
            Experimente o único termogênico 100% natural que acelera a queima de gordura, eleva a sua disposição e reduz o inchaço.
          </p>

          <div className="border-2 rounded-lg border-pink-600 p-6 grid grid-cols-2 gap-4 max-w-fit">
            {prosList.map(item => (
              <div key={item} className="flex items-center gap-2 col-span-1">
                <CircleCheckBig className="text-pink-500" />
                <p className="text-sm">{item}</p>
              </div>
            ))}

          </div>

          <div className="flex flex-col sm:flex-row gap-4 ">
            <Button >
              COMPRAR AGORA
            </Button>
          </div>
        </div>


        {/* //TODO: FIX IMAGE */}
        {/* <div className="h-[400px] md:h-[500px]"> */}
        <div className="mt-0 hidden md:flex -ml-32">
          <img
            src={HeroImg}
            alt="Thermo Pink Produto"
            // className="object-contain drop-shadow-[0_0_15px_rgba(255,0,153,0.5)]"

          // priority
          />
        </div>
      </div>
    </section>
  )
}