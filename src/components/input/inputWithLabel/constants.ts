import { ChangeEventHandler, Dispatch } from "react";

export interface cmFieldPropType {
  nameR?: string;
  label: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  sliderValue?: string;
  disabled?: boolean;
  leftText?: string;
  rightText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSliderValueChange?: (value: (number | string)[]) => void;
  sliderStep?: number;
  dispatch?: Dispatch<{ type: string; payload: string | number }>;
  DType?: string;
  rightDType?: string;
  hideLeft?: boolean;
}
