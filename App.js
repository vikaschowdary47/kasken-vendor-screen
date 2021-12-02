import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTab from "./src/navigation/BottomTab";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
