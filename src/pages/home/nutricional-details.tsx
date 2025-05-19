import { NutricionalTable } from "@/components/nutricional-table";

export function NutricionalDetails() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="max-w-2xl overflow-x-auto">
            <NutricionalTable />
          </div>

          <div className="text-foreground space-y-2 justify-start">
            <p className="uppercase ">
              <strong>Ingredientes:</strong> átaurina, afemina, cafeína, extrato de laranja,
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, porro necessitatibus vitae maiores
              quaerat placeat nulla velit aspernatur cum enim inventore nesciunt labore voluptatum sunt. Consequuntur
              minus fuga perspiciatis officia. <strong>Não contém glúten.</strong>
            </p>
            <p>Produto dispensado de obrigatoriedade de registro conforme ROC nº 240/2018.</p>
            <p>Lotes data de fabricação e validade, ver impressão na embalagem.</p>
            <p>24 Meses.</p>
          </div>

        </div>
      </div>
    </section>
  )
}