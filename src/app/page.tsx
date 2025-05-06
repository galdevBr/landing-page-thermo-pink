import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#1a0011] to-black text-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ff0099]">PARA SECAR SUA BARRIGA</h1>
            <p className="text-lg md:text-xl">O suplemento ideal para quem busca definição e mais energia</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#ff0099] hover:bg-[#d4007e] text-white rounded-full px-8 py-6">
                COMPRAR AGORA
              </Button>
              <Button
                variant="outline"
                className="border-[#ff0099] text-[#ff0099] hover:bg-[#ff009922] rounded-full px-8 py-6"
              >
                SAIBA MAIS
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src="/placeholder.svg?height=500&width=300"
              alt="Thermo Pink Produto"
              // fill
              className="object-contain drop-shadow-[0_0_15px_rgba(255,0,153,0.5)]"
              // priority
            />
          </div>
        </div>
      </section>

      {/* Facilite seu emagrecimento */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#1a0011]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff0099] mb-8 text-center">FACILITE SEU EMAGRECIMENTO</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            De forma natural, com ingredientes selecionados para potencializar seus resultados
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2a0022] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#ff0099] mb-4">COMO FUNCIONA</h3>
              <p>
                Thermo Pink atua diretamente no metabolismo, acelerando a queima de gordura e proporcionando mais
                energia para seus treinos.
              </p>
            </div>
            <div className="bg-[#2a0022] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#ff0099] mb-4">RESULTADOS RÁPIDOS</h3>
              <p>
                Resultados visíveis em poucas semanas quando combinado com alimentação equilibrada e exercícios físicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff0099] mb-12 text-center">BENEFÍCIOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "ACELERA O METABOLISMO",
              "REDUZ A FOME",
              "MAIS ENERGIA",
              "QUEIMA GORDURA",
              "MELHORA A DISPOSIÇÃO",
              "CONTROLE DO APETITE",
              "TERMOGÊNICO NATURAL",
              "RESULTADOS RÁPIDOS",
            ].map((benefit, index) => (
              <div key={index} className="bg-[#2a0022] border border-[#ff0099] p-6 rounded-lg text-center">
                <p className="font-bold text-[#ff0099]">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-[#ff0099] hover:bg-[#d4007e] text-white rounded-full px-8 py-6">
              QUERO EXPERIMENTAR
            </Button>
          </div>
        </div>
      </section>

      {/* Emagreça com saúde */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#ff0099]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">EMAGREÇA COM SAÚDE</h2>
            <p className="text-lg">
              Thermo Pink foi desenvolvido para auxiliar no processo de emagrecimento de forma saudável e eficaz. Com
              ingredientes naturais que ajudam a acelerar o metabolismo e controlar o apetite, você consegue resultados
              mais rápidos quando combinado com uma alimentação equilibrada e exercícios físicos.
            </p>
            <Button className="bg-white text-[#ff0099] hover:bg-gray-100 rounded-full px-8 py-6">SAIBA MAIS</Button>
          </div>
          <div className="relative h-[400px]">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Resultados Thermo Pink"
              // fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#ff0099]">
        <div className="container mx-auto">
          <div className="relative w-full h-[300px] md:h-[400px] bg-black/20 rounded-lg">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Video Thermo Pink"
              // fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#ff0099] border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cientificamente Comprovado */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff0099] mb-12 text-center">
            CIENTIFICAMENTE COMPROVADO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-[#ff0099]">33%</div>
                <div className="text-lg">mais eficiente na queima de gordura</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {["NATURAL", "EFICAZ", "SEGURO"].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full border border-[#ff0099] flex items-center justify-center">
                      <span className="text-[#ff0099]">✓</span>
                    </div>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-[#ff0099] hover:bg-[#d4007e] text-white rounded-full px-8 py-6 w-full">
                COMPRAR AGORA
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/placeholder.svg?height=500&width=300"
                alt="Thermo Pink Produto"
                // fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Detalhados */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px]">
            <img
              src="/placeholder.svg?height=500&width=300"
              alt="Thermo Pink Produto"
              // fill
              className="object-contain"
            />
          </div>
          <div className="space-y-4">
            {[
              "ACELERA O METABOLISMO",
              "ATENUA OS DESEJOS DE COMIDA",
              "REDUÇÃO DO APETITE",
              "FORNECIMENTO DE ENERGIA",
              "AUMENTO DA CAPACIDADE FÍSICA",
              "MELHORA A PERFORMANCE FUNCIONAL",
              "REDUÇÃO DA GORDURA CORPORAL",
              "MELHORA A DISPOSIÇÃO PARA O DIA",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-[#ff0099] h-6 w-6 flex-shrink-0 mt-0.5" />
                <p>{benefit}</p>
              </div>
            ))}
            <div className="flex gap-4 mt-8">
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Certificado 1"
                width={60}
                height={60}
                className="object-contain"
              />
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Certificado 2"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modo de Uso */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#1a0011]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff0099] mb-12 text-center">MODO DE USO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Tomar 2 cápsulas ao dia, preferencialmente 30 minutos antes do café da manhã ou almoço. Para melhores
                resultados, combine com uma dieta equilibrada e exercícios físicos regulares.
              </p>
              <p className="text-lg">
                Não exceder a dosagem recomendada. Consulte um médico antes de iniciar qualquer suplementação,
                especialmente se estiver grávida, amamentando ou com condições médicas pré-existentes.
              </p>
              <Button className="bg-[#ff0099] hover:bg-[#d4007e] text-white rounded-full px-8 py-6">
                COMPRAR AGORA
              </Button>
            </div>
            <div className="relative h-[300px]">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Cápsulas Thermo Pink"
                // fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Nutricional */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="bg-white text-black p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">INFORMAÇÃO NUTRICIONAL</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Componente</th>
                  <th className="text-right py-2">Quantidade por porção</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cafeína", "150mg"],
                  ["Chá Verde", "300mg"],
                  ["L-Carnitina", "500mg"],
                  ["Colina", "250mg"],
                  ["Cromo", "35mcg"],
                ].map(([item, amount], index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2">{item}</td>
                    <td className="text-right py-2">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#1a0011]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff0099] mb-4 text-center">OFERTA ESPECIAL</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            APROVEITE O MELHOR PREÇO DO MERCADO E ESCOLHA O PACOTE PROMOCIONAL QUE MAIS COMBINA COM VOCÊ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "1 FRASCO", price: "R$ 97", installment: "10", total: "R$ 97" },
              { title: "2 FRASCOS", price: "R$ 177", installment: "18", total: "R$ 177", popular: true },
              { title: "3 FRASCOS", price: "R$ 267", installment: "26", total: "R$ 267" },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-black rounded-lg overflow-hidden ${plan.popular ? "border-2 border-[#ff0099]" : "border border-gray-800"}`}
              >
                {plan.popular && (
                  <div className="bg-[#ff0099] text-white text-center py-1 text-sm font-bold">MAIS POPULAR</div>
                )}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-center">{plan.title}</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#ff0099]">{plan.price}</div>
                    <div className="text-sm">
                      ou {plan.installment}x de R${" "}
                      {Number.parseInt(plan.installment) < 10
                        ? Number.parseInt(plan.total.replace("R$ ", "")) / Number.parseInt(plan.installment)
                        : "9,70"}
                    </div>
                  </div>
                  <img
                    src="/placeholder.svg?height=200&width=150"
                    alt={`Pacote ${plan.title}`}
                    width={150}
                    height={200}
                    className="mx-auto object-contain"
                  />
                  <Button className="bg-[#ff0099] hover:bg-[#d4007e] text-white rounded-full px-8 py-6 w-full">
                    COMPRAR AGORA
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4">ACEITAMOS TAMBÉM CRIPTOMOEDAS</p>
            <Button className="bg-[#ff0099] hover:bg-[#d4007e] text-white rounded-full px-8 py-6">SAIBA MAIS</Button>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#ff0099]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">PERGUNTAS FREQUENTES</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: "Quais são os ingredientes do Thermo Pink?",
                answer:
                  "Thermo Pink contém uma fórmula exclusiva com cafeína, chá verde, L-carnitina, colina e outros componentes naturais que auxiliam no processo de emagrecimento.",
              },
              {
                question: "Quanto tempo leva para ver resultados?",
                answer:
                  "Os resultados podem variar de pessoa para pessoa, mas geralmente são perceptíveis após 2-4 semanas de uso contínuo, quando combinado com dieta equilibrada e exercícios.",
              },
              {
                question: "Existem efeitos colaterais?",
                answer:
                  "Por conter cafeína, algumas pessoas podem sentir leve agitação ou insônia se tomado próximo ao horário de dormir. Recomendamos tomar pela manhã ou no início da tarde.",
              },
              {
                question: "Posso tomar se estiver grávida ou amamentando?",
                answer:
                  "Não recomendamos o uso durante a gravidez ou amamentação. Consulte sempre um médico antes de iniciar qualquer suplementação nessas condições.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alguma Dúvida */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#ff0099]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">ALGUMA DÚVIDA?</h2>
          <Button className="bg-white text-[#ff0099] hover:bg-gray-100 rounded-full px-8 py-6">FALE CONOSCO</Button>
        </div>
      </section>

      {/* Entre em Contato */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff0099] mb-8">ENTRE EM CONTATO</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Estamos disponíveis para tirar suas dúvidas e ajudar você a alcançar seus objetivos. Entre em contato
            conosco pelos canais abaixo.
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="text-[#ff0099] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-[#ff0099] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-[#ff0099] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </main>
  )
}
