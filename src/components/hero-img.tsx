import HeroImage from "@/assets/hero-image.svg";

const HeroImg = () => {
  return (
    <div className="mt-0 hidden lg:flex -ml-32">
      <img
        src={HeroImage}
        alt="Thermo Pink Produto"
        loading="lazy"
      />
    </div>
  )
}

export default HeroImg;