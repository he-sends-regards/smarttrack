import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";

import Navbar from "../../components/navbar/navbar";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212155",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 24,
    color: "#fff",
  },
});

export default Dashboard;
