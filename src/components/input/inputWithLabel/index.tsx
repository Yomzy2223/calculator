"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { cmFieldPropType } from "./constants";

const InputWithLabel = ({
  label,
  type,
  placeholder,
  sliderValue,
  disabled,
  leftText,
  rightText,
  onChange,
  onSliderValueChange,
}: cmFieldPropType) => {
  const [valueR, setValueR] = useState(sliderValue || 0);

  useEffect(() => {
    if (sliderValue) setValueR(sliderValue);
  }, [sliderValue]);

  const handleSlider = (value: (number | string)[]) => {
    if (!sliderValue) return;
    setValueR(parseInt(value[0].toString()));
    onSliderValueChange && onSliderValueChange(value);
  };

  const handleRightChange = (e: any) => {
    setValueR(parseInt(e.target.value || 0));
  };

  return (
    <CardContent className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-2 ">
        <Label
          className={`text-sm leading-3 font-normal text-label min-w-[140px]`}
        >
          {label}
        </Label>
        <div className="flex flex-1 items-center !mt-0 relative max-w-[80%]">
          {leftText && (
            <span className="flex items-center text-sm border-border border-t border-b border-l rounded-l h-8 p-2 bg-gray-100">
              {leftText}
            </span>
          )}
          <Input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={cn("rounded-none flex-1 min-w-[50px]", {
              " border-r-0": sliderValue,
              "rounded-l": !leftText,
            })}
            onChange={onChange}
          />
          {typeof sliderValue === "number" && (
            <Input
              type="text"
              value={valueR}
              onChange={handleRightChange}
              placeholder={placeholder}
              disabled={disabled}
              className={cn("rounded-none flex-1 min-w-[50px]", {
                "rounded-r": !leftText,
              })}
            />
          )}
          {rightText && (
            <span className="flex items-center text-sm border-border border-t border-b border-r rounded-r h-8 p-2 bg-gray-100">
              {rightText}
            </span>
          )}
        </div>
      </div>
      {typeof sliderValue === "number" && (
        <div>
          <Slider
            defaultValue={[valueR]}
            max={100}
            step={1}
            onValueChange={handleSlider}
            value={[valueR]}
          />
        </div>
      )}
    </CardContent>
  );
};

export default InputWithLabel;
