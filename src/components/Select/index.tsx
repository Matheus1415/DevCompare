import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const SelectVariants = cva("form-select", {
  variants: {},
  defaultVariants: {},
});

export interface SelectProps
  extends React.HTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof SelectVariants> {
  options: {
    value: string;
    label: string;
  }[];
  onChangeValue?: (value: string) => void;
}

export function Select({ options, onChangeValue, className, ...props }: SelectProps) {
  return (
    <select
      className={SelectVariants({ className })}
      onChange={(e) => onChangeValue(e.target.value)} 
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
