import ProductsImg from "@/assets/products-image.png"
import { HotmartButton } from "@/components/ui/button"

export function SummaryBenefits() {

  return (
    <section className="relative w-full py-12 md:py-0 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={ProductsImg}
            alt="Thermo Pink Produtos"
            className="object-contain w-[90%]"
          />
        </div>

        <div className="space-y-8">
          <p className="text-4xl md:text-6xl font-bold text-pink-500 mb-8 text-center md:text-start">
            FACILITE SEU EMAGRECIMENTO
          </p>

          <p className="text-xl md:text-3xl uppercase font-medium md:w-2/3 text-center md:text-start">De forma natural, inovadora e saudável</p>

          <p className="text-base md:text-lg md:w-2/3 text-center md:text-start">
            <strong>
              Para aquela pessoa que deseja iniciar um método de emagrecimento e nunca tentou nada antes,
              indicamos o ThermoPink.
            </strong> Ele reduzirá o apetite, vai acelerar o metabolismo para queima de gordura, moderar seu apetite e inibir aquela
            vontade incontrolável de comer e te dará mais disposição durante o dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <HotmartButton
              variant="secondaryPink"
              className="text-white italic"
            >
              QUERO EMAGRECER
            </HotmartButton>
          </div>
        </div>
      </div>
    </section>
  )
}