import ThermoPinkLogo from "@/assets/logo-thermo-white.svg";
import { Button } from "@/components/ui/button";

export function UsageGuide() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px]">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Cápsulas Thermo Pink"
              // fill
              className="object-contain"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-400">MODO DE USO</h2>
            <p className="text-lg text-foreground">
              Tomar 2 cápsulas ao dia, preferencialmente 30 minutos antes do café da manhã ou almoço. Para melhores
              resultados, combine com uma dieta equilibrada e exercícios físicos regulares.
            </p>

            <p className="text-lg text-foreground">
              Não exceder a dosagem recomendada. Consulte um médico antes de iniciar qualquer suplementação,
              especialmente se estiver grávida, amamentando ou com condições médicas pré-existentes.
            </p>

            <img src={ThermoPinkLogo} alt="thermo pink logo" />
            <Button className="italic">
              QUERO EMAGRECER
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}