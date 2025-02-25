import { Children, createContext, useContext, useReducer, useState } from "react";
import { calculatorReducer } from "./calcualtorReducer";



const calculatorContext = createContext();

export const CalculatorProvider = ({children})=>{
  const[state , dispatch] = useReducer(calculatorReducer , {value : ""});

  return (
    <calculatorContext.Provider  value = {{state, dispatch}}>
    {children}
    </calculatorContext.Provider>
  );
};

export const useCalculator = ()=>{
  return useContext(calculatorContext)
}
