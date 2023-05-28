import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { MyText, MyTextSub, MyTextBold, MyTextDot } from "../theme/Text";

const Display = ({ definition, colors}) => {
  if (definition === "") {
    return null;
  }
  console.log(definition.word);
  const data = JSON.parse(definition);

  return (
    
    <View style={{ flex: 1}}>
        <View style={styles.row}>
        <MyTextBold style={styles.word}> {data.word} </MyTextBold>
        {
          //put the big ol button here!!
        }
      </View>
      <MyText style={styles.phonetic}> {data.phonetic} </MyText>

    <ScrollView style={styles.container}>
      {//for each figure of speech
      data.meanings.length > 0 ? (
        data.meanings.map((meaning, index) => (
          <View key={index}>
            <View style={styles.row}>
              <MyTextBold> {meaning.partOfSpeech} </MyTextBold>
              <View style={[styles.line, {backgroundColor: colors.input}]} />
            </View>
            <MyTextSub>Meaning</MyTextSub>
            {//for each definition
            meaning.definitions.length > 0 ? (
                meaning.definitions.map((definition, index) => (
                    <View key={index}>
                        <View style={styles.subRow}>
                        <MyTextDot>•</MyTextDot>
                        <MyText> {definition.definition} </MyText>
                        </View>
                    
                    {//for each example
                    definition.example ? (
                        <MyTextSub> {definition.example} </MyTextSub>
                    ) : (
                        <MyText>no example</MyText>
                    )}

                    </View>

                ))
            ) : (
                <MyText>no defs</MyText>
            )}
            {meaning.synonyms.length > 0 ? (
                <View style={styles.row}>
                    <MyText>Synonyms</MyText>
                    <MyText style={{color: 'hsl(274, 82%, 60%)'}}> {meaning.synonyms.join(", ")} </MyText>
                </View>
            ) : (
                <MyText>no synonyms</MyText>
            )}
            {meaning.antonyms.length > 0 ? (
                <View style={styles.subRow}>
                    <MyText>Antonyms</MyText>
                    <MyText style={{color: 'hsl(274, 82%, 60%)'}}> {meaning.antonyms.join(", ")} </MyText>
                </View>
            ) : (
                <MyText>no antonyms</MyText>
            )}
          </View>
        ))
      ) : (
        <MyText>no figures of speech???</MyText>
      )}
      <View style={[styles.bottomLine, {backgroundColor: colors.input}]} />
        <MyTextSub style={{fontSize: 12}}>Source</MyTextSub>
        <Pressable>
          <MyText style={{fontSize: 12}}>`https://api.dictionaryapi.dev/api/v2/entries/en/{data.word}`</MyText>
        </Pressable>
    </ScrollView>
    </View>
  );

};

const styles = StyleSheet.create({

    subRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        },

  line: {
    height: 1,
    width: "80%",
  },

  bottomLine: {
    height: 1,
    width: "100%",
  },

  phonetic: {
    color: "hsl(274, 82%, 60%)",
    fontSize: 18,
  },

  word: {
    fontSize: 40,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  container: {
    width: "95%",
  },
});

export default Display;
