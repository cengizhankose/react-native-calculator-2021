import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../assets/Colors";
import { AntDesign } from "@expo/vector-icons";

//Components
import Button from "../components/Button";
import Switch from "../components/Switch";

//Context
import { ThemeContext } from "../Context/ThemeProvider";
import { CalculatorContext } from "../Context/CalculatorProvider";

const Calculator = () => {
  const { isLight } = useContext(ThemeContext);
  const {
    currentCalculation,
    handleAddCalculation,
    handleDeleteAll,
    handleDeleteOne,
    handleResult,
    secondaryField,
    handleNegative,
    handlePercentage,
  } = useContext(CalculatorContext);

  const numPad = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: isLight ? Colors.light.primary : Colors.dark.primary,
      alignItems: "center",
      height: "100%",
      paddingTop: 40,
    },
    themeSwitch: {
      flex: 1,
      justifyContent: "flex-end",
    },
    resultsContainer: {
      flex: 4,
      width: "100%",
      paddingHorizontal: 40,
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    numpadContainer: {
      flex: 8.5,
      width: "100%",
      marginTop: 50,
      paddingVertical: 20,
      paddingHorizontal: "5%",
      backgroundColor: isLight ? Colors.light.secondary : Colors.dark.secondary,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
    textSecondary: {
      color: isLight ? Colors.light.primaryText : Colors.dark.primaryText,
      fontSize: 25,
    },
    textPrimary: {
      color: isLight ? Colors.light.primaryText : Colors.dark.primaryText,
      fontSize: 60,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.themeSwitch}>
        <Switch />
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.textSecondary}>{secondaryField}</Text>
        <Text style={styles.textPrimary}>{currentCalculation}</Text>
      </View>
      <View style={styles.numpadContainer}>
        <Button green onPress={handleDeleteAll}>
          AC
        </Button>
        <Button green onPress={handleNegative}>
          +/-
        </Button>
        <Button green onPress={handlePercentage}>
          %
        </Button>
        <Button red onPress={() => handleAddCalculation("/")}>
          /
        </Button>
        <Button onPress={() => handleAddCalculation("7")}>7</Button>
        <Button onPress={() => handleAddCalculation("8")}>8</Button>
        <Button onPress={() => handleAddCalculation("9")}>9</Button>
        <Button red onPress={() => handleAddCalculation("*")}>
          X
        </Button>
        <Button onPress={() => handleAddCalculation("4")}>4</Button>
        <Button onPress={() => handleAddCalculation("5")}>5</Button>
        <Button onPress={() => handleAddCalculation("6")}>6</Button>
        <Button red onPress={() => handleAddCalculation("-")}>
          -
        </Button>
        <Button onPress={() => handleAddCalculation("1")}>1</Button>
        <Button onPress={() => handleAddCalculation("2")}>2</Button>
        <Button onPress={() => handleAddCalculation("3")}>3</Button>
        <Button red onPress={() => handleAddCalculation("+")}>
          +
        </Button>
        <Button onPress={handleDeleteOne}>
          <AntDesign
            name="back"
            size={30}
            color={isLight ? Colors.light.primaryText : Colors.dark.primaryText}
          />
        </Button>
        <Button onPress={() => handleAddCalculation("0")}>0</Button>
        <Button onPress={() => handleAddCalculation(".")}>.</Button>
        <Button red onPress={handleResult}>
          =
        </Button>
      </View>
    </View>
  );
};

export default Calculator;
