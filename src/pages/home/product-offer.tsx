import { OfferCard } from "@/components/offer-card"
import { ShadowedStrokeTitle } from "@/components/shadowed-stroke-title"
import { Button } from "@/components/ui/button"

export function ProductOffer() {
  const url = "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&"

  const offersList = [
    { title: "COMBO 1 MÊS", price: 11900, installments: 1070, numberOfProducts: 1, productImg: url, },
    { title: "COMBO 3 MÊS", price: 21400, installments: 1845, numberOfProducts: 3, productImg: url, isPopular: true },
    { title: "COMBO 6 MÊS", price: 29100, installments: 2661, numberOfProducts: 6, productImg: url, },
  ]

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#91335D] to-[#2d2d2d]">
      <div className="container mx-auto space-y-6">
        <ShadowedStrokeTitle text="OFERTA ESPECIAL">
          <><span className="text-white">OFERTA </span>ESPECIAL</>
        </ShadowedStrokeTitle>

        <p className="text-center md:text-2xl mb-12 uppercase italic">
          Aproveite os preços exclusivos do nosso site e escolha o melhor combo para você!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {offersList.map((plan, index) => (
            <OfferCard
              key={index}
              product={plan}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center text-center gap-8">

          {/* TODO: aumentar margin top */}
          <Button>CLIQUE AQUI</Button>
        </div>
      </div>
    </section>
  )
}