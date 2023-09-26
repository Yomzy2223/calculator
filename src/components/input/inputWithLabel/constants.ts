import { ChangeEventHandler } from "react";

export interface cmFieldPropType {
  nameR?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  sliderValue?: number;
  disabled?: boolean;
  leftText?: string;
  rightText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSliderValueChange?: (value: (number | string)[]) => void;
}
