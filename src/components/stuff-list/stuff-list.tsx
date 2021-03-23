import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";

import {generateId} from "../../utils";
import StuffItem from "../stuff-item/stuff-item";

type StuffItemType = {
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
};

interface StuffListProps {
  stuff: StuffItemType[];
  onStuffItemDelete: Function;
}

const StuffList = ({stuff, onStuffItemDelete}: StuffListProps) => {
  const renderItem = ({item, index}: any) => {
    return (
      <StuffItem
        stuffWorkerData={item}
        index={index}
        onStuffItemDelete={onStuffItemDelete}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stuff}
        renderItem={renderItem}
        keyExtractor={generateId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%", // Solve without hardcode
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginTop: 15,
  },
});

export default StuffList;