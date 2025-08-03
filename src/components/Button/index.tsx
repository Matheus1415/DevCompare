import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary",
      secondary: "btn-secondary",
      success: "btn-success",
      danger: "btn-danger",
      warning: "btn-warning",
      info: "btn-info",
      dark: "btn-dark",
    },
    size: {
      default: "",
      icon: 'btn-icon',
      xs: "btn-xs",
      sm: "btn-sm ",
      lg: "btn-lg",
      xl: "btn-xl",
    },
    rounded: {
      round: "rounded-pill",
    },
    stateButton:{
      active: "active",
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    }

export function Button({ variant, size, rounded, stateButton, className, children, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, stateButton, rounded, className })} {...props}>
      {children}
    </button>
  );
}
