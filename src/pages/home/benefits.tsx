import ShirtIcon from "@/assets/icons/camiseta.svg"
import CutleryIcon from "@/assets/icons/cutlery.svg"
import PowerIcon from "@/assets/icons/power.svg"
import TorsoIcon from "@/assets/icons/torso.svg"
import { ShadowedStrokeTitle } from "@/components/shadowed-stroke-title"
import { Button } from "@/components/ui/button"

export function Benefits() {
  const benefitsList = [
    { title: 'MENOS GORDURA CORPORAL', description: 'Através da aceleração do metabolismo, você queimará mais calorias, diminuindo a gordura', icon: <img src={TorsoIcon} alt="Torso" className="w-12 h-12" /> },
    { title: 'MAIOR SACIEDADE ALIMENTAR', description: 'Os compostos naturais de nossa fórmula exclusiva reduzirão o apetite excessivo por alimentos', icon: <img src={CutleryIcon} alt="Cutlery" className="w-12 h-12" /> },
    { title: 'MELHOR AUTO ESTIMA E ENERGIA', description: 'Você sentirá um maior bem estar de forma natural, Além dos benefícios físicos, irá auxiliar no melhor desempenho mental.', icon: <img src={PowerIcon} alt="Power" className="w-12 h-12" /> },
    { title: 'FÓRMULA AVANÇADA PARA PERFORMANCE', description: 'Combinamos ingredientes como taurina, cafeína e TROCAR AQUI para impulsionar sua energia e disposição ao longo do dia.', icon: <img src={ShirtIcon} alt="Shirt" className="w-12 h-12" /> },
    { title: 'SUPORTE METABÓLICO', description: 'O extrato de laranja Moro e o picolinato de cromo auxiliam no metabolismo de gorduras e carboidratos, promovendo equilíbrio e bem-estar' },
    { title: 'REFORÇO PARA A SAÚDE E IMUNIDADE', description: 'Contém zinco bisglicinato e vitamina D (colecalciferol), essenciais para fortalecer a imunidade e a saúde óssea.' },
    { title: 'COMPLEXO DE VITAMINAS DO BEM-ESTAR', description: 'Vitaminas do complexo B contribuem para a função neuromuscular e a redução do cansaço e da fadiga.' },
    { title: 'ABSORÇÃO OTIMIZADA', description: 'Com bisglicinato de zinco e picolinato de cromo, garantindo alta biodisponibilidade para melhor aproveitamento dos nutrientes pelo organismo.' },
  ]

  return (
    <section className="w-full py-4 md:py-16 px-4 md:px-8 lg:px-16 md:mt-12">
      <div className="container mx-auto space-y-8">
        <ShadowedStrokeTitle>
          BENEFÍCIOS
        </ShadowedStrokeTitle>

        <p className="text-xl md:text-3xl uppercase font-regular italic text-center">
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
              <p className="text-sm italic leading-relaxed text-center">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button >
            QUERO EMAGRECER
          </Button>
        </div>
      </div>
    </section>
  )
}