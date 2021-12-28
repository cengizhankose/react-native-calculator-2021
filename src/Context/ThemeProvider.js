import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [isLight, setIsLight] = useState(false);

  const handleThemeChange = () => setIsLight(!isLight);

  return (
    <ThemeContext.Provider value={{ isLight, handleThemeChange }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
