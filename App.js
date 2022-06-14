import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AnimatedSplashScreen from "./src/components/AnimatedSplashScreen";
import Logo from "./assets/logo.png";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#BF9B30",
      accent: "yellow",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <AnimatedSplashScreen image={Logo}>
          <Text>Wow</Text>
        </AnimatedSplashScreen>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
