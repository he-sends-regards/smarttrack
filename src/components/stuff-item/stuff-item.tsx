import React from "react";
import {StyleSheet, Text, View} from "react-native";

type StuffItemType = {
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
};

interface StuffProps {
  stuffWorkerData: StuffItemType;
}

const StuffItem = ({stuffWorkerData}: StuffProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.coloredBlock}>
        <Text>1</Text>
      </View>
      <View>
        <Text>controls</Text>
      </View>
      <View>
        <Text>{stuffWorkerData.name}</Text>
        <Text>{stuffWorkerData.email}</Text>
        <Text>{stuffWorkerData.phoneNumber}</Text>
        {stuffWorkerData.rooms.map(room => (
          <Text key={room}>{room}</Text>
        ))}
        <View>
          <Text>colors</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  coloredBlock: {
    backgroundColor: "#6AC7BE",
  },
});

export default StuffItem;
