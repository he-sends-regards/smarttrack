import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

import {dashboardItemType} from "../../mocks/dashboardData";
import Button from "../buttons/button";
import DashboardAlertsList from "../dashboard-alerts-list/dashboard-alerts-list";

interface IDashboardItemProps {
  dashboardItem: dashboardItemType;
}

const DashboardItem = ({dashboardItem}: IDashboardItemProps) => {
  const [currentAlertsCount, setCurrentAlertsCount] = useState(5);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{dashboardItem.name}</Text>
          <Text style={styles.position}>{dashboardItem.position}</Text>
        </View>
        <Button
          title="Reset"
          width={60}
          color="#6AC7BE"
          border="sm"
          onPress={() => setCurrentAlertsCount(5)}
        />
      </View>
      <View style={styles.alerts}>
        <View style={styles.alertControls}>
          <View style={styles.alertControlsCount}>
            <TouchableOpacity
              onPress={() => setCurrentAlertsCount(currentAlertsCount - 1)}>
              <Text style={styles.alertControlsText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.alertControlsTextCount}>
              {currentAlertsCount}
            </Text>
            <TouchableOpacity
              onPress={() => setCurrentAlertsCount(currentAlertsCount + 1)}>
              <Text style={styles.alertControlsText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.alertControlsInLine}>in line</Text>
          </View>

          <Button
            title="Stop the line"
            width={100}
            color="#FC7E55"
            border="sm"
            onPress={() => {}}
          />
        </View>
      </View>
      <DashboardAlertsList dashboardAlertsData={dashboardItem.alerts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 18,
    color: "black",
    fontFamily: "Poppins-Regular",
    marginBottom: 10,
  },
  position: {
    fontSize: 14,
    color: "#4F4F4F",
    fontFamily: "Poppins-Regular",
    marginBottom: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#6AC7BE",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  alerts: {},
  alertControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  alertControlsCount: {
    flexDirection: "row",
    alignItems: "center",
  },
  alertControlsText: {
    fontSize: 18,
    color: "black",
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 7,
  },
  alertControlsTextCount: {
    fontSize: 18,
    color: "#FC7E55",
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 7,
  },
  alertControlsInLine: {
    marginLeft: 20,
    fontSize: 14,
    color: "#969696",
    fontFamily: "Poppins-Regular",
  },
});

export default DashboardItem;
