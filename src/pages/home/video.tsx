import productImg from "@/assets/video-section-product.png"
import { Button } from "@/components/ui/button"
import { BarChartComponent } from "./mixed-bar-chart"

import EfficiencyIcon from '@/assets/icons/100-icon.svg'
import DangerIcon from "@/assets/icons/danger.svg"
import LeafIcon from "@/assets/icons/leaves.svg"
import LinkIcon from "@/assets/icons/link.svg"

export function Video() {
  const prosList = [
    { icon: <img src={LeafIcon} className="w-8 h-8 md:w-12 md:h-12" alt="leaf icon" />, text: 'Componentes Naturais' },
    { icon: <img src={DangerIcon} className="w-8 h-8 md:w-12 md:h-12" alt="danger icon" />, text: 'Sem Efeitos Colaterais' },
    { icon: <img src={LinkIcon} className="w-8 h-8 md:w-12 md:h-12" alt="link icon" />, text: 'Sem Causar Dependência' },
    { icon: <img src={EfficiencyIcon} className="w-8 h-8 md:w-12 md:h-12" alt="efficiency icon" />, text: '100% Eficaz' },
  ]

  return (
    <section className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="absolute bottom-[200px] left-[-500px] w-[900px] h-[900px] md:w-[1000px] md:h-[1000px] bg-pink-500 opacity-15 rounded-full filter blur-[100px] z-0" />
      <div className="absolute top-[-200px] right-[-600px] w-[900px] h-[900px] md:w-[1000px] md:h-[1000px] bg-pink-400 opacity-25 rounded-full filter blur-[100px] z-0" />


      <div className="container flex flex-col items-center mx-auto space-y-8 md:space-y-12">
        <div className="relative w-full aspect-video bg-pink-500 p-4 mx-auto max-w-5xl rounded-lg">
          <iframe
            className="w-full h-full rounded-lg"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YfmLISW1Dmo?si=eNuORy0x0lsprptG"
            title="YouTube video player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="grid md:grid-cols-2 max-w-5xl gap-8 md:gap-2">
          <div className="flex flex-col justify-center items-center space-y-8 text-center">
            <img
              src={productImg}
              alt="Thermo Pink Produtos"
              className="object-contain h-[150px] md:h-[400px]"
            />

            <div className="inline-flex items-center justify-center italic rounded-lg h-10 p-4 md:px-6 md:py-6 text-xl font-medium border border-pink-500 text-pink-500">
              100% Registrada pela ANVISA
            </div>
          </div>


          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h3 className="text-3xl md:text-5xl font-bold text-pink-500 text-center break-words">
              CIENTIFICAMENTE COMPROVADO!
            </h3>

            <p className="italic uppercase text-center text-sm">
              Para aumentar a quebra da gordura
            </p>

            <BarChartComponent />

            <p className="text-center text-xs text-pink-500">
              Thermo Pink demonstrou induzir a ativação do tecido adiposo marrom, aumentando a perda de gordura corporal em ceca de 33% em comparação ao grupo controle
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              {prosList.map(item => (
                <div key={item.text} className="flex flex-col items-center justify-center gap-3 text-center">
                  {item.icon}
                  <p className="text-xs md:text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Button variant="secondaryPink" className="text-white">COMECE AGORA</Button>
      </div>

    </section>
  )
}