import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MenuBar from "../menu-bar/menu-bar";

const Menu = () => {
  return (
    <View style={styles.container}>
      <View>
        <MenuBar />
      </View>
      <Text style={styles.text}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  },
});

export default Menu;
