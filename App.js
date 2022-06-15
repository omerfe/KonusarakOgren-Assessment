import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AnimatedSplashScreen from "./src/components/AnimatedSplashScreen";
import Logo from "./assets/logo.png";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import RootNavigator from "./src/navigation";
import { View } from "react-native";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#309DFF",
      accent: "#EA7B26",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
          <AnimatedSplashScreen image={Logo}></AnimatedSplashScreen>
          <RootNavigator/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
