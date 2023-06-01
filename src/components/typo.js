import { View, StyleSheet } from "react-native";
import { MyText, MyTextBold, MyTextSub } from "../theme/Text";

const Typo = () => {
  return (
    <View style={styles.container}>
      <MyText style={styles.word}> {String.fromCodePoint(0x1f641)} </MyText>
      <MyTextBold style={{ marginBottom: 15 }}>No Definitions Found</MyTextBold>
      <MyTextSub style={{ marginHorizontal: 20 }}>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </MyTextSub>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  word: {
    fontSize: 50,
    marginBottom: 15,
  },
});

export default Typo;
