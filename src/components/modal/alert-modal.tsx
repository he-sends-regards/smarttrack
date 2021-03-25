import React, {useState} from "react";
import {
  StyleSheet,
  Modal,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import {useDispatch} from "react-redux";

import {Color, alerts} from "../../const";
import {createColor, generateId} from "../../utils";
import Button from "../buttons/button";
import Text from "../custom-text/custom-text";
interface IalertModal {
  onPress: () => void;
  visible: boolean;
  activeListItem: string;
  // setModalStatus: () => void;
  setModalStatus: {isOpened: boolean; actionType: string; options: object};
}

const AlertModal = ({
  onPress,
  visible,
  activeListItem,
  setModalStatus,
}: IAlertModal) => {
  const [status, onChangeStatus] = useState("");
  const [colorAlert, setColorAlert] = useState("");
  const [errors, setErrors] = useState({requiredStatus: "", requiredColor: ""});

  const dispatch = useDispatch();

  const createAlert = (
    status: string,
    color: string,
    type: string = activeListItem
  ): void => {
    if (status.trim().length < 3) {
      setErrors(prev => {
        return {
          ...prev,
          requiredStatus: "Status should be at least 3 symbols!",
        };
      });
    }
    if (!colorAlert) {
      setErrors(prev => {
        return {...prev, requiredColor: "Please select color!"};
      });
    } else {
      dispatch({type: "ADD_ALERT", payload: {type, data: {color, status}}});
      onPress();
    }
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() =>
              // setModalStatus({isOpened: false})
              setModalStatus(prev => {
                return {
                  ...prev,
                  isOpened: false,
                };
              })
            }
            style={styles.closeModal}>
            <View>
              <Image
                style={styles.closeModalBtn}
                source={require("./img/closeModal.png")}
              />
            </View>
          </TouchableHighlight>
          <Text
            fontSize="l"
            additionalStyle={styles.modalText}
            text="Status would be here"
          />
          <Text additionalStyle={styles.modalInputTitle} text="Name" />
          <Text
            color="red"
            text={errors.requiredStatus.length > 0 ? errors.requiredStatus : ""}
            additionalStyle={styles.modalTextErrors}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeStatus}
            value={status}
            maxLength={25}
          />

          <Text additionalStyle={styles.modalInputTitle} text="Color" />
          <Text
            color="red"
            additionalStyle={styles.modalTextErrors}
            text={errors.requiredColor.length > 0 ? errors.requiredColor : ""}
          />
          <View style={styles.alertsContainer}>
            {alerts.map(({color}) => (
              <TouchableOpacity
                key={generateId()}
                onPress={() => {
                  setColorAlert(color);
                }}>
                <View
                  style={{
                    ...styles.alertItemContainer,
                    marginHorizontal: colorAlert === color ? 6 : 10,
                  }}>
                  <View
                    style={{
                      ...styles.alertItem,
                      backgroundColor: color,
                      borderColor: createColor(color, -50),
                      borderWidth: colorAlert === color ? 4 : 2,
                      width: colorAlert === color ? 56 : 45,
                      height: colorAlert === color ? 56 : 45,
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
    paddingHorizontal: 25,
    paddingBottom: 35,
    paddingTop: 20,
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
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    marginTop: 15,
  },
  modalTextErrors: {
    paddingLeft: 20,
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
  },
  alertItemContainer: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  alertItem: {
    borderRadius: 50,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AlertModal;
