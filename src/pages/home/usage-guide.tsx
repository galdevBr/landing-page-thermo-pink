import ThermoPinkLogo from "@/assets/logo-thermo-white.svg";
import UsageGuideCapsuleImg from "@/assets/usage-guide-capsule.png";
import { HotmartButton } from "@/components/ui/button";

export function UsageGuide() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4  items-center">
          <div className="relative flex items-center justify-center">
            <img
              src={UsageGuideCapsuleImg}
              alt="Cápsulas Thermo Pink"
              className="object-contain h-[200px] md:h-[600px]"
            />
          </div>

          <div className="space-y-6 flex flex-col items-center md:items-start">
            <p className="text-3xl md:text-5xl font-bold text-pink-400">MODO DE USO</p>

            <ul className="list-disc space-y-2 pl-4">
              <li className="text-lg text-foreground list-none -ml-4">
                <strong>2 Cápsulas</strong> pela manhã junto ao café, ou 20 min antes do seu treino.
              </li>

              <li className="text-lg text-foreground">
                Cada pote possui 60 cápsulas que duram 30 dias de uso continuo. Thermo Pink é um suplemento e não um medicamento,
                por isso ele é <strong>livre de colaterais e sem contra indicações</strong>, ou seja todos podem estar utilizando ele, exceto
                <strong> gestante e lactantes</strong> (consulte seu médico).
              </li>

              <li className="text-lg text-foreground">
                <strong>Mesmo quem não pratica exercícios</strong> pode estar utilizando o Thermo Pink e também terá os benefícios do Suplemento.
              </li>

            </ul>

            <img src={ThermoPinkLogo} alt="thermo pink logo" className="mt-12" />

            <HotmartButton className="italic mt-6">
              QUERO EMAGRECER
            </HotmartButton>
          </div>

        </div>
      </div>
    </section>
  )
}