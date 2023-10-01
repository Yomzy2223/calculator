import { Dispatch } from "react";

export interface propsType {
  label?: string;
  mainLabel?: string;
  placeholder?: string;
  placeholderR?: string;
  options: string[];
  onSelect?: (v: any) => void;
  DType?: string;
  rightDType?: string;
  defaultValue?: string;
  value: string;
  valueRight?: string;
  dispatch?: Dispatch<{ type: string; payload: string | number }>;
  layout2?: boolean;
}
