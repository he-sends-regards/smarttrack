import React from "react";
import {StyleSheet, View} from "react-native";

import {dashboardItemType} from "../../mocks/dashboardData";
import {generateId} from "../../utils";
import DashboardAlertItem from "../dashboard-alert-item/dashboard-alert-item";

interface IDashboardListProps {
  dashboardAlertsData: dashboardItemType[];
}

const DashboardAlertsList = ({dashboardAlertsData}: IDashboardListProps) => {
  return (
    <View style={styles.container}>
      {dashboardAlertsData.map(dashboardAlert => (
        <DashboardAlertItem
          key={generateId()}
          dashboardAlert={dashboardAlert}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default DashboardAlertsList;
