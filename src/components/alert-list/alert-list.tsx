import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";
import {useSelector} from "react-redux";

import {RootState} from "../../store/store";
import {generateId} from "../../utils";
import AlertItem from "../alert-item/alert-item";

type AlertItemType = {
  status: string;
  color: string;
};

interface AlertListProps {
  activeListItem: string;
  modalHandler: () => void;
}

const AlertList = ({modalHandler, activeListItem}: AlertListProps) => {
  const alertsData = useSelector((state: RootState) => state.alerts);

  const renderItem = ({item, index}: any) => {
    return (
      <AlertItem modalHandler={modalHandler} alertItem={item} index={index} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={alertsData[activeListItem]}
        renderItem={renderItem}
        keyExtractor={generateId}
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
    marginVertical: 15,
  },
});

export default AlertList;
