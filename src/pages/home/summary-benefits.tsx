import ProductsImg from "@/assets/products-image.svg"
import { Button } from "@/components/ui/button"

export function SummaryBenefits() {

  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={ProductsImg}
          alt="Thermo Pink Produtos"
          className="object-contain drop-shadow-[0_0_15px_rgba(255,0,153,0.5)] w-[90%]"
        />

        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-pink-500 mb-8 leading-relaxed">
            FACILITE SEU EMAGRECIMENTO
          </h2>

          <p className="text-xl md:text-3xl uppercase font-medium leading-relaxed">De forma natural, inovadora e saudável</p>

          <p className="text-lg md:text-xl">
            <strong>
              Para aquela pessoa que deseja iniciar um método de emagrecimento e nunca tentou nada antes,
              indicamos o ThermoPink.
            </strong> Ele reduzirá o apetite, vai acelerar o metabolismo para queima de gordura, moderar seu apetite e inibir aquela
            vontade incontrolável de comer e te dará mais disposição durante o dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondaryPink"
              className="text-white italic"
            >
              QUERO EMAGRECER
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}