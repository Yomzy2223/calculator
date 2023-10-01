"use client";

import React, { useReducer } from "react";
import InputWithLabel from "@/components/input/inputWithLabel";
import { initialState, reducer } from "./action";
import { Card, CardContent } from "@/components/ui/card";
import CMSelect from "@/components/cmSelect";
import { allMonths } from "@/lib/utils";

const Mortgage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loanTermInMonths = (state.loanTerm || 0) * 12 || 1;
  const monthlyTax = ((state.propertyTax || 0) / 12).toFixed(2);
  const monthlyInsurance = (state.homeInsurance / 12).toFixed(2) || 0;
  const monthlyPMI = (
    (((state.PMI || 0) / 100) * state.loanAmount) /
    loanTermInMonths
  ).toFixed(2);
  const monthlyHOA = state.HOA || 0;
  const paymentEndYear =
    parseInt(state.startYear) + (parseInt(state.loanTerm) || 0);

  const loan = state.loanAmount || 0;
  const monthlyInterest = (state.interestRate || 0) / 100 / 12;
  const n = loanTermInMonths;

  let monthlyPayment: string | number =
    (loan * monthlyInterest * Math.pow(1 + monthlyInterest, n)) /
    (Math.pow(1 + monthlyInterest, n) - 1);
  monthlyPayment = parseFloat(monthlyPayment.toFixed(2));

  const totalMonthlyPayment = parseFloat(
    (
      monthlyPayment +
      parseFloat(monthlyPMI) +
      parseFloat(monthlyTax) +
      parseFloat(monthlyInsurance.toString()) +
      parseFloat(monthlyHOA)
    ).toFixed(2)
  );

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-[1000px] m-auto ">
      <div className="flex flex-col gap-4 items-center">
        <Card className="flex flex-col flex-[1.2] my-4 py-6 w-full overflow-auto">
          <div>
            <InputWithLabel
              type="number"
              label="Home Value:"
              placeholder="0.00"
              leftText="$"
              DType="Home Value"
              value={state.homeValue}
              dispatch={dispatch}
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
            />
            <InputWithLabel
              type="number"
              label="Loan Amount:"
              placeholder="0.00"
              leftText="$"
              DType="Loan Amount"
              value={state.loanAmount}
              dispatch={dispatch}
            />
            <InputWithLabel
              label="Interest Rate:"
              rightText="%"
              sliderValue={state.interestRate}
              rightDType="Interest Rate"
              value={state.interestRate}
              dispatch={dispatch}
              sliderStep={0.2}
              hideLeft
            />
            <InputWithLabel
              label="Loan Term:"
              rightText="years"
              DType="Loan Term"
              value={state.loanTerm}
              dispatch={dispatch}
            />
            <CMSelect
              mainLabel="Start date:"
              options={allMonths}
              placeholder="Select a month"
              placeholderR="Enter year"
              DType="Start Date"
              rightDType="Start Year"
              value={state.startDate}
              valueRight={state.startYear}
              dispatch={dispatch}
            />
            <InputWithLabel
              label="Property Tax:"
              rightText="$/year"
              DType="Property Tax"
              value={state.propertyTax}
              dispatch={dispatch}
            />
            {state.downPaymentPerc < 20 && (
              <InputWithLabel
                label="PMI:"
                rightText="%"
                sliderValue={state.PMI}
                rightDType="PMI"
                value={state.PMI}
                dispatch={dispatch}
                sliderStep={0.2}
                hideLeft
              />
            )}
            <InputWithLabel
              type="number"
              label="Home Insurance:"
              rightText="$/year"
              DType="Home Insurance"
              value={state.homeInsurance}
              dispatch={dispatch}
            />
            <InputWithLabel
              label="Monthly HOA:"
              leftText="$"
              DType="HOA"
              value={state.HOA}
              dispatch={dispatch}
            />
          </div>
        </Card>
        <Card className="flex flex-col flex-[0.8] my-4 w-full max-w-[500px] h-max">
          <CardContent className="!p-0 text-primary">
            <div className="bg-muted p-6">
              <p className="font-bold text-lg sm:text-lg lg:text-xl">
                ${totalMonthlyPayment > 0 ? totalMonthlyPayment : 0}
              </p>
              <p className="text-muted-foreground text-xs sm:text-xs lg:text-xs">
                Your estimated monthly payment with PMI.
              </p>
            </div>
            <div className="border-b border-border p-6 text-xs sm:text-xs lg:text-xs space-y-1">
              {state.downPaymentPerc < 20 && (
                <div className="flex justify-between">
                  <span>PMI:</span>
                  <span>${monthlyPMI}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Monthly Tax Paid:</span>
                <span>${monthlyTax}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Home Insurance:</span>
                <span>${monthlyInsurance}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly HOA:</span>
                <span>${monthlyHOA}</span>
              </div>
            </div>

            <div className="border-b border-border p-6 text-xs sm:text-xs lg:text-xs space-y-1">
              {state.startDate && state.startYear && (
                <div className="flex justify-between">
                  <span>Payment End Date:</span>
                  <span>
                    {state.startDate}, {paymentEndYear}
                  </span>
                </div>
              )}
              {loanTermInMonths && (
                <div className="flex justify-between">
                  <span>Total Monthly Payments:</span>
                  <span>{loanTermInMonths}</span>
                </div>
              )}
              {/* <div className="flex justify-between">
                <span>Monthly Payment after Feb, 2025:</span>
                <span>$4,678</span>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Mortgage;
