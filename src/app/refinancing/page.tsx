"use client";

import React, { useReducer } from "react";
import InputWithLabel from "@/components/input/inputWithLabel";
import { initialState, reducer } from "./action";
import { Card, CardContent } from "@/components/ui/card";
import CMSelect from "@/components/cmSelect";
import { allMonths } from "@/lib/utils";

const Refinancing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    homePrice,
    downPayment,
    downPaymentPerc,
    interestRate,
    loanTerm,
    propertyType,
    propertyInsurance,
    propertyTax,
    HOA,
  } = state;

  const monthlyHOA = state.HOA || 0;
  const monthlyTax = ((propertyTax || 0) / 12).toFixed(2);
  const monthlyInsurance = (propertyInsurance / 12).toFixed(2) || 0;

  const loanTermInMonths = (loanTerm || 0) * 12 || 1;
  const monthlyInterest = parseFloat(
    ((interestRate || 0) / 100 / 12).toFixed(2)
  );
  const n = loanTermInMonths;
  const loan = (parseFloat(homePrice) || 0) - (parseFloat(downPayment) || 0);

  let monthlyPayment: string | number =
    (loan * monthlyInterest * Math.pow(1 + monthlyInterest, n)) /
    (Math.pow(1 + monthlyInterest, n) - 1);
  monthlyPayment = parseFloat(monthlyPayment.toFixed(2));

  const totalMonthlyPayment = parseFloat(
    (
      monthlyPayment +
      parseFloat(monthlyTax) +
      parseFloat(monthlyInsurance.toString()) +
      parseFloat(monthlyHOA)
    ).toFixed(2)
  );

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-[1000px] m-auto ">
      <div className="flex flex-col gap-4 items-center">
        <Card className="flex flex-col flex-[1.2] my-4 p-6 w-full overflow-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <InputWithLabel
                label="Home Price"
                placeholder="0.00"
                leftText="$"
                DType="Home Price"
                value={state.homePrice}
                dispatch={dispatch}
                layout2={true}
              />
              <InputWithLabel
                type="number"
                label="Down Payment:"
                placeholder="0.00"
                leftText="$"
                rightText="%"
                sliderValue={state.downPaymentPerc}
                DType="Down Payment"
                rightDType="Down Payment Perc"
                value={state.downPayment}
                dispatch={dispatch}
                layout2={true}
              />
            </div>

            <div className="flex gap-4">
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
              <CMSelect
                mainLabel="Property Type"
                options={[
                  "Single Family Home",
                  "Townhouse or Condo",
                  "2-4 Units",
                ]}
                placeholder="Select property type"
                DType="Property Type"
                value={state.startDate}
                dispatch={dispatch}
                layout2={true}
              />
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
            </div>

            <div className="flex gap-4">
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
            </div>
          </div>
        </Card>
        <Card className="flex flex-col flex-[0.8] my-4 w-full max-w-[500px] h-max">
          <CardContent className="!p-0 text-primary">
            <div className="bg-muted p-6">
              <p className="font-bold text-lg sm:text-lg lg:text-xl">
                $
                {totalMonthlyPayment > 0
                  ? (totalMonthlyPayment || 0).toFixed(2)
                  : 0}
              </p>
              <p className="text-muted-foreground text-xs sm:text-xs lg:text-xs">
                Estimated Monthly Payment
              </p>
            </div>
            <div className="border-b border-border p-6 text-xs sm:text-xs lg:text-xs space-y-1">
              <div className="flex justify-between">
                <span>Principal & Interest</span>
                <span>${monthlyPayment > 0 ? monthlyPayment : 0}</span>
              </div>
              <div className="flex justify-between">
                <span>Property Insurance</span>
                <span>${monthlyInsurance}</span>
              </div>
              <div className="flex justify-between">
                <span>Property Tax</span>
                <span>${monthlyTax || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>HOA Fees</span>
                <span>${HOA || 0}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Refinancing;
