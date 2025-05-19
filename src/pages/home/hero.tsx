import HeroImg from "@/assets/hero-image.svg";
import ThermoPinkLogo from "@/assets/logo-thermo-pink.svg";

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
    <section className="relative w-full px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-8 pt-8 md:pt-20">
          <img src={ThermoPinkLogo} alt="Thermo Pink Produto" className="w-36" />
          <h1 className="text-4xl md:text-[5rem] font-extrabold text-pink-500 italic uppercase">PARA SECAR SUA BARRIGA</h1>

          <p className="text-xl md:text-3xl uppercase font-medium italic">Com muito mais energia</p>
          <p className="text-lg md:text-xl font-medium">
            Experimente o único termogênico 100% natural que acelera a queima de gordura, eleva a sua disposição e reduz o inchaço.
          </p>

          <div className="border rounded-lg border-pink-600 p-4 grid grid-cols-2 gap-4 max-w-fit">
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
        <div className="mt-0 hidden md:flex md:w-[1050px] -ml-32">
          <img
            src={HeroImg}
            alt="Thermo Pink Produto"
            className="object-contain drop-shadow-[0_0_15px_rgba(255,0,153,0.5)]"
          // priority
          />
        </div>
      </div>
    </section>
  )
}