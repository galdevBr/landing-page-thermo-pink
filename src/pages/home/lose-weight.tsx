import ThermoPinkLogo from "@/assets/logo-thermo-white.svg";
import LoseWeightImg from "@/assets/lose-weight-background.png";
import { HotmartButton } from "@/components/ui/button";

export function LoseWeight() {
  return (
    <section className="w-full px-4 mt-4 md:px-8 lg:px-16 bg-white z-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-6 text-foreground py-4 md:py-16 flex flex-col items-center md:items-start">
          <p className="text-4xl md:text-6xl font-bold text-pink-400 text-center md:text-start">EMAGREÇA COM SAÚDE</p>
          <p className="text-lg">
            O poder sinergético do Thermo Pink <strong>transforma o seu corpo</strong> em um potente
            incinerador de gordura, <strong>ajuda reduzir medidas, inibe o apetite</strong>, zera a vontade
            de doces, acelera o seu metabolismo e eleva os níveis de energia, deixando você mais produtivo(a) no seu dia a dia.
          </p>

          <p className="text-lg">
            A eficiência desse <strong>emagrecedor</strong> tem impressionado não só nossos clientes, mas também especialistas em saúde em todo o país.
          </p>

          <p className="text-lg">
            Diante disso, consagrou-se <strong>um dos melhores emagrecedores do mercado</strong>, se tornando
            a <strong>alternativa perfeita para quem realmente deseja perder peso e medidas</strong>.
          </p>

          <img src={ThermoPinkLogo} alt="thermo pink logo" />

          <HotmartButton>QUERO EMAGRECER</HotmartButton>
        </div>

        <div className="pt-4">
          <img
            src={LoseWeightImg}
            alt="Resultados Thermo Pink"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}