import React, {useState} from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import {Color, alertTypes} from "../../const";
import {generateId} from "../../utils";
import Button from "../buttons/button";

interface IalertModal {
  onPress: () => void;
  visible: boolean;
}

const AlertModal = ({onPress, visible}: IalertModal) => {
  const [text, onChangeText] = useState("Status");

  return (
    // <View style={styles.modalContainer}>
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => onPress()}
              style={styles.closeModal}>
              <View>
                <Image
                  style={styles.closeModalBtn}
                  source={require("./img/closeModal.png")}
                />
              </View>
            </TouchableHighlight>
            <Text style={styles.modalText}>Status would be here</Text>
            <Text style={styles.modalInputTitle}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />

            <Text style={styles.modalInputTitle}>Color</Text>
            <View style={styles.alertsContainer}>
              {alertTypes.map(({color}) => (
                <TouchableOpacity
                  key={generateId()}
                  onPress={() => {
                    console.log("color");
                  }}>
                  <View style={styles.alertItemContainer}>
                    <View
                      style={{...styles.alertItem, backgroundColor: color}}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <Button
              title="Save"
              color="white"
              backgroundColor={Color.primaryColor}
              width="100%"
              onPress={() => onPress()}
            />
          </View>
        </View>
      </Modal>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  //modalContainer: {
  // flex: 1,
  // backgroundColor: "rgba(0, 0, 0, 0.5)",
  // },
  closeModal: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeModalBtn: {
    width: 25,
  },
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    marginBottom: 15,
    textAlign: "center",
    marginTop: 15,
  },
  modalInputTitle: {
    textAlign: "left",
    paddingLeft: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#DADADA",
    paddingLeft: 10,
  },
  alertsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 40,
    marginTop: 20,
    paddingLeft: 10,
  },
  alertItemContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  alertItem: {
    borderWidth: 1,
    width: 45,
    height: 45,
    borderRadius: 50,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AlertModal;
