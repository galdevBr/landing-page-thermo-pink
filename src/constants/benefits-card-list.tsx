import AbsorptionIcon from "@/assets/icons/absorption.png"
import BetterHealthIcon from "@/assets/icons/better-health.png"
import CutleryIcon from "@/assets/icons/cutlery.png"
import FormulaIcon from "@/assets/icons/formula.png"
import MedicineIcon from "@/assets/icons/medicine.png"
import MetabolismIcon from "@/assets/icons/metabolism.png"
import PowerIcon from "@/assets/icons/power.png"
import TorsoIcon from "@/assets/icons/torso.png"

export const benefitsCardList = [
  { title: 'MENOS GORDURA CORPORAL', description: 'Através da aceleração do metabolismo, você queimará mais calorias, diminuindo a gordura', icon: <img src={TorsoIcon} alt="Torso" className="w-12" /> },
  { title: 'MAIOR SACIEDADE ALIMENTAR', description: 'Os compostos naturais de nossa fórmula exclusiva reduzirão o apetite excessivo por alimentos', icon: <img src={CutleryIcon} alt="Cutlery" className="w-12" /> },
  { title: 'MELHOR AUTO ESTIMA E MAIS ENERGIA', description: 'Você sentirá um maior bem estar de forma natural, Além dos benefícios físicos, irá auxiliar no melhor desempenho mental.', icon: <img src={PowerIcon} alt="Power" className="h-12" /> },
  { title: 'FÓRMULA AVANÇADA PARA PERFORMANCE', description: 'Combinamos ingredientes como taurina, cafeína e carnitina para impulsionar sua energia e disposição ao longo do dia.', icon: <img src={FormulaIcon} alt="Shirt" className="w-12" /> },
  { title: 'SUPORTE METABÓLICO', description: 'O extrato de laranja Moro e o picolinato de cromo auxiliam no metabolismo de gorduras e carboidratos, promovendo equilíbrio e bem-estar', icon: <img src={MetabolismIcon} alt="Shirt" className="w-12" /> },
  { title: 'REFORÇO PARA A SAÚDE E IMUNIDADE', description: 'Contém zinco bisglicinato e vitamina D (colecalciferol), essenciais para fortalecer a imunidade e a saúde óssea.', icon: <img src={BetterHealthIcon} alt="Shirt" className="w-12" /> },
  { title: 'COMPLEXO DE VITAMINAS DO BEM-ESTAR', description: 'Vitaminas do complexo B contribuem para a função neuromuscular e a redução do cansaço e da fadiga.', icon: <img src={MedicineIcon} alt="Shirt" className="h-12" /> },
  { title: 'ABSORÇÃO OTIMIZADA', description: 'Com bisglicinato de zinco e picolinato de cromo, garantindo alta biodisponibilidade para melhor aproveitamento dos nutrientes pelo organismo.', icon: <img src={AbsorptionIcon} alt="Shirt" className="w-12" /> },
]