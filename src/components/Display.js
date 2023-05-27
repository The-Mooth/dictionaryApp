import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";


const Display = ({definition, theme, font}) => {

    if (definition === "") {
        return(
            null
        )
    }
    console.log(definition.word)
    const data = JSON.parse(definition)

return(
    <View style={styles.container}> 
        <View style={styles.row}>
            <Text style={[styles.word, {fontFamily: font+'-bold'}]}> {data.word} </Text>
        </View>
        <Text style={[styles.word, {fontFamily: font+'-regular'}]}> {data.phonetic} </Text>
    </View>
)

}

const styles = StyleSheet.create({



    word : {
        fontSize: 40,

    },

    row : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },

    container: {
        width: "80%",

    },


});

export default Display;