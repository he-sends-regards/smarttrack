import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const MenuBar = () => {
  const [menuBarClicked, setMenuBarClicked] = useState(false);

  return menuBarClicked ? (
    <View onTouchStart={() => setMenuBarClicked(!menuBarClicked)}>
      <Text style={styles.plusIcon}>&times;</Text>
    </View>
  ) : (
    <View
      style={styles.container}
      onTouchStart={() => setMenuBarClicked(!menuBarClicked)}
    >
      <View style={styles.lineLeft} />
      <View style={styles.lineRight} />
      <View style={styles.lineLeft} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 24,
    flexDirection: "column",
    justifyContent: "space-between",
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
  plusIcon: {
    fontSize: 50,
    color: "#fff",
  },
});

export default MenuBar;
