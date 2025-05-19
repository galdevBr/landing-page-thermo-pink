interface IProps {
  children: React.ReactNode
  text?: string
}

export function ShadowedStrokeTitle({ children, text }: IProps) {
  return (
    <div className="relative flex items-center justify-center gap-4 text-center">
      <span className="md:block hidden absolute text-[9rem] font-extrabold italic text-transparent 
               bg-clip-text pointer-events-none select-none 
               [-webkit-text-stroke:2px_#DF0071] opacity-15"
      >
        {text ?? children}
      </span>
      <span className="relative text-4xl md:text-7xl font-bold italic text-pink-500">
        {children}
      </span>
    </div>
  )
}