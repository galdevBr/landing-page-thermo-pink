import HeroImage from "@/assets/hero-image.png";

const HeroImg = () => {
  return (
    <div className="relative mt-0 hidden lg:flex -ml-32">
      <img
        src={HeroImage}
        alt="Thermo Pink Produto"
        loading="lazy"
        className="absolute top-0 right-0"
      />
    </div>
  )
}

export default HeroImg;