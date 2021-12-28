import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../assets/Colors";
import { ThemeContext } from "../Context/ThemeProvider";

export default function Button(props) {
  const { isLight } = useContext(ThemeContext);

  const buttonTextColor = props.green
    ? Colors.secondaryText
    : props.red
    ? Colors.danger
    : isLight
    ? Colors.light.primaryText
    : Colors.dark.primaryText;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: isLight
        ? Colors.light.buttonBackground
        : Colors.dark.buttonBackground,
      alignItems: "center",
      justifyContent: "center",
      height: 60,
      marginHorizontal: 10,
      marginVertical: "3%",
      width: 60,
      borderRadius: 15,
    },
    placeHolder: {
      fontSize: 24,
      fontWeight: "bold",
      color: buttonTextColor,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.placeHolder}>{props.children}</Text>
    </TouchableOpacity>
  );
}
