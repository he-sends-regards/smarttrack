import React from "react";
import {StyleSheet, View} from "react-native";

import {alertType} from "../../mocks/dashboardData";
import Text from "../custom-text/custom-text";

interface IDashboardItemProps {
  dashboardAlert: alertType;
}

const DashboardAlertItem = ({dashboardAlert}: IDashboardItemProps) => {
  return (
    <View style={styles.container}>
      <View />
      <View style={styles.logoContainer}>
        <Text text={dashboardAlert.logo} additionalStyle={{fontSize: 30}} />
      </View>
      <View style={styles.titleContainer}>
        <Text text={dashboardAlert.title} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 22,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardAlertItem;
