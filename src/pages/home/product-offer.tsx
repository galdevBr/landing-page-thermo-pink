import productOfferImg from "@/assets/1-product-purchase.png";
import ThreeProductOfferImg from "@/assets/3-products-purchase.png";
import SixProductOfferImg from "@/assets/6-products-purchase.png";
import { OfferCard } from "@/components/offer-card";
import { ShadowedStrokeTitle } from "@/components/shadowed-stroke-title";
import { Button } from "@/components/ui/button";

export function ProductOffer() {
  const offersList = [
    { title: "COMBO 1 MÊS", price: 12900, installments: 1070, numberOfProducts: 1, productImg: productOfferImg, },
    { title: "COMBO 3 MÊS", price: 29700, installments: 2475, numberOfProducts: 3, productImg: ThreeProductOfferImg, isPopular: true },
    { title: "COMBO 6 MÊS", price: 53400, installments: 4450, numberOfProducts: 6, productImg: SixProductOfferImg, },
  ]

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#65002A] to-[#090003]">
      <div className="container mx-auto space-y-6">
        <ShadowedStrokeTitle text="OFERTA ESPECIAL">
          <><span className="text-white">OFERTA </span>ESPECIAL</>
        </ShadowedStrokeTitle>

        <p className="text-center md:text-2xl mb-12 uppercase italic">
          Aproveite os preços exclusivos do nosso site e escolha o melhor combo para você!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:max-w-7xl mx-auto place-items-center">
          {offersList.map((plan, index) => (
            <OfferCard
              key={index}
              product={plan}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center text-center gap-8">

          <Button className="mt-10">CLIQUE AQUI</Button>
        </div>
      </div>
    </section>
  )
}