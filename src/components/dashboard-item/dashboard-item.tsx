import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

import {dashboardItemType} from "../../mocks/dashboardData";
import Button from "../buttons/button";
import Text from "../custom-text/custom-text";
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
          <Text
            text={dashboardItem.name}
            fontSize="l"
            additionalStyle={styles.name}
          />
          <Text
            text={dashboardItem.position}
            additionalStyle={styles.position}
          />
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
              <Text
                fontSize="l"
                additionalStyle={styles.alertControlsText}
                text="-"
              />
            </TouchableOpacity>
            <Text
              fontSize="l"
              additionalStyle={styles.alertControlsTextCount}
              color="#FC7E55"
              text={`${currentAlertsCount}`}
            />
            <TouchableOpacity
              onPress={() => setCurrentAlertsCount(currentAlertsCount + 1)}>
              <Text
                fontSize="l"
                additionalStyle={styles.alertControlsText}
                text="+"
              />
            </TouchableOpacity>
            <Text
              text="in line"
              fontSize="m"
              color="#969696"
              additionalStyle={styles.alertControlsInLine}
            />
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
    marginBottom: 10,
  },
  position: {
    color: "#4F4F4F",
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
    paddingHorizontal: 7,
  },
  alertControlsTextCount: {
    paddingHorizontal: 7,
  },
  alertControlsInLine: {
    marginLeft: 20,
  },
});

export default DashboardItem;
