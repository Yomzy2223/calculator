export const initialState = {
  homeValue: "",
  downPayment: "",
  loanAmount: "",
  interestRate: "",
  loanTerm: "",
  startDate: "",
  propertyTax: "",
  PMI: "",
  homeInsurance: "",
  HOA: "",
};

export const reducer = (
  state: any,
  action: { type: string; payload?: string }
) => {
  switch (action.type) {
    case "Home Value":
      return {
        ...state,
        homeValue: action.payload,
      };
    case "Down Payment":
      return {
        ...state,
        downPayment: action.payload,
      };
    case "Loan Amount":
      return {
        ...state,
        loanAmount: action.payload,
      };
    case "Interest Rate":
      return {
        ...state,
        interestRate: action.payload,
      };
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
