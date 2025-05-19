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
          "bg-gradient-to-b from-white to-gray-300 border-none max-w-md",
          { "from-pink-300 to-pink-400": isPopular }
        )
      }
    >
      <CardHeader className="text-center">
        <CardTitle className="uppercase tracking-tighter">{title}</CardTitle>
        <CardDescription
          className={
            cn(
              "italic text-pink-500 text-3xl font-extrabold",
              { "text-white": isPopular }
            )
          }
        >
          THERMO PINK
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="relative">
          <img src={productImg} alt="product" />

          <div className={cn("absolute top-10 right-2 bg-black text-white rounded-full px-5 py-6 text-center", { "bg-pink-400": numberOfProducts === 3 })}>
            <p className="font-bold">{pricePerProduct}</p>
            <p>o pote</p>
          </div>
        </div>

        <div className="bg-black rounded-md text-center text-lg text-white py-4 px-10">
          <p>Contém {numberOfProducts} potes</p>
          <p>com 60 cápsulas</p>
        </div>

        <div className="text-center space-y-1">
          <p><strong>{formattedPrice}</strong> à vista ou</p>
          <p className={cn(
            "text-pink-400",
            { "text-white": isPopular }
          )}>
            12x
            <span className="font-bold text-7xl"> {intPart}</span>,
            <span className="font-bold text-2xl">{decimalPart}</span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="justify-center">
        <Button className={cn({ "bg-black hover:bg-black/80": isPopular })}>
          COMPRAR AGORA
        </Button>
      </CardFooter>
    </Card>
  )
}