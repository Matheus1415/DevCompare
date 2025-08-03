import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const CardVariants = cva("card", {
  variants: {
    height: {
      "height-100": "h-100",
      "height-200": "h-200",
      "height-300": "h-300",
      "height-400": "h-400",
      "height-500": "h-500",
      "height-600": "h-600",
      "height-700": "h-700",
      "height-800": "h-800",
      "height-900": "h-900",
    },
  },
  defaultVariants: {
    height: "height-100",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {
  srcImage?: string;
  altImage?: string;
}

export function Card({
  height,
  className,
  children,
  srcImage,
  altImage,
  ...props
}: CardProps) {
  return (
    <div className={CardVariants({ height, className })} {...props}>
      <img className="card-img-top" src={srcImage} alt={altImage} />
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
