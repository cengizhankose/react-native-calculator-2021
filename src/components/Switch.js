import React, { useContext } from "react";
import { Switch } from "react-native";
import { Colors } from "../assets/Colors";
import { ThemeContext } from "../Context/ThemeProvider";

const ThemeSwitch = (props) => {
  const { isLight, handleThemeChange } = useContext(ThemeContext);
  return (
    <Switch
      style={props.style}
      trackColor={{
        false: Colors.dark.secondary,
        true: Colors.light.secondary,
      }}
      thumbColor={isLight ? Colors.light.primary : Colors.dark.primary}
      onValueChange={handleThemeChange}
      value={isLight}
    />
  );
};

export default ThemeSwitch;
