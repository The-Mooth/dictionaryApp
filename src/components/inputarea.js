import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import handleSearch from "../hooks/HandleSearch";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";
import search from "./svgs/search"

const InputArea = (word, handleInputChange, setDefinition) => {

    
  return (
    <View style={styles.input}>
      <TextInput
        ///style={styles.input}
        placeholder="Enter a word"
        value={word}
        onChangeText={handleInputChange}
      />
      
      
      {<TouchableOpacity
        style={styles.button}
        onPress={() => handleSearch(setDefinition, word)}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingTop: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});

export default InputArea;
