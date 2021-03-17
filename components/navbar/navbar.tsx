import React from "react";
import {StyleSheet, Text, View} from "react-native";

import * as RootNavigation from "../../routes/root-navigation";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>

      {RootNavigation.getCurrentRoute().name === "Menu" ? (
        <View onTouchStart={() => RootNavigation.goBack()}>
          <Text style={styles.closeIcon}>&times;</Text>
        </View>
      ) : (
        <View
          style={styles.menuIconContainer}
          onTouchStart={() => {
            RootNavigation.navigate("Menu", {});
          }}>
          <View style={styles.lineLeft} />
          <View style={styles.lineRight} />
          <View style={styles.lineLeft} />
        </View>
      )}
    </View>
  );
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
    lineHeight: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  closeIcon: {
    fontSize: 50,
    color: "#fff",
  },
  lineLeft: {
    width: 25,
    height: 3,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  lineRight: {
    width: 25,
    marginLeft: 7,
    height: 3,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  menuIconContainer: {
    width: 32,
    height: 24,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Navbar;
