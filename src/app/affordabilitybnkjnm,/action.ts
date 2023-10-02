export const initialState = {
  homeValue: "",
  interestRate: 0,
  downPayment: "",
  loanTerm: "",
  annualIncome: "",
  monthlyDebts: "",
  propertyInsurance: "",
  propertyTax: "",
  HOA: "",
  PMI: 0,
};

export const reducer = (
  state: any,
  action: { type: string; payload: string | number }
) => {
  switch (action.type) {
    //
    case "Home Value": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      let downPayment = state.downPayment;
      let perc = state.downPaymentPerc;
      if (perc) {
        downPayment = (state.downPaymentPerc / 100) * val;
        downPayment = parseFloat(downPayment).toFixed(2);
      }

      return {
        ...state,
        homeValue: val || "",
        downPayment,
      };
    }

    //
    case "Interest Rate": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        interestRate: val || "",
      };
    }

    //
    case "Down Payment": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      let perc: string | number = ((val || 0) * 100) / state.homeValue;

      return {
        ...state,
        downPayment: (perc > 100 ? state.homeValue : val) || "",
      };
    }

    //
    case "Loan Term": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        loanTerm: val || "",
      };
    }

    //
    case "Annual Income": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        annualIncome: val || "",
      };
    }

    //
    case "Monthly Debts": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        monthlyDebts: val || "",
      };
    }

    //
    case "Property Insurance": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        propertyInsurance: val || "",
      };
    }

    //
    case "Property Tax": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        propertyTax: val || "",
      };
    }

    //
    case "HOA": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        HOA: val || "",
      };
    }

    //
    case "PMI": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        PMI: val || "",
      };
    }
  }
};
