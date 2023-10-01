"use client";

import React, { useReducer } from "react";
import InputWithLabel from "@/components/input/inputWithLabel";
import { initialState, reducer } from "./action";
import { Card, CardContent } from "@/components/ui/card";
import CMSelect from "@/components/cmSelect";
import { allMonths } from "@/lib/utils";

const Affordability = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    homeValue,
    interestRate,
    downPayment,
    loanTerm,
    annualIncome,
    monthlyDebts,
    propertyInsurance,
    propertyTax,
    HOA,
    PMI,
  } = state;

  const monthlyInterestRate = parseFloat(((interestRate || 0) / 12).toFixed(2));

  const loanTermInMonths = (loanTerm || 0) * 12 || 1;
  const loan = (parseFloat(homeValue) || 0) - (parseFloat(downPayment) || 0);
  const monthlyInterest = (interestRate || 0) / 100 / 12;
  const n = loanTermInMonths;

  let monthlyPayment: string | number =
    (loan * monthlyInterest * Math.pow(1 + monthlyInterest, n)) /
    (Math.pow(1 + monthlyInterest, n) - 1);
  monthlyPayment = parseFloat(monthlyPayment.toFixed(2));

  const repaymentPerYear = parseFloat((monthlyPayment * 12).toString()).toFixed(
    2
  );

  const maxHomePrice =
    (parseFloat(annualIncome) || 0) -
    (parseFloat(repaymentPerYear) || 0) -
    (parseFloat(propertyInsurance) || 0) -
    (parseFloat(monthlyDebts) || 0) * 12 -
    (parseFloat(HOA) || 0) * 12 -
    (parseFloat(propertyTax) || 0) -
    (parseFloat(PMI) || 0);

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-[1000px] m-auto ">
      <div className="flex flex-col gap-4 items-center">
        <Card className="flex flex-col flex-[1.2] my-4 p-6 w-full overflow-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <InputWithLabel
                type="number"
                label="Home Value:"
                placeholder="0.00"
                leftText="$"
                DType="Home Value"
                value={state.homeValue}
                dispatch={dispatch}
                layout2={true}
              />
              <InputWithLabel
                label="Interest Rate"
                rightText="%"
                sliderValue={state.interestRate}
                rightDType="Interest Rate"
                value={state.interestRate}
                dispatch={dispatch}
                sliderStep={0.2}
                hideLeft
                layout2={true}
              />
            </div>

            <div className="flex gap-4">
              <InputWithLabel
                type="number"
                label="Down Payment"
                placeholder="0.00"
                leftText="$"
                DType="Down Payment"
                value={state.downPayment}
                dispatch={dispatch}
                layout2={true}
              />
              <InputWithLabel
                type="number"
                label="Loan Term"
                placeholder="4"
                rightText="years"
                DType="Loan Term"
                value={state.loanTerm}
                dispatch={dispatch}
                layout2={true}
              />
            </div>

            <div className="flex gap-4">
              <InputWithLabel
                type="number"
                label="Annual Income"
                placeholder="0.00"
                leftText="$"
                DType="Annual Income"
                value={state.annualIncome}
                dispatch={dispatch}
                layout2={true}
              />
              <InputWithLabel
                type="number"
                label="Monthly Debts"
                placeholder="0.00"
                leftText="$"
                DType="Monthly Debts"
                value={state.monthlyDebts}
                dispatch={dispatch}
                layout2={true}
              />
            </div>

            <div className="flex gap-4">
              <InputWithLabel
                type="number"
                label="Property Insurance"
                placeholder="0.00"
                leftText="$"
                rightText="/year"
                DType="Property Insurance"
                value={state.propertyInsurance}
                dispatch={dispatch}
                layout2={true}
              />
              <InputWithLabel
                type="number"
                label="Property Tax"
                placeholder="0.00"
                leftText="$"
                rightText="/year"
                DType="Property Tax"
                value={state.propertyTax}
                dispatch={dispatch}
                layout2={true}
              />
            </div>

            <div className="flex gap-4">
              <InputWithLabel
                type="number"
                label="Monthly HOA:"
                placeholder="0.00"
                leftText="$"
                rightText="/month"
                DType="HOA"
                value={state.HOA}
                dispatch={dispatch}
                layout2={true}
              />
              <InputWithLabel
                type="number"
                label="PMI:"
                leftText="$"
                rightText="/year"
                DType="PMI"
                value={state.PMI}
                dispatch={dispatch}
                layout2={true}
              />
            </div>
          </div>
        </Card>
        <Card className="flex flex-col flex-[0.8] my-4 w-full max-w-[500px] h-max">
          <CardContent className="!p-0 text-primary">
            <div className="bg-muted p-6">
              <p className="font-bold text-lg sm:text-lg lg:text-xl">
                ${monthlyPayment > 0 ? (monthlyPayment || 0).toFixed(2) : 0}
              </p>
              <p className="text-muted-foreground text-xs sm:text-xs lg:text-xs">
                Maximum Monthly Payment
              </p>
            </div>
            <div className="border-b border-border p-6 text-xs sm:text-xs lg:text-xs space-y-1">
              <div className="flex justify-between">
                <span>Maximum Home Price:</span>
                <span>
                  ${maxHomePrice > 0 ? (maxHomePrice || 0).toFixed(2) : 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Maximum Monthly Payment:</span>
                <span>
                  ${monthlyPayment > 0 ? (monthlyPayment || 0).toFixed(2) : 0}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Affordability;
