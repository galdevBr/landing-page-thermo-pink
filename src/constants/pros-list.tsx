import EfficiencyIcon from '@/assets/icons/100-icon.svg'
import DangerIcon from "@/assets/icons/danger.svg"
import LeafIcon from "@/assets/icons/leaves.svg"
import LinkIcon from "@/assets/icons/link.svg"

export const prosList = [
  { icon: <img src={LeafIcon} className="w-8 h-8 md:w-12 md:h-12" alt="leaf icon" />, text: 'Componentes Naturais' },
  { icon: <img src={DangerIcon} className="w-8 h-8 md:w-12 md:h-12" alt="danger icon" />, text: 'Sem Efeitos Colaterais' },
  { icon: <img src={LinkIcon} className="w-8 h-8 md:w-12 md:h-12" alt="link icon" />, text: 'Sem Causar Dependência' },
  { icon: <img src={EfficiencyIcon} className="w-8 h-8 md:w-12 md:h-12" alt="efficiency icon" />, text: '100% Eficaz' },
]