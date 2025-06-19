import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutDialog({ isOpen, onClose }: IProps) {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white text-3xl font-bold">
            Thermo Pink
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 text-white">
          <div>
            <p className="text-lg font-bold">Sobre nós</p>
            <p>
              Somos uma empresa focada em ajudar pessoas a atingirem seus objetivos de forma mais rápida e saudável. Nosso produto é um termogênico de alta qualidade, formulado para acelerar o metabolismo, aumentar a queima de gordura e dar mais energia no dia a dia.
            </p>
          </div>

          <div>
            <p className="text-lg font-bold">Missão</p>
            <p>
              Nossa missão é transformar a jornada de emagrecimento das pessoas, oferecendo um produto eficaz, seguro e acessível, que potencialize resultados e promova bem-estar.
            </p>
          </div>

          <div>
            <p className="text-lg font-bold">Objetivo</p>
            <p>
              Nosso objetivo é ser referência na venda de termogênicos no Brasil, entregando qualidade, confiança e resultados reais para quem deseja emagrecer com mais disposição e saúde.
            </p>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="rounded-lg" size="default">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}