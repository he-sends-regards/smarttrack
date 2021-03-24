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
import {useDispatch} from "react-redux";

import {Color, alerts} from "../../const";
import {generateId} from "../../utils";
import Button from "../buttons/button";

interface IalertModal {
  onPress: () => void;
  visible: boolean;
}

const AlertModal = ({onPress, visible}: IalertModal) => {
  const [status, onChangeStatus] = useState("Status");
  const [colorAlert, setColorAlert] = useState("");

  const dispatch = useDispatch();

  const createAlert = (status: string, color: string): void => {
    console.log("statu", status, color);
    dispatch({type: "ADD_ALERT", payload: {status, color}});
  };

  const adjustBorderColor = (color: string, amount: number): string => {
    return (
      "#" +
      color
        .replace(/^#/, "")
        .replace(/../g, color =>
          (
            "0" +
            Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
              16
            )
          ).substr(-2)
        )
    );
  };

  return (
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
            onChangeText={onChangeStatus}
            value={status}
          />

          <Text style={styles.modalInputTitle}>Color</Text>
          <View style={styles.alertsContainer}>
            {alerts.map(({color}) => (
              <TouchableOpacity
                key={generateId()}
                onPress={() => {
                  setColorAlert(color);
                }}>
                <View style={styles.alertItemContainer}>
                  <View
                    style={{
                      ...styles.alertItem,
                      backgroundColor: color,
                      borderColor: adjustBorderColor(color, -50),
                      // ...{
                      //     // colorAlert === color ?  { borderWidth: 5,
                      //     // width: 59,
                      //     // height: 59,} : { borderWidth: 2,
                      //     // width: 45,
                      //     // height: 45,}}
                    }}
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
            onPress={() => {
              createAlert(status, colorAlert);
              onPress();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeModal: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeModalBtn: {
    width: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    borderWidth: 2,
    width: 45,
    height: 45,
    borderRadius: 50,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AlertModal;
