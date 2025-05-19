import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
  const faqList = [
    { question: "Thermo Pink vai me ajudar na queima de gordura?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos." },
    { question: "Tenho sensibilidade a cafeína, posso tomar?", answer: "Sim." },
    { question: "Este produto é natural?", answer: "Sim." },
    { question: "Grávidas, lactantes e pacientes com doenças cardiovasculares, podem usar o produto?", answer: "Sim." },
    { question: "Em quanto tempo começo a ver os resultados?", answer: "Loren ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos." },
    { question: "Existe algum efeito colateral ou contraindicação?", answer: "Loren ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos." },
    { question: "O site é seguro?", answer: "Loren ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos." },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-pink-400">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-6xl font-bold text-black mb-12 text-center italic">PERGUNTAS FREQUENTES</h2>

        <Accordion type="single" collapsible>
          {faqList.map((faq, index) => (
            <AccordionItem value={`faq-${faq.question + index}`} key={`faq-${faq.question + index}`}>
              <AccordionTrigger className=" flex items-center font-bold text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}