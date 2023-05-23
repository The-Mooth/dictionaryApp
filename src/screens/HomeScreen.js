import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";

import handleSearch from "../hooks/HandleSearch";
import Logo from "../components/svgs/logo";
import Arrow from "../components/svgs/arrow";
import Moon from "../components/svgs/moon";
import Search from "../components/svgs/search";
import { useThemeColors } from "../hooks/useThemeColors";
import { useCustomTheme } from "../hooks/useCustomTheme";
import { Switch } from "react-native-gesture-handler";


const handleToggleTheme = (theme, setTheme, setIsEnabled, isEnabled) => {

  //setIsEnabled(!isEnabled);
  const nextTheme = theme === "light" ? "dark" : "light";
  setTheme(nextTheme);
  setIsEnabled(!isEnabled);
};


const HomeScreen = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const { colors } = useThemeColors();
  const { theme, setTheme } = useCustomTheme();

  const buttonStart = theme === "light" ? false : true;

  const [isEnabled, setIsEnabled] = useState(buttonStart);

  

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.row}>
        <Logo />
        <View style = {styles.subRow}>
          <Text style={{color: colors.moon}}> "hell0"</Text>
          <Switch
            trackColor={{ false: colors.moon, true: colors.moon }}
            //thumbColor={isEnabled ? colors.moon : colors.moon}
            onValueChange={() => handleToggleTheme(theme, setTheme, setIsEnabled, isEnabled)}
              //() => setIsEnabled((previousState) => !previousState)}
            value={isEnabled}
          />

          <Moon fill={colors.moon}/>
        </View>
      </View>
      <View style={[styles.input, {backgroundColor: colors.input}]}>
        <TextInput
          style={styles.inputArea}
          placeholder="Enter a word"
          value={word}
          onChangeText={(text) => setWord(text)}
        />
        <Pressable onPress={() => handleSearch(setDefinition, word)}>
          <Search/>
        </Pressable>
      </View>
      {definition ? <Text style={styles.definition}>{definition}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f5fcff",
  },

  row: {
    paddingTop: 5,
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  subRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    //alignItems: "center",
    //marginHorizontal: 15,

    //marginBottom: 20,
  },
  input: {
    //width: "85%",
    height: 40,
    //backgroundColor: colors.input,
    borderRadius: 15,
    marginTop: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputArea: {
    width: "90%",
  },

  button: {
    backgroundColor: "#4285f4",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  definition: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
