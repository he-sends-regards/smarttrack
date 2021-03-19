import React from "react";
import {StyleSheet, View} from "react-native";

import StuffItem from "../stuff-item/stuff-item";

type StuffItemType = {
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
};

interface StuffListProps {
  stuff: StuffItemType[];
}

const StuffList = ({stuff}: StuffListProps) => {
  console.log(stuff);

  return (
    <View style={styles.container}>
      {stuff.map((stuffWorker: StuffItemType) => (
        <StuffItem key={stuffWorker.name} stuffWorkerData={stuffWorker} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingLeft: "7%",
    paddingRight: "3%",
    marginBottom: 24,
  },
});

export default StuffList;
