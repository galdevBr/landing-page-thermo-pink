interface IProps {
  svg: React.ReactNode;
  title: string;
  text: string;
  link: string;
}

export function ContactLink({ link, svg, title }: IProps) {
  return (
    <a href={link} className="text-pink-500 hover:text-white flex flex-col items-center justify-center gap-1 group" target="_blank" rel="noopener noreferrer">
      {svg}
      <span className="text-lg font-bold mt-1 uppercase">{title}</span>
      {/* <span className="text-white text-xs italic group-hover:underline">{text}</span> */}
    </a>
  )
}