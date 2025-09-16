import IngredientsImg from "@/assets/ingredients-image.png";
import { NutricionalTable } from "@/components/nutricional-table";
import { ingredients } from "@/constants/ingredients";

export function NutricionalDetails() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white" id="nutricional-details">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="max-w-2xl overflow-x-auto">
            <NutricionalTable />
          </div>

          <div className="text-foreground space-y-2 justify-start">
            <p className="uppercase  ">
              <strong>Ingredientes:</strong> {ingredients.join(", ")}
              <strong> Não contém glúten.</strong>
            </p>
            <p>Produto dispensado de obrigatoriedade de registro conforme RDC nº 240/2018.</p>
            <p>Lotes data de fabricação e validade, ver impressão na embalagem.</p>
            <p>24 Meses.</p>
            
            <img src={IngredientsImg} className="flex justify-self-center" />
          </div>

        </div>
      </div>
    </section>
  )
}