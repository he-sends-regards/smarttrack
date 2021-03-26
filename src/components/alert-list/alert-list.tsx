import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";
import {useSelector} from "react-redux";

import {RootState} from "../../store/store";
import {generateId} from "../../utils";
import AlertItem from "../alert-item/alert-item";
import Text from "../custom-text/custom-text";
interface AlertListProps {
  activeListItem: string;
}

const AlertList = ({activeListItem}: AlertListProps) => {
  const alertsData = useSelector((state: RootState) => {
    return state.STUFF[activeListItem].reduce(
      (acc, stuff) =>
        stuff.alerts && stuff.alerts.length > 0
          ? [...acc, ...stuff.alerts]
          : acc,
      []
    );
  });

  const renderItem = ({item, index}: any) => {
    return <AlertItem alertItem={item} index={index} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {alertsData.length > 0 ? (
        <FlatList
          data={alertsData}
          renderItem={renderItem}
          keyExtractor={generateId}
        />
      ) : (
        <Text text="No alerts in such stuff category..." fontSize="l" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginVertical: 15,
  },
});

export default AlertList;
