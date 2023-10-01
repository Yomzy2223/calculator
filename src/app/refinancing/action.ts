export const initialState = {
  homePrice: "",
  downPayment: "",
  downPaymentPerc: "",
  interestRate: 0,
  loanTerm: "",
  propertyType: "",
  propertyInsurance: "",
  propertyTax: "",
  HOA: "",
};

export const reducer = (
  state: any,
  action: { type: string; payload: string | number }
) => {
  switch (action.type) {
    //
    case "Home Price": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        homePrice: val || "",
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
    case "Interest Rate": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        interestRate: val || "",
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
    case "Property Type": {
      let val = parseFloat(action.payload.toString());
      if (val < 0) return state;

      return {
        ...state,
        propertyType: val || "",
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
  }
};
