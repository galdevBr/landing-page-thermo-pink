import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FAQSection() {
  const faqList = [
    { question: "Thermo Pink vai me ajudar na queima de gordura?", answer: "Sim! A fórmula foi desenvolvida com ingredientes que aceleram o metabolismo e auxiliam na queima de gordura corporal de forma natural." },
    { question: "Tenho sensibilidade a cafeína, posso tomar?", answer: "Pode sim, nossa fórmula foi pensada para oferecer energia sem causar desconfortos, mesmo para pessoas mais sensíveis. Porém, recomendamos começar com meia dose e observar como seu corpo reage. (Consulte seu médico)." },
    { question: "Este produto é natural?", answer: "Sim, o Thermo Pink é composto por ingredientes naturais e seguros, com vitaminas minerais, extratos vegetais selecionados e estimulantes (cafeína)." },
    { question: "Grávidas, lactantes e pacientes com doenças cardiovasculares, podem usar o produto?", answer: "Este grupo deve consultar um médico antes de consumir qualquer suplemento, incluindo o Thermo Pink. A segurança vem em primeiro lugar!" },
    { question: "Em quanto tempo começo a ver os resultados?", answer: "Os primeiros efeitos como aumento de energia e disposição podem ser percebidos nos primeiros dias. Já os resultados relacionados à queima de gordura e medidas costumam aparecer em 2 a 4 semanas, com uso contínuo e estilo de vida saudável." },
    { question: "Existe algum efeito colateral ou contraindicação?", answer: "O produto é seguro para a maioria das pessoas, mas por conter ativos termogênicos, pode causar leve aumento na frequência cardíaca ou agitação em pessoas muito sensíveis. Não é indicado para menores de 18 anos, gestantes ou pessoas com hipertensão sem acompanhamento médico." },
    { question: "O site é seguro?", answer: "Sim! Utilizamos tecnologia de criptografia SSL e contamos com os principais selos de segurança do mercado para proteger suas informações e garantir uma compra tranquila." },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-pink-400">
      <div className="container mx-auto max-w-5xl">
        <p className="text-3xl md:text-6xl font-bold text-black mb-12 text-center italic">PERGUNTAS FREQUENTES</p>

        <Accordion type="single" collapsible>
          {faqList.map((faq, index) => (
            <AccordionItem value={`faq-${faq.question + index}`} key={`faq-${faq.question + index}`}>
              <AccordionTrigger className="flex items-center font-bold text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="pl-4 text-lg italic text-foreground font-medium">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center space-y-6">
          <p className="text-3xl md:text-5xl italic font-bold text-black">ALGUMA DÚVIDA?</p>
          <Button className="bg-black hover:bg-black/80">FALE CONOSCO</Button>
        </div>
      </div>
    </section>
  )
}