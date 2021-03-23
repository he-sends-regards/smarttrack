import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import {useSelector} from "react-redux";

import DashboardList from "../../components/dashboard-list/dashboard-list";
import Navbar from "../../components/navbar/navbar";
import {RootState} from "../../store/store";
const Dashboard = () => {
  const dashboardData = useSelector((state: RootState) => state.dashboardData);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />

      <DashboardList dashboardData={dashboardData} />
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

export default Dashboard;
