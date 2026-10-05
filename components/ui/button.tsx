import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out-quint active:translate-y-px disabled:pointer-events-none disabled:opacity-55 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* The single high-emphasis action on a view. Orange is reserved for it. */
        primary:
          "bg-orange text-navy shadow-[inset_0_-1px_0_rgb(11_31_58/0.18),0_1px_2px_rgb(11_31_58/0.12)] hover:bg-[#ff8a1f]",
        solid: "bg-navy text-white hover:bg-navy-soft",
        outline:
          "border border-line-strong bg-surface/70 text-ink hover:border-navy/40 hover:bg-surface",
        onDark:
          "border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
        ghost: "text-ink hover:bg-navy/5",
        link: "h-auto rounded-none p-0 text-blue-ink underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-[0.9375rem]",
        lg: "h-13 px-6 text-base",
      },
    },
    compoundVariants: [{ variant: "link", class: "h-auto px-0" }],
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
