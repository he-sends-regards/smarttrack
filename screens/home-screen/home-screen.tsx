import React from "react";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
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

export default HomeScreen;
