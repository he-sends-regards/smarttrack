import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import {generateId} from "../../utils";

type StuffItemType = {
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
};

interface StuffProps {
  stuffWorkerData: StuffItemType;
  index: number;
  onStuffItemDelete: Function;
}

const StuffItem = ({stuffWorkerData, index, onStuffItemDelete}: StuffProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.coloredBlock}>
          <Text>{index + 1}</Text>
        </View>

        <View>
          <View style={styles.controls}>
            <TouchableOpacity onPress={() => Alert.alert("Edit")}>
              <Image
                style={styles.controlsLogo}
                source={require("./img/edit.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onStuffItemDelete(stuffWorkerData.email)}>
              <Image
                style={styles.controlsLogo}
                source={require("./img/delete.png")}
              />
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
