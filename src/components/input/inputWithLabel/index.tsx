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
  type = "text",
  value,
  placeholder,
  sliderValue,
  disabled,
  leftText,
  rightText,
  onChange,
  onSliderValueChange,
  sliderStep,
  dispatch,
  DType,
  rightDType,
  hideLeft,
}: cmFieldPropType) => {
  //
  const handleSlider = (value: (number | string)[]) => {
    if (dispatch && rightDType) {
      dispatch({ type: rightDType, payload: value[0] });
    }
    onSliderValueChange && onSliderValueChange(value);
  };

  const handleLeftChange = (e: any) => {
    let value = e.target.value;
    dispatch && DType && dispatch({ type: DType, payload: value });
    onChange && onChange(e);
  };

  const handleRightChange = (e: any) => {
    let value = e.target.value;
    // const value = parseFloat(e.target.value) || 0;
    if (dispatch && rightDType && value <= 100) {
      dispatch({ type: rightDType, payload: value });
    }
  };

  return (
    <CardContent className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-2 ">
        <Label
          className={`text-sm leading-3 font-normal text-label min-w-[100px] md:min-w-[140px]`}
        >
          {label}
        </Label>
        <div className="flex flex-1 items-center !mt-0 relative max-w-[90%] md:max-w-[80%]">
          {leftText && (
            <span className="flex items-center text-sm border-border border-t border-b border-l rounded-l h-8 p-2 bg-gray-100">
              {leftText}
            </span>
          )}
          {!hideLeft && (
            <Input
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              onChange={handleLeftChange}
              className={cn("rounded-none flex-1 min-w-[50px]", {
                " border-r-0": sliderValue,
                "rounded-l": !leftText,
              })}
            />
          )}
          {(typeof sliderValue === "number" ||
            typeof sliderValue === "string") && (
            <Input
              placeholder={placeholder}
              value={sliderValue}
              onChange={handleRightChange}
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
      {(typeof sliderValue === "number" || typeof sliderValue === "string") && (
        <div>
          <Slider
            defaultValue={[parseInt(sliderValue || "0")]}
            max={100}
            step={sliderStep || 1}
            onValueChange={handleSlider}
            value={[parseInt(sliderValue || "0")]}
          />
        </div>
      )}
    </CardContent>
  );
};

export default InputWithLabel;
