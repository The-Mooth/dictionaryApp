import React from "react";

import { useFonts } from "expo-font";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./context/Themes";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  const [fontsLoaded] = useFonts({
    "mono-regular": require("../assets/fonts/inconsolata/static/Inconsolata-Regular.ttf"),
    "mono-bold": require("../assets/fonts/inconsolata/static/Inconsolata-Bold.ttf"),
    "sans-regular": require("../assets/fonts/inter/static/Inter-Regular.ttf"),
    "sans-bold": require("../assets/fonts/inter/static/Inter-Bold.ttf"),
    "serif-regular": require("../assets/fonts/lora/static/Lora-Regular.ttf"),
    "serif-bold": require("../assets/fonts/lora/static/Lora-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
