import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import handleSearch from "../hooks/HandleSearch";
import Logo from "../components/svgs/logo";
import Arrow from "../components/svgs/arrow";
import Moon from "../components/svgs/moon";
import { Switch } from "react-native-gesture-handler";



const HomeScreen = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const { colors } = useThemeColors();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Logo />
        <View style = {styles.subRow}>
          <Text> "hell0"</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            onValueChange={() =>
              setIsEnabled((previousState) => !previousState)
            }
            value={isEnabled}
          />

          <Moon style={{color: colors.moon}}/>
        </View>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter a word"
          value={word}
          onChangeText={(text) => setWord(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSearch(setDefinition, word)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
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
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
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
