import React from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";

import {dashboardItemType} from "../../mocks/dashboardData";
import {generateId} from "../../utils";
import DashboardItem from "../dashboard-item/dashboard-item";

interface IDashboardListProps {
  dashboardData: dashboardItemType[];
}

const DashboardList = ({dashboardData}: IDashboardListProps) => {
  const renderItem = ({item}: any) => {
    return <DashboardItem dashboardItem={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dashboardData}
        renderItem={renderItem}
        keyExtractor={generateId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 24,
    color: "#fff",
  },
});

export default DashboardList;
