export const initialState = {
  homeValue: "",
  downPayment: "",
  downPaymentPerc: 0,
  loanAmount: "",
  interestRate: 0,
  loanTerm: "",
  startDate: "",
  startYear: "",
  propertyTax: "",
  PMI: 0,
  homeInsurance: "",
  HOA: "",
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
      let loanAmount = state.loanAmount;
      let perc = state.downPaymentPerc;
      if (perc) {
        downPayment = (state.downPaymentPerc / 100) * val;
        downPayment = parseFloat(downPayment).toFixed(2);
        loanAmount = (val - downPayment).toFixed(2) || 0;
      }

      return {
        ...state,
        homeValue: val || "",
        downPayment,
        loanAmount,
      };
    }

    //
    case "Down Payment": {
      let val = parseFloat(action.payload?.toString());
      if (val < 0) return state;

      let perc: string | number = ((val || 0) * 100) / state.homeValue;
      if (perc > 100) return state;
      if (perc) perc = parseFloat(perc.toString()).toFixed(2);

      return {
        ...state,
        downPayment: val || "",
        downPaymentPerc: perc || 0,
        loanAmount: state.homeValue - val || 0,
      };
    }

    //
    case "Down Payment Perc": {
      let val = parseFloat(action.payload?.toString());
      if (val < 0) return state;

      if (state.homeValue <= 0) return state;
      let downPayment: string | number = (val / 100) * state.homeValue;
      downPayment = downPayment.toFixed(2);
      let loanAmount =
        (state.homeValue - parseFloat(downPayment)).toFixed(2) || 0;

      return {
        ...state,
        downPaymentPerc: val || "",
        downPayment,
        loanAmount,
      };
    }

    //
    case "Loan Amount": {
      let val = parseFloat(action.payload?.toString());
      if (val < 0) return state;
      val = val > state.homeValue ? state.homeValue : val;
      let downPayment = (state.homeValue - val).toFixed(2) || 0;
      let downPaymentPerc = (
        (100 * parseFloat(downPayment.toString())) / state.homeValue || 0
      ).toFixed(2);

      return {
        ...state,
        loanAmount: val || "",
        downPayment,
        downPaymentPerc,
      };
    }

    //
    case "Interest Rate": {
      let val = parseFloat(action.payload?.toString());

      return {
        ...state,
        interestRate: val,
      };
    }

    //
    case "Loan Term":
      return {
        ...state,
        loanTerm: action.payload,
      };
    case "Start Date":
      return {
        ...state,
        startDate: action.payload,
      };
    case "Start Year":
      return {
        ...state,
        startYear: action.payload,
      };
    case "Property Tax":
      return {
        ...state,
        propertyTax: action.payload,
      };
    case "PMI":
      return {
        ...state,
        PMI: action.payload,
      };

    case "Home Insurance":
      return {
        ...state,
        homeInsurance: action.payload,
      };
    case "HOA":
      return {
        ...state,
        HOA: action.payload,
      };
  }
};
