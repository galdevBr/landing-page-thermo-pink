import { useRef } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function SuccessDialog() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";

    if (!name || !email) return;

    const message = `Olá,\n Nome: ${name} | Email: ${email}, Gostaria de solicitar o envio do produto.`;

    window.location.href = `https://wa.me/5515997475220?text=${encodeURIComponent(message)}`;
  };

  return (
    <Dialog open={true}>
      <DialogContent
        // className="sm:min-w-1xl md:min-w-2xl lg:min-w-3xl max-w-max"
        className="p-12"
      >
        <DialogHeader>
          <DialogTitle className="text-white text-3xl text-center font-bold">
            Contato
          </DialogTitle>
          <DialogDescription className="max-w-sm text-white text-lg text-center mx-auto my-4">
            Por favor entre em contato com nossa equipe para que possamos acertar os detalhes do envio do produto.
            {/* Informe seus dados para que possamos acertar os detalhes de envio do produto. */}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 text-white">
          <form onSubmit={handleSubmit} className="grid w-full max-w-sm items-center gap-4">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              ref={nameRef}
              required
            />

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              ref={emailRef}
              required
            />

            {/* <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea id="message" placeholder="Informe detalhes do endereço ou observações" ref={messageRef} /> */}

            <Button type="submit" variant="secondary" className="rounded-lg mt-2 h-12" size="full">
              ENVIAR
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}