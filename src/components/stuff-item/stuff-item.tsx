import React from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";

import {ActionType} from "../../store/actions";
import {stuffWorkerType} from "../../types";
import {generateId} from "../../utils";
import Text from "../custom-text/custom-text";
import DeleteIcon from "./img/delete.svg";
import EditIcon from "./img/edit.svg";

interface StuffProps {
  stuffWorkerData: stuffWorkerType;
  index: number;
  onStuffItemDelete: Function;
}

const StuffItem = ({stuffWorkerData, index, onStuffItemDelete}: StuffProps) => {
  const dispatch = useDispatch();

  const onFormEditClick = () => {
    dispatch({type: ActionType.SWITCH_STUFF_FORM_STATUS});
    dispatch({
      type: ActionType.SET_STUFF_FORM_DEFAULT_VALUE,
      payload: stuffWorkerData,
    });
  };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.coloredBlock}>
          <Text text={`${index + 1}`} fontWeight="bold" />
        </View>

        <View>
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => {
                onFormEditClick();
              }}>
              <EditIcon style={styles.controlsLogo} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onStuffItemDelete(stuffWorkerData.id)}>
              <DeleteIcon style={styles.controlsLogo} />
            </TouchableOpacity>
          </View>

          <View style={styles.stuffInfo}>
            <Text
              text={stuffWorkerData.name}
              additionalStyle={styles.stuffItemName}
              fontSize="l"
            />
            <Text
              text={stuffWorkerData.email}
              additionalStyle={styles.stuffItem}
            />
            <Text
              text={stuffWorkerData.phoneNumber}
              additionalStyle={styles.stuffItem}
            />
            <View style={styles.rooms}>
              <Text text="Rooms:" fontWeight="bold" />
              <View style={styles.roomsText}>
                {stuffWorkerData.rooms.map(room => (
                  <Text key={generateId()} text={`${room} `} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: "5%",
    backgroundColor: "white",
  },
  coloredBlock: {
    width: "10%",
    backgroundColor: "#6AC7BE",
    marginRight: 20,
    alignItems: "center",
    paddingTop: 15,
    borderWidth: 1,
    borderColor: "#6AC7BE",
    borderTopLeftRadius: 20,
  },
  stuffInfo: {
    alignItems: "flex-start",
  },
  stuffItem: {
    marginBottom: "4%",
  },
  stuffItemName: {
    marginBottom: "10%",
  },
  controls: {
    width: "100%",
    flexDirection: "row",
    marginLeft: "65%",
    marginTop: 15,
    marginBottom: 10,
  },
  controlsLogo: {
    width: 15,
    marginRight: 30,
  },
  rooms: {
    width: 120, // Recount to remove hardcode
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  roomsText: {flexDirection: "row"},
});

export default StuffItem;
