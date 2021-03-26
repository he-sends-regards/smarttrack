import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";
import {useSelector} from "react-redux";

import {RootState} from "../../store/store";
import {generateId} from "../../utils";
import AlertItem from "../alert-item/alert-item";

// type AlertItemType = {
//   status: string;
//   color: string;
// };
interface AlertListProps {
  activeListItem: string;
}

const AlertList = ({activeListItem}: AlertListProps) => {
  const alertsData = useSelector((state: RootState) => state.ALERTS.alerts);

  // console.log('alertsData', alertsData[activeListItem])
  // console.log('activeListItem', activeListItem)
  // console.log('alertsData[activeListItem]', alertsData[activeListItem])

  const renderItem = ({item, index}: any) => {
    return <AlertItem alertItem={item} index={index} />;
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
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginVertical: 15,
  },
});

export default AlertList;
