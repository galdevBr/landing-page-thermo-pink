import productOfferImg from "@/assets/1-product-purchase.png";
import ThreeProductOfferImg from "@/assets/3-products-purchase.png";
import SixProductOfferImg from "@/assets/6-products-purchase.png";
import { mercadoPagoLinks } from "./mercado-pago-links";

export const offersList = [
  { title: "COMBO 1 MÊS", price: 11900, installments: 1211, numberOfProducts: 1, productImg: productOfferImg, url: mercadoPagoLinks[0].href },
  { title: "COMBO 3 MÊS", price: 29700, installments: 3022, numberOfProducts: 3, productImg: ThreeProductOfferImg, isPopular: true, url: mercadoPagoLinks[1].href },
  { title: "COMBO 6 MÊS", price: 53400, installments: 5434, numberOfProducts: 6, productImg: SixProductOfferImg, url: mercadoPagoLinks[2].href },
]
