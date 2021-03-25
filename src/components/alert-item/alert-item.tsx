import React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";

import {primaryColor, textBaseColor} from "../../const";
import {createColor} from "../../utils";
import Text from "../custom-text/custom-text";
import EditIcon from "../stuff-item/img/edit.svg";

type AlertItemType = {
  status: string;
  color: string;
};

interface AlertProps {
  alertItem: AlertItemType;
  index: number;
  setModalStatus: () => void;
}

const AlertItem = ({alertItem, index, setModalStatus}: AlertProps) => {

  // const alertSelected =
  // alertItem.color === color
  //     ? {
  //       borderWidth: 4,
  //       height: 59,
  //       width: 359,
  //       }
  //     : {
  //       borderWidth: 2,
  //       height: 37,
  //       width: 37,
  //       };

  console.log("alertItem", alertItem);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.coloredNumber}>
          <Text text={`${index + 1}`} />
        </View>
        <View style={styles.innerContainer}>
          <Text text={alertItem.status} fontSize="l" />
          <View style={styles.configContainer}>
            <View
              style={{
                ...styles.alertColor,
                backgroundColor: alertItem.color,
                borderColor: createColor(alertItem.color, -50),
                // ...alertSelected,
              }}
            />
            <EditIcon
              style={styles.editBtn}
              onPress={() =>
                setModalStatus({
                  isOpened: true,
                  actionType: "edit",
                  options: alertItem,
                })
              }
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 70,
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  configContainer: {
    width: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    alignItems: "center",
  },
  coloredNumber: {
    width: "10%",
    height: "100%",
    backgroundColor: primaryColor,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.3,
    borderBottomRightRadius: 20,
    color: textBaseColor,
  },
  alertColor: {
    borderRadius: 50,
    borderWidth: 2,
    height: 37,
    width: 37,
  },
  editBtn: {},
});

export default AlertItem;
