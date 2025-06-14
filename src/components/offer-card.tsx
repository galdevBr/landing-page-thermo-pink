import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface IProps {
  product: {
    title: string;
    price: number;
    numberOfProducts: number;
    isPopular?: boolean;
    productImg: string;
    installments: number;
  }
}

export function OfferCard({ product }: IProps) {
  const { title, price, numberOfProducts, isPopular, productImg, installments } = product;

  const formattedPrice = (price / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const pricePerProduct = ((price / numberOfProducts) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });

  const formattedInstallments = (installments / 100).toFixed(2).replace('.', ',');
  const [intPart, decimalPart] = formattedInstallments.split(',');

  return (
    <Card
      className={
        cn(
          "bg-gradient-to-b from-white to-[#D8D8D8] border-none max-w-md",
          { "from-[#FF8CC7] to-[#FF0286]": isPopular }
        )
      }
    >
      <CardHeader className="text-center">
        <CardTitle className="uppercase font-[Bebas_Neue] text-3xl tracking-wide">{title}</CardTitle>
        <CardDescription
          className={
            cn(
              "italic text-pink-500 text-4xl font-extrabold",
              { "text-white": isPopular }
            )
          }
        >
          THERMO PINK
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative flex justify-center items-center">
          <img src={productImg} alt="product" className="h-80" />

          <div
            className={cn(
              "absolute top-10 right-2 bg-black text-white rounded-full px-5 py-6 text-center",
              { "bg-pink-400": numberOfProducts === 3 },
              { "hidden": numberOfProducts === 1 }
            )}
          >
            <p className="font-bold">{pricePerProduct}</p>
            <p>o pote</p>
          </div>
        </div>

        <div className="bg-black rounded-md text-center text-lg text-white py-4 px-10">
          <p>Contém {numberOfProducts} potes</p>
          <p>com 60 cápsulas</p>
          {/* TODO: multiply number of product by 60 */}
        </div>

        <div className="text-center text-lg space-y-1">
          <p><strong>{formattedPrice}</strong> à vista ou</p>
          <p className={cn(
            "text-pink-400 text-2xl",
            { "text-white": isPopular }
          )}>
            12x
            <span className="font-bold text-8xl"> {intPart}</span>,
            <span className="font-bold text-3xl">{decimalPart}</span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="justify-center mb-4">
        <Button className={cn("italic font-bold rounded-2xl", { "bg-black hover:bg-black/80": isPopular })}>
          COMPRAR AGORA
        </Button>
      </CardFooter>
    </Card>
  )
}