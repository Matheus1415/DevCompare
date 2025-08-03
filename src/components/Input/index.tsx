import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { FieldError } from "react-hook-form";
import classNames from "classnames";

const inputVariants = cva("form-control", {
  variants: {
    variant: {
      default: "",
      plaintext: "form-control-plaintext",
      checkBox:"form-check-input",
      range:"form-range",
    },
    inputSize: {
      default: "",
      lg: "form-control-lg",
      sm: "form-control-sm",
    },
    rounded: {
      default: "",
      rounded: "rounded-pill",
    },
  },
  defaultVariants: {
    variant: "default",
    inputSize: "default",
    rounded:"default",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
      invalid?: boolean | FieldError
    }
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ variant, rounded, inputSize, invalid, className, ...props }, ref) => (
  <input 
    ref={ref}
    className={
      classNames(
        inputVariants({ variant, rounded, inputSize, className }),
        {
          'border-danger border-1': invalid
        }
      )
    } 
    {...props}
  />

))