import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = ()=>{
  return useContext(ThemeContext)
}

export const ThemeProvider = ({children})=>{
  const [darkmode, setDarkMode]= useState(true)

  const toggleTheme = ()=>{
    setDarkMode((prevState)=>!prevState)
  };

  const theme = darkmode ? "dark" : "light"

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme)
  },[darkmode])

  return <ThemeContext.Provider value={{theme, toggleTheme}} >
    {children}
  </ThemeContext.Provider>
}