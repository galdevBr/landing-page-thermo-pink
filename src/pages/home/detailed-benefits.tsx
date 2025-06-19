import DetailedProductImg from "@/assets/detail-benefits-product-image.png";
import FormulaImg from "@/assets/formula-logo.png";
import USAImportImg from "@/assets/usa-import-logo.png";
import { CheckCircle } from "lucide-react";

export function DetailedBenefits() {
  const benefitsList = [
    "ATIVAÇÃO DO METABOLISMO",
    "AUXILIA NA QUEIMA DE GORDURA",
    "REDUÇÃO DO APETITE",
    "FORMULAÇÃO LIMPA",
    "VITAMINAS PARA AUXILIAR NO PROCESSO METABÓLICO",
    "AUMENTO DE ENERGIA",
    "MELHORA A PERFORMANCE FUNCIONAL",
    "AUMENTO DA CAPACIDADE DE RESISTÊNCIA E NO DESEMPENHO DOS EXERCÍCIOS FÍSICOS",
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:w-3/4">
        <div className="space-y-4 mx-auto w-3/4">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-pink-400 h-6 w-6 flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-semibold text-sm md:text-base italic">{benefit}</p>
            </div>
          ))}
          <div className="flex gap-4 mt-8 ml-8">
            <img
              src={USAImportImg}
              alt="USA Import image"
              width={60}
              height={60}
              className="object-contain"
            />
            <img
              src={FormulaImg}
              alt="Formula image"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <img
            src={DetailedProductImg}
            alt="Thermo Pink Produto"
            // fill
            className="object-contain h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}