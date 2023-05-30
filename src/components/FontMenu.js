import { Modal, Pressable, View, StyleSheet } from "react-native";
import { useCustomTheme } from "../hooks/useCustomTheme";
import { useState } from "react";
import Arrow from "./svgs/arrow";
import { MyText, MyTextBold } from "../theme/Text";

const MakeMenu = ({ setFont, font, colors }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    console.log("open modal");
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={[styles.button]}>
      <Pressable onPress={openModal} style={styles.content}>
        <MyTextBold style={{ marginRight: 10 }}>{font}</MyTextBold>
        <Arrow />
      </Pressable>
      <Modal
        //animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Pressable onPress={closeModal} style={styles.modal}>
          <View style={[styles.modalView, { backgroundColor: colors.modal }]}>
            <Pressable
              onPress={() => setFont("sans")}
              style={styles.modalButton}
            >
              <MyTextBold style={{ fontFamily: "sans-regular" }}>Sans Serif</MyTextBold>
            </Pressable>
            <Pressable
              onPress={() => setFont("serif")}
              style={styles.modalButton}
            >
              <MyTextBold style={{ fontFamily: "serif-regular" }}>
                Serif
              </MyTextBold>
            </Pressable>
            <Pressable
              onPress={() => setFont("mono")}
              style={styles.modalButton}
            >
              <MyTextBold style={{ fontFamily: "mono-regular" }}>Mono</MyTextBold>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalButton: {
    width: "100%",
    height: "33%",
    justifyContent: "center",

  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    height: 20,
    width: 80,
  },

  modal: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    //paddingLeft: "50%",
    //paddingTop: "10%",
  },
  modalView: {
    width: "35%",
    height: "20%",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: "45%",
    marginTop: "10%",
  },
});

export default MakeMenu;
