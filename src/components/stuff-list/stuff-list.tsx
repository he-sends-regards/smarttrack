import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";

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
  const renderItem = ({item, index}: any) => {
    return <StuffItem stuffWorkerData={item} index={index} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stuff}
        renderItem={renderItem}
        keyExtractor={item => item.name}
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
