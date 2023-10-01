"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { propsType } from "./constants";

const CMSelect = ({
  label,
  mainLabel,
  placeholder,
  placeholderR,
  options,
  onSelect,
  dispatch,
  DType,
  rightDType,
  defaultValue,
  value,
  valueRight,
  layout2,
}: propsType) => {
  const showRight = valueRight !== undefined;

  const handleSelectChange = (val: string) => {
    if (dispatch && DType) {
      dispatch({ type: DType, payload: val });
    }
    onSelect && onSelect(val);
  };

  const handleInputChange = (e: any) => {
    let val = e.target.value;
    if (dispatch && rightDType) {
      dispatch({ type: rightDType, payload: val });
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between flex-wrap gap-x-4 gap-y-2 px-5 pb-5 md:px-6 md:pb-5",
        {
          "flex-col items-start w-full px-0 md:px-0 pb-0 md:pb-0": layout2,
        }
      )}
    >
      <Label className="text-sm leading-3 font-normal min-w-[100px] md:min-w-[140px]">
        {mainLabel}
      </Label>
      <div
        className={cn(
          "flex flex-1 items-center !mt-0 relative max-w-[90%] md:max-w-[80%]",
          {
            "max-w-full md:max-w-full w-full": layout2,
          }
        )}
      >
        <Select
          onValueChange={handleSelectChange}
          defaultValue={defaultValue}
          value={value}
        >
          <SelectTrigger
            className={cn("rounded-none flex-1 min-w-[50px] rounded-l h-8", {
              "border-r-0": showRight,
            })}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>

          <SelectContent className="max-h-60 overflow-auto">
            <SelectGroup>
              {label && <SelectLabel>{label}</SelectLabel>}
              {options.map((option, i) => (
                <SelectItem key={i} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {showRight && (
          <Input
            className={cn("rounded-none flex-1 min-w-[50px] rounded-r")}
            value={valueRight}
            onChange={handleInputChange}
            placeholder={placeholderR}
          />
        )}
      </div>
    </div>
  );
};

export default CMSelect;
