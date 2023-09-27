"use client";

import React, { useReducer } from "react";
import InputWithLabel from "@/components/input/inputWithLabel";
import { initialState, reducer } from "./action";
import { Card, CardContent } from "@/components/ui/card";

const Mortgage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-[1000px] m-auto ">
      <h2 className="lg:text-xl text-primary sm:text-lg text-center">
        <span className="lg:text-3xl font-extrabold sm:text-2xl">
          Affordability Calculator
        </span>
      </h2>
      <Card className="flex flex-col my-4 py-6 w-full overflow-auto">
        <div>
          <InputWithLabel
            label="Home Value:"
            leftText="$"
            onChange={(e) =>
              dispatch({ type: "Home Value", payload: e.target.value })
            }
          />
          <InputWithLabel
            label="Down Payment:"
            leftText="$"
            rightText="%"
            onChange={(e) =>
              dispatch({ type: "Down Payment", payload: e.target.value })
            }
            sliderValue={10}
          />
          <InputWithLabel
            label="Loan Amount:"
            leftText="$"
            onChange={(e) =>
              dispatch({ type: "Loan Amount", payload: e.target.value })
            }
          />
          <InputWithLabel
            label="Interest Rate:"
            rightText="%"
            onChange={(e) =>
              dispatch({ type: "Interest Rate", payload: e.target.value })
            }
            sliderValue={10}
          />
          <InputWithLabel
            label="Loan Term:"
            rightText="years"
            onChange={(e) =>
              dispatch({ type: "Loan Term", payload: e.target.value })
            }
          />
          <InputWithLabel
            label="Property Tax:"
            rightText="$/year"
            onChange={(e) =>
              dispatch({ type: "Property Tax", payload: e.target.value })
            }
          />
          <InputWithLabel
            label="PMI:"
            rightText="%"
            onChange={(e) => dispatch({ type: "PMI", payload: e.target.value })}
            sliderValue={40}
          />
          <InputWithLabel
            label="Home Insurance:"
            rightText="$/year"
            onChange={(e) =>
              dispatch({ type: "Home Insurance", payload: e.target.value })
            }
          />
          <InputWithLabel
            label="Monthly HOA:"
            leftText="$"
            onChange={(e) =>
              dispatch({ type: "Home Insurance", payload: e.target.value })
            }
          />
        </div>
      </Card>
      <Card className="flex flex-col my-4 w-full max-w-[500px]">
        <CardContent className="!p-0 text-primary">
          <div className="bg-muted p-6">
            <p className="font-bold text-lg sm:text-lg lg:text-xl">$456,789</p>
            <p className="text-muted-foreground text-xs sm:text-xs lg:text-xs">
              Your estimated monthly payment with PMI.
            </p>
          </div>
          <div className="border-b border-border p-6 text-xs sm:text-xs lg:text-xs space-y-1">
            <div className="flex justify-between">
              <span>PMI:</span>
              <span>$4,678</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly Tax Paid:</span>
              <span>$4,678</span>
            </div>
            <div>
              <span>Monthly Home Insurance:</span>
              <span>$4,678</span>
            </div>
          </div>

          <div className="border-b border-border p-6 text-xs sm:text-xs lg:text-xs space-y-1">
            <div className="flex justify-between">
              <span>PMI End Date:</span>
              <span>Feb, 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Total PMI Payments:</span>
              <span>78</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly Payment after Feb, 2025:</span>
              <span>$4,678</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mortgage;
