export function Footer() {
  
  return (
    <footer className="w-full py-12 px-4 md:px-8 lg:px-16 bg-[#1a0011]">
      <div className="container mx-auto">
        <div className="text-center text-sm">
          <p>Copyright © {new Date().getFullYear()} Thermo Pink. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Resultados podem
            variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  )
}