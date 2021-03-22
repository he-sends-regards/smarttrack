import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";

import AlertItem from "../alert-item/alert-item";

type AlertItemType = {
  status: string;
  color: string;
};

interface AlertListProps {
  alerts: AlertItemType[];
}

const AlertList = ({alerts}: AlertListProps) => {
  const renderItem = ({item, index}: any) => {
    return <AlertItem alertItem={item} index={index} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={alerts}
        renderItem={renderItem}
        keyExtractor={item => item.status}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
});

export default AlertList;
