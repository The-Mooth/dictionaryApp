import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView
} from "react-native";
import { MyText, MyTextBold } from "../theme/Text";


const Display = ({definition, theme, font}) => {

    if (definition === "") {
        return(
            null
        )
    }
    console.log(definition.word)
    const data = JSON.parse(definition)

return(
    <ScrollView style={styles.container}> 
        <View style={styles.row}>
            <MyTextBold style={styles.word}> {data.word} </MyTextBold>
            {//put the big ol button here!!
            }
        </View>
        <MyText style={styles.phonetic}> {data.phonetic} </MyText>
    </ScrollView>
)

}

const styles = StyleSheet.create({

    phonetic : {
        color: 'hsl(274, 82%, 60%)',
        fontSize: 18,
    },

    word : {
        fontSize: 40,

    },

    row : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },

    container: {
        width: "95%",

    },


});

export default Display;