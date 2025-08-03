import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Badge } from "../Badge";

const DashboardCardVariants = cva("card", {
  variants: {
    height: {
      "height-100": "h-100",
      "height-200": "h-200",
      "height-300": "h-300",
      "height-400": "h-400",
    },
  },
  defaultVariants: {},
});

export interface DashboardCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof DashboardCardVariants> {
  title: string;
  subtitle: string;
  countElement: string | number;
  colClass?: string;
  variantBadge?: "label-primary" | "label-secondary" | "label-success" | "label-danger" | "label-warning" | "label-info" | "label-dark";
  icon?:string;
} 

export function DashboardCard({
  height,
  className,
  title,
  subtitle,
  countElement,
  colClass = 'col-xl-3 col-sm-3',
  variantBadge = 'label-info',
  icon = 'bx-task',
  ...props
}: DashboardCardProps) {
  return (
    <div className={`${colClass}`}>
        <div className={DashboardCardVariants({ height, className })} {...props}>
          <div className="card-body">
            <div className="d-flex align-items-start justify-content-between">
              <div className="content-left">
                <span>{title}</span>
                <div className="d-flex align-items-end mt-2">
                  <h4 className="mb-0 me-2" id="documentValid">
                    {countElement}
                  </h4>
                </div>
                <small>{subtitle}</small>
              </div>
              <Badge variant={variantBadge} className="p-2">
                <i className={`bx ${icon} bx-sm`}></i>
              </Badge>
            </div>
          </div>
        </div>
    </div>
  );
}
