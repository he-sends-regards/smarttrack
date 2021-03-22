import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {v4 as uuidv4} from "uuid";

type StuffItemType = {
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
};

interface StuffProps {
  stuffWorkerData: StuffItemType;
  index: number;
}

const StuffItem = ({stuffWorkerData, index}: StuffProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.coloredBlock}>
          <Text>{index + 1}</Text>
        </View>

        <View>
          <View>
            <Image
              style={styles.controlsLogo}
              source={require("./img/edit.png")}
            />
            <Image
              style={styles.controlsLogo}
              source={require("./img/delete.png")}
            />
          </View>

          <View>
            <Text style={styles.stuffItemName}>{stuffWorkerData.name}</Text>
            <Text style={styles.stuffItem}>{stuffWorkerData.email}</Text>
            <Text style={styles.stuffItem}>{stuffWorkerData.phoneNumber}</Text>
            <View style={styles.rooms}>
              <Text>Rooms:</Text>
              {stuffWorkerData.rooms.map(room => (
                <Text key={uuidv4()}>{room}</Text>
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
    width: "100%",
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
  stuffItem: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    marginVertical: 5,
  },
  stuffItemName: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  controlsLogo: {
    width: 15,
  },
  rooms: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default StuffItem;
