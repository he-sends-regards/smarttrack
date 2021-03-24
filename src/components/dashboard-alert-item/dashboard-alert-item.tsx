import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {alertType} from "../../mocks/dashboardData";

interface IDashboardItemProps {
  dashboardAlert: alertType;
}

const DashboardAlertItem = ({dashboardAlert}: IDashboardItemProps) => {
  return (
    <View style={styles.container}>
      <View />
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>{dashboardAlert.logo}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text>{dashboardAlert.title}</Text>
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
  logo: {
    fontSize: 30,
    fontFamily: "Poppins-Regular",
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardAlertItem;
