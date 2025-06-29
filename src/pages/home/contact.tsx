import CertificationGoogleImg from "@/assets/certification-google.png";
import CertificationSSLImg from "@/assets/certification-ssl.png";
import logoThermoDark from "@/assets/logo-thermo.png";
import { ContactLink } from "@/components/contact-link";
import { AboutDialog } from "@/components/dialogs/about-dialog";
import { ShadowedStrokeTitle } from "@/components/shadowed-stroke-title";
import { useState } from "react";

export function ContactSection() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // const instagramSvg = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     stroke="currentColor"
  //     strokeWidth="2"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     className="w-8 h-8"
  //   >
  //     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
  //     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
  //     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  //   </svg>
  // )
  const whatsAppSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 308 308"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 
                  c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 
                  c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 
                  c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 
                  c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 
                  c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 
                  c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 
                  c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 
                  c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 
                  C233.168,179.508,230.845,178.393,227.904,176.981z"/>
      <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 
                  c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 
                  c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z 
                  M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 
                  l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 
                  c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 
                  C276.546,215.678,222.799,268.994,156.734,268.994z"/>
    </svg>
  )
  const EmailSvg = (
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
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
      <path d="M22 6 12 13 2 6"></path>
    </svg>
  )

  const linkList = [
    // { title: 'Instagram', text: '@thermopink', link: '#', svg: instagramSvg },
    { title: 'Email', text: 'contato@thermopink.com', link: 'mailto:contato@thermopink.com?subject=Quero emagrecer&body=Olá, gostaria de saber mais sobre o ThermoPink', svg: EmailSvg },
    { title: 'WhatsApp', text: '+55 15 99747-5220', link: 'https://wa.me/5515997475220?text=Olá%2C+tenho+interesse+em+saber+mais+sobre+o+produto', svg: whatsAppSvg },
  ]

  return (
    <>
    <section className="relative w-full py-16 px-4 md:px-8 lg:px-16 space-y-16">
      <div className="absolute bottom-[50px] left-[-600px] w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] bg-pink-500 opacity-15 rounded-full filter blur-[100px] z-0" />
      <div className="absolute top-[-100px] right-[-900px] w-[900px] h-[900px] md:w-[1200px] md:h-[1200px] bg-pink-400 opacity-25 rounded-full filter blur-[1200px] z-0" />

      <div className="container mx-auto text-center space-y-6">
        <ShadowedStrokeTitle>
          ENTRE EM CONTATO
        </ShadowedStrokeTitle>

        <p className="max-w-xl mx-auto italic">
          Precisando falar com a gente, fale com a equipe de suporte pelos canais de atendimento.
        </p>

        <div className="flex flex-col md:flex-row justify-around max-w-xl mx-auto gap-8 mb-12">
          {linkList.map(link => (
            <ContactLink key={link.title} {...link} />
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <img
            src={logoThermoDark}
            alt="Thermo Pink Logo"
            width={240}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-40 mt-12 mx-auto justify-center text-center md:text-start">
          <div>
            <p className="text-pink-500 text-4xl font-[Bebas_Neue] font-bold uppercase mb-2">Atendimento</p>
            <ul className="space-y-2">
              <li className="space-y-2">
                <span className="font-bold">Horário de funcionamento</span>
                <p className="text-sm">Segunda a sexta, das 8h às 18h</p>
                <a 
                  className="flex text-pink-500 gap-2 items-center justify-center md:justify-start "
                  href="https://wa.me/5515997475220?text=Olá%2C+tenho+interesse+em+saber+mais+sobre+o+produto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 308 308"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 
                        c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 
                        c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 
                        c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 
                        c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 
                        c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 
                        c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 
                        c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 
                        c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 
                        C233.168,179.508,230.845,178.393,227.904,176.981z"/>
                    <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 
                        c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 
                        c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z 
                        M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 
                        l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 
                        c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 
                        C276.546,215.678,222.799,268.994,156.734,268.994z"/>
                  </svg>
                  <span className="text-white text-sm">+55 15 99747-5220</span>
                </a>
              </li>

              <li className="mt-4 space-y-2 flex gap-2 items-center justify-center md:justify-start">
                <img src={CertificationGoogleImg} />
                <img src={CertificationSSLImg} />
              </li>
            </ul>
          </div>

          <div>
            <p className="text-pink-500 text-4xl font-[Bebas_Neue] font-bold uppercase mb-2">Institucional</p>
            <ul className="space-y-1">
              <li>
                <button onClick={() => setIsAboutModalOpen(true)} className="hover:text-pink-500 cursor-pointer">
                  Sobre
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Cápsulas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Emagreça
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-pink-500 text-4xl font-[Bebas_Neue] font-bold uppercase mb-2">AJUDA</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Produto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Garantia de 30 dias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Perguntas frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Fale conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Políticas de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Termos de uso
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {isAboutModalOpen && <AboutDialog isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />}
    </>
  )
}