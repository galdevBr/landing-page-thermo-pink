import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqList } from "@/constants/faq-list";

export function FAQSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-pink-400 z-10" id="faq">
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
          <Button
            className="bg-black hover:bg-black/80 cursor-pointer"
            asChild
          >
            <a href='https://wa.me/5515997475220/?text=Olá%2C+tenho+interesse+em+saber+mais+sobre+o+produto' target="_blank" rel="noopener noreferrer">
              FALE CONOSCO
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}