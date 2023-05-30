import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
//import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./context/Themes";
import HomeScreen from "./screens/HomeScreen";

//const Stack = createStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts({
    'mono-regular': require('../assets/fonts/inconsolata/static/Inconsolata-Regular.ttf'),
    'mono-bold': require('../assets/fonts/inconsolata/static/Inconsolata-Bold.ttf'),
    'sans-regular': require('../assets/fonts/inter/static/Inter-Regular.ttf'),
    'sans-bold': require('../assets/fonts/inter/static/Inter-Bold.ttf'),
    'serif-regular': require('../assets/fonts/lora/static/Lora-Regular.ttf'),
    'serif-bold': require('../assets/fonts/lora/static/Lora-Bold.ttf'),
    //'SpaceMono-Bold': require('../../assets/fonts/SpaceMono-Bold.ttf'),
  });

  /*
  useEffect(() => {
    const fetchSetting = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    fetchSetting();
  }, [fontsLoaded]);
*/
  if (!fontsLoaded) return null;
  
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
