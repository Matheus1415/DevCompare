import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";

const AlertsVariants = cva("alert", {
  variants: {
    variant: {
      default: "alert-primary",
      success: "alert-success",
      danger: "alert-danger",
      warning: "alert-warning",
      info: "alert-info",
      dark: "alert-dark",
    },
    badgeType: {
      default: "",
      rounded: "rounded-pill",
      center: "badge-center",
      top: "badge-top",
      bottom: "badge-bottom",
    },
  },
  defaultVariants: {
    variant: "default",
    badgeType: "default",
  },
});

export interface AlertsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AlertsVariants> {
      isClose?:boolean
      closeClickFunction?: () => void
    }

export function Alerts({
  variant,
  className,
  children,
  isClose,
  closeClickFunction,
  ...props
}: AlertsProps) {
  return (
    <div
      className={classNames(
        AlertsVariants({ variant, className }),
        {
          'alert-dismissible': isClose,
        }
      )}
      {...props}
    >
      {children}
      {isClose && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={closeClickFunction}
        ></button>
      )}
      
    </div>
  );
}
