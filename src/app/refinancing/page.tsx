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
  const loanTermMonths = parseFloat(((loanTerm || 0) * 12).toFixed(2));

  const maxHomePrice =
    (parseFloat(downPayment) + parseFloat(monthlyDebts)) /
      ((1 -
        Math.pow(
          1 + parseFloat(monthlyInterestRate.toString()),
          -parseFloat(loanTermMonths.toString())
        )) /
        parseFloat(monthlyInterestRate.toString())) -
    parseFloat(propertyInsurance) -
    parseFloat(HOA) -
    parseFloat(propertyTax) / 12 -
    parseFloat(PMI);

  const maxMonthlyPayment =
    (parseFloat(annualIncome) / 12 - parseFloat(monthlyDebts)) *
      ((1 -
        Math.pow(
          1 + parseFloat(monthlyInterestRate.toString()),
          -parseFloat(loanTermMonths.toString())
        )) /
        parseFloat(monthlyInterestRate.toString())) -
    parseFloat(propertyInsurance) -
    parseFloat(HOA) -
    parseFloat(propertyTax) / 12 -
    parseFloat(PMI);

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-[1000px] m-auto ">
      <div className="lg:text-xl text-primary sm:text-lg text-center">
        <h2 className="lg:text-3xl font-extrabold sm:text-2xl">
          Refinancing Calculator
        </h2>
        <span className="text-sm md:text-base">
          What does a monthly mortgage payment look like for you? Get an
          estimate with some basic information.
        </span>
      </div>
      <div className="flex flex-col gap-4 items-center md:flex-row md:items-start">
        <Card className="flex flex-col flex-[1.2] my-4 p-6 w-full overflow-auto">
          <div className="space-y-4">
            <div className="flex gap-4">
              <InputWithLabel
                label="Home Price"
                placeholder="0.00"
                leftText="$"
                rightDType="Home Price"
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
                {maxMonthlyPayment > 0
                  ? (maxMonthlyPayment || 0).toFixed(2)
                  : 0}
              </p>
              <p className="text-muted-foreground text-xs sm:text-xs lg:text-xs">
                Estimated Monthly Payment
              </p>
            </div>
            <div className="border-b border-border p-6 text-xs sm:text-xs lg:text-xs space-y-1">
              <div className="flex justify-between">
                <span>Principal & Interest</span>
                <span>$343</span>
              </div>
              <div className="flex justify-between">
                <span>Property Insurance</span>
                <span>${state.propertyInsurance}</span>
              </div>
              <div className="flex justify-between">
                <span>Property Tax</span>
                <span>${state.propertyTax || 0}</span>
              </div>
              <div className="flex justify-between">
                <span>HOA Fees</span>
                <span>${state.HOA || 0}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Refinancing;
