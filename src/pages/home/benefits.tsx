import AbsorptionIcon from "@/assets/icons/absorption.png"
import BetterHealthIcon from "@/assets/icons/better-health.png"
import CutleryIcon from "@/assets/icons/cutlery.png"
import FormulaIcon from "@/assets/icons/formula.png"
import MedicineIcon from "@/assets/icons/medicine.png"
import MetabolismIcon from "@/assets/icons/metabolism.png"
import PowerIcon from "@/assets/icons/power.png"
import TorsoIcon from "@/assets/icons/torso.png"
import { ShadowedStrokeTitle } from "@/components/shadowed-stroke-title"
import { HotmartButton } from "@/components/ui/button"

export function Benefits() {
  const benefitsList = [
    { title: 'MENOS GORDURA CORPORAL', description: 'Através da aceleração do metabolismo, você queimará mais calorias, diminuindo a gordura', icon: <img src={TorsoIcon} alt="Torso" className="w-12" /> },
    { title: 'MAIOR SACIEDADE ALIMENTAR', description: 'Os compostos naturais de nossa fórmula exclusiva reduzirão o apetite excessivo por alimentos', icon: <img src={CutleryIcon} alt="Cutlery" className="w-12" /> },
    { title: 'MELHOR AUTO ESTIMA E MAIS ENERGIA', description: 'Você sentirá um maior bem estar de forma natural, Além dos benefícios físicos, irá auxiliar no melhor desempenho mental.', icon: <img src={PowerIcon} alt="Power" className="h-12" /> },
    { title: 'FÓRMULA AVANÇADA PARA PERFORMANCE', description: 'Combinamos ingredientes como taurina, cafeína e carnitina para impulsionar sua energia e disposição ao longo do dia.', icon: <img src={FormulaIcon} alt="Shirt" className="w-12" /> },
    { title: 'SUPORTE METABÓLICO', description: 'O extrato de laranja Moro e o picolinato de cromo auxiliam no metabolismo de gorduras e carboidratos, promovendo equilíbrio e bem-estar', icon: <img src={MetabolismIcon} alt="Shirt" className="w-12" />  },
    { title: 'REFORÇO PARA A SAÚDE E IMUNIDADE', description: 'Contém zinco bisglicinato e vitamina D (colecalciferol), essenciais para fortalecer a imunidade e a saúde óssea.', icon: <img src={BetterHealthIcon} alt="Shirt" className="w-12" /> },
    { title: 'COMPLEXO DE VITAMINAS DO BEM-ESTAR', description: 'Vitaminas do complexo B contribuem para a função neuromuscular e a redução do cansaço e da fadiga.', icon: <img src={MedicineIcon} alt="Shirt" className="h-12" /> },
    { title: 'ABSORÇÃO OTIMIZADA', description: 'Com bisglicinato de zinco e picolinato de cromo, garantindo alta biodisponibilidade para melhor aproveitamento dos nutrientes pelo organismo.', icon: <img src={AbsorptionIcon} alt="Shirt" className="w-12" /> },
  ]

  return (
    <section className="relative w-full py-4 md:py-16 px-4 md:px-8 lg:px-16 md:mt-12">
      <div className="absolute bottom-[-500px] right-[-400px] w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-pink-500 opacity-10 rounded-full filter blur-[100px] z-0" />

      <div className="container mx-auto space-y-8">
        <ShadowedStrokeTitle>
          BENEFÍCIOS
        </ShadowedStrokeTitle>

        <p className="text-lg md:text-2xl uppercase font-regular italic text-center">
          Alternativa perfeita para quem realmente deseja perder peso e medidas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:mt-12 md:mx-40">
          {benefitsList.map(item => (
            <div
              key={item.title}
              className="border border-pink-400 flex flex-col items-center justify-center gap-4 p-4 rounded-xl"
            >
              {item.icon && <div>{item.icon}</div>}

              <span className="text-pink-500 font-[Bebas_Neue] text-4xl tracking-tight uppercase font-bold text-center">{item.title}</span>
              <p className="text-sm italic leading-tight text-center">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-16">
          <HotmartButton >
            ATIVE SUA MELHOR VERSÃO
          </HotmartButton>
        </div>
      </div>
    </section>
  )
}