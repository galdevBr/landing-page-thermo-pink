import { CheckCircle } from "lucide-react";

export function DetailedBenefits() {
  const benefitsList = [
    "ACELERA O METABOLISMO",
    "ATENUA OS DESEJOS DE COMIDA",
    "REDUÇÃO DO APETITE",
    "FORNECIMENTO DE ENERGIA",
    "AUMENTO DA CAPACIDADE FÍSICA",
    "MELHORA A PERFORMANCE FUNCIONAL",
    "REDUÇÃO DA GORDURA CORPORAL",
    "MELHORA A DISPOSIÇÃO PARA O DIA",
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 mx-auto">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-pink-400 h-6 w-6 flex-shrink-0 mt-0.5" />
              <p className="text-foreground text-sm md:text-base italic">{benefit}</p>
            </div>
          ))}
          <div className="flex gap-4 mt-8">
            <img
              src="/placeholder.svg?height=60&width=60"
              alt="Certificado 1"
              width={60}
              height={60}
              className="object-contain"
            />
            <img
              src="/placeholder.svg?height=60&width=60"
              alt="Certificado 2"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative h-[400px]">
          <img
            src="/placeholder.svg?height=500&width=300"
            alt="Thermo Pink Produto"
            // fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}