import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const BadgeVariants = cva("badge", {
  variants: {
    variant: {
      default: "",
      primary: "text-bg-primary",
      success: "text-bg-success",
      danger: "text-bg-danger",
      warning: "text-bg-warning",
      info: "text-bg-info",
      dark: "text-bg-dark",
      'label-primary': "bg-label-primary",
      'label-secondary': "bg-label-secondary",
      'label-success': "bg-label-success",
      'label-danger': "bg-label-danger",
      'label-warning': "bg-label-warning",
      'label-info': "bg-label-info",
      'label-dark': "bg-label-dark",
    },
    badgeType: {
      default: "",
      center: "badge-center",
    },
    rounded: {
      default: '',
      rounded: "rounded-pill",
    }
  },
  defaultVariants: {
    variant: "default",
    badgeType: "default",
  },
});

export interface BadgesProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof BadgeVariants> {
    }

export function Badge({ variant, badgeType, rounded, className, children, ...props }: BadgesProps) {
  return (
    <span className={BadgeVariants({ variant, badgeType, rounded, className })}  {...props}>
      {children}
    </span>
  );
}
