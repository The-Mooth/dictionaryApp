import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  Linking,
} from "react-native";
import { MyText, MyTextSub, MyTextBold, MyTextDot } from "../theme/Text";
import SoundButton from "./soundButton";
import PlayAudio from "./playSound";
import Play from "./svgs/play";

const Display = ({ definition, colors }) => {

  const playAudio = async ({data}) => {
    const soundObject = new Audio.Sound();
    const soundUrl = "";

    if (data === undefined)
    {
      console.log("data is undefined");
      return;
    }

    if(data.phonetics === undefined)
    {
      console.log("data.phonetics is undefined");
      return;
    }


     data.phonetics.map((phonetic) => {
        if (phonetic.audio != undefined && phonetic.audio != "") {
          return soundUrl = phonetic.audio;
        }
      })
    

    if (soundUrl === "") {
        return;
    }
    try {
      // Load the audio file
      await soundObject.loadAsync({ uri: soundUrl });
  
      // Play the audio
      await soundObject.playAsync();
    } catch (error) {
      console.log('Error playing audio:', error);
    }
  };



  if (definition === "") {
    return null;
  }
  console.log(definition.word);
  const data = JSON.parse(definition);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.row}>
        <View>
          <MyTextBold style={styles.word}> {data.word} </MyTextBold>
          <MyText style={styles.phonetic}> {data.phonetic} </MyText>
        </View>

        <Pressable onPress={() => PlayAudio(data)}><Play/></Pressable>

      </View>

      <ScrollView style={styles.container}>
        {
          //for each figure of speech
          data.meanings.length > 0
            ? data.meanings.map((meaning, index) => (
                <View key={index}>
                  <View style={styles.row}>
                    <MyTextBold style={{ marginVertical: 5 }}>
                      {" "}
                      {meaning.partOfSpeech}{" "}
                    </MyTextBold>
                    <View
                      style={[styles.line, { backgroundColor: colors.input }]}
                    />
                  </View>
                  <MyTextSub style={{ marginVertical: 5 }}>Meaning</MyTextSub>
                  {
                    //for each definition
                    meaning.definitions.length > 0
                      ? meaning.definitions.map((definition, index) => (
                          <View key={index}>
                            <View style={styles.subRow}>
                              <MyTextDot>•</MyTextDot>
                              <MyText style={{ marginVertical: 5 }}>
                                {" "}
                                {definition.definition}{" "}
                              </MyText>
                            </View>

                            {
                              //for each example
                              definition.example ? (
                                <MyTextSub style={{ paddingHorizontal: 8 }}>
                                  {" "}
                                  {'"' + definition.example + '"'}{" "}
                                </MyTextSub>
                              ) : null
                            }
                          </View>
                        ))
                      : null
                  }
                  {meaning.synonyms.length > 0 ? (
                    <View style={styles.subRow}>
                      <MyTextSub>Synonyms </MyTextSub>
                      <MyText style={{ color: "hsl(274, 82%, 60%)" }}>
                        {" "}
                        {meaning.synonyms.join(", ")}{" "}
                      </MyText>
                    </View>
                  ) : null}
                  {meaning.antonyms.length > 0 ? (
                    <View style={styles.subRow}>
                      <MyTextSub>Antonyms </MyTextSub>
                      <MyText style={{ color: "hsl(274, 82%, 60%)" }}>
                        {" "}
                        {meaning.antonyms.join(", ")}{" "}
                      </MyText>
                    </View>
                  ) : null}
                </View>
              ))
            : null
        }
        {data.sourceUrls.length > 0 ? (
          <>
            <View
              style={[styles.bottomLine, { backgroundColor: colors.input }]}
            />
            <MyTextSub style={{ fontSize: 12 }}>Source</MyTextSub>
            <Pressable onPress={() => Linking.openURL(data.sourceUrls[0])}>
              <MyText style={{ fontSize: 12, marginBottom: 5 }}>
                {data.sourceUrls[0]}
              </MyText>
            </Pressable>
          </>
        ) : null}
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
