import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

import {formType} from "../../const";
import {stuffWorkerType} from "../../types";
import {generateId} from "../../utils";
import DeleteIcon from "./img/delete.svg";
import EditIcon from "./img/edit.svg";

interface StuffProps {
  stuffWorkerData: stuffWorkerType;
  index: number;
  onStuffItemDelete: Function;
  setFormStatus: Function;
}

const StuffItem = ({
  stuffWorkerData,
  index,
  onStuffItemDelete,
  setFormStatus,
}: StuffProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.coloredBlock}>
          <Text>{index + 1}</Text>
        </View>

        <View>
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => {
                setFormStatus({
                  isOpened: true,
                  initiator: formType.EDIT,
                  options: {id: stuffWorkerData.id},
                });
              }}>
              <EditIcon style={styles.controlsLogo} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onStuffItemDelete(stuffWorkerData.id)}>
              <DeleteIcon style={styles.controlsLogo} />
            </TouchableOpacity>
          </View>

          <View style={styles.stuffInfo}>
            <Text style={styles.stuffItemName}>{stuffWorkerData.name}</Text>
            <Text style={styles.stuffItem}>{stuffWorkerData.email}</Text>
            <Text style={styles.stuffItem}>{stuffWorkerData.phoneNumber}</Text>
            <View style={styles.rooms}>
              <Text>Rooms:</Text>
              {stuffWorkerData.rooms.map(room => (
                <Text key={generateId()}>{room}</Text>
              ))}
            </View>
            <View style={styles.rooms}>
              <Text>o</Text>
              <Text>o</Text>
              <Text>o</Text>
              <Text>o</Text>
              <Text>o</Text>
              <Text>o</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: 200,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
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
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    marginVertical: 5,
  },
  stuffItemName: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  controls: {
    width: "100%",
    flexDirection: "row",
    marginLeft: "65%",
    marginTop: 15,
  },
  controlsLogo: {
    width: 15,
    marginRight: 30,
  },
  rooms: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default StuffItem;
