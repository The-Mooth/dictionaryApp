import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./context/Themes";
import HomeScreen from "./screens/HomeScreen";

//const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
      <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
  /*return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );*/
};

export default App;
