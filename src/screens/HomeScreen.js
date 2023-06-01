import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";

import handleSearch from "../hooks/HandleSearch";
import Logo from "../components/svgs/logo";
import Arrow from "../components/svgs/arrow";
import Moon from "../components/svgs/moon";
import Search from "../components/svgs/search";
import { useThemeColors } from "../hooks/useThemeColors";
import { useCustomTheme } from "../hooks/useCustomTheme";
import { Switch } from "react-native-gesture-handler";
import MakeMenu from "../components/FontMenu";
import Display from "../components/Display";
import { MyText, MyTextBold, MyTextSub } from "../theme/Text";
import Typo from "../components/typo";

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
  const { theme, setTheme, font, setFont } = useCustomTheme();
  
  const [isFocused, setIsFocused] = useState(false);

  const buttonStart = theme === "light" ? false : true;

  const [isEnabled, setIsEnabled] = useState(buttonStart);

  const [emptySearch, setEmptySearch] = useState(false);

  const handleEnter = (setDefinition, word) => {
    if (word === "") {
      setDefinition("");
      setEmptySearch(true);
      return;
    }
    handleSearch(setDefinition, word);
  };

  return (
    <SafeAreaView
    testID="mainView"
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.row}>
        <Logo />
        <View style={styles.subRow}>
          
            <MakeMenu setFont={setFont} font={font} colors={colors}/>
          
          <MyTextSub style={{ marginHorizontal: 10, fontSize: 20}}>|</MyTextSub>

          <Switch testID="themeSwitch"
            trackColor={{ false: colors.moon, true: colors.moon }}
            //thumbColor={isEnabled ? colors.moon : colors.moon}
            onValueChange={
            //() => setIsEnabled((previousState) => !previousState)
            () => handleToggleTheme(theme, setTheme, setIsEnabled, isEnabled)
          }
            value={isEnabled}
          />

          <Moon fill={colors.moon} />
        </View>
      </View>
      <View style={[styles.input, { backgroundColor: colors.input, borderColor: colors.background }, isFocused && {borderColor: 'hsl(274, 82%, 60%)'}, emptySearch && {borderColor: 'hsl(0, 100%, 66%)'}]}>
        <TextInput testID="myTextInput"
          style={[
            styles.inputArea,
            { fontFamily: font + "-bold", color: colors.text, fontSize: 20 },
          ]}
          placeholder="Search for any word..."
          placeholderTextColor={colors.subText}
          value={word}
          onChangeText={(text) => {setWord(text); setEmptySearch(false)}}

          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Pressable testID="search" onPress={() => handleEnter(setDefinition, word)}>
          <Search />
        </Pressable>
      </View>
      {emptySearch ? <View style={styles.empty}><MyText style={{color: 'hsl(0, 100%, 66%)'}}>Whoops, can't be empty...</MyText></View> : <View/>}
      {definition === "ERRORHANDLE"? <Typo testID="typo"/> :(
        definition === "" ? null : <Display definition={definition} colors={colors}/>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  empty: {
    width: "90%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: -12,
  },
  bottomRow: {
    paddingTop: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  line: {
    height: 1,
    width: "100%",
  },

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
    height: 50,
    //backgroundColor: colors.input,
    borderRadius: 15,
    marginTop: 15,
    paddingHorizontal: 25,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
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
    //fontFamily: 'serif-bold',
  },
});

export default HomeScreen;
