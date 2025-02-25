export const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return { ...state, value: state.value + action.payload };

    case "CLEAR":
      return { ...state, value: "" };

    case "DELETE":
      return { ...state, value: state.value.slice(0, -1) };

    case "EVALUATE":
      try {
        return { ...state, value: eval(state.value).toString() };
      } catch {
        return { ...state, value: "Error" };
      }

    default:
      return state;
  }
};