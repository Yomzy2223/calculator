export const initialState = {
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

      return {
        ...state,
        downPayment: val || "",
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
    case "Monthly Depts": {
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
