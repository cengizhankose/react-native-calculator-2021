import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Calculator from "./src/pages/Calculator";
import ThemeProvider from "./src/Context/ThemeProvider";
import CalculatorProvider from "./src/Context/CalculatorProvider";

export default function App() {
  return (
    <CalculatorProvider>
      <ThemeProvider>
        <StatusBar style="auto" />
        <Calculator />
      </ThemeProvider>
    </CalculatorProvider>
  );
}
