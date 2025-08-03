import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import React, { forwardRef, useEffect, useRef, useState } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        primaryPink: "bg-pink-500 text-white shadow hover:bg-pink-500/90",
        secondaryPink: "border border-pink-500 text-pink-500 shadow-sm hover:bg-pink-500/80 hover:text-white",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        defaultPink: "h-10 p-4 md:px-6 md:py-6 text-xl",
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primaryPink",
      size: "defaultPink",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

// https://hotmart.com/pt-br/checkout/checkout-widget

export interface HotmartButtonProps extends ButtonProps {
  hotmartUrl?: string // permite customizar o URL base
}

const HotmartButton = forwardRef<HTMLButtonElement, HotmartButtonProps>(
  ({ className, variant, size, hotmartUrl, ...props }, ref) => {
    const [checkoutUrl, setCheckoutUrl] = useState("");
    const hotmartRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
      const baseUrl = new URL(hotmartUrl || "https://pay.hotmart.com/A101112381J");
      const queryParams = new URLSearchParams(window.location.search);
    
      // Sempre adiciona esses fixos
      baseUrl.searchParams.set("checkoutMode", "2");
      // baseUrl.searchParams.set("off", "mc1es8lm");
    
      // Adiciona UTM dinamicamente se existirem
      for (const [key, value] of queryParams.entries()) {
        if (key.startsWith("utm_")) {
          baseUrl.searchParams.set(key, value);
        }
      }
    
      setCheckoutUrl(baseUrl.toString());
    }, [hotmartUrl]);

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://static.hotmart.com/checkout/widget.min.js";
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
      document.head.appendChild(link);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      hotmartRef.current?.click(); // Dispara o botão Hotmart escondido
    };

    return (
      <>
        <Button
          onClick={handleClick}
          ref={ref}
          variant={variant}
          size={size}
          className={className}
          {...props}
        />
          

        {/* Botão invisível da Hotmart que aciona o modal */}
        <a
          href={checkoutUrl}
          ref={hotmartRef}
          className="hotmart-fb hotmart__button-checkout"
          style={{ display: "none" }}
        />
      </>
    );
  }
);
HotmartButton.displayName = "HotmartButton";

export { HotmartButton }
