import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppRoute } from "../../const";

const Menu = () => {
  // Active menu item should be received from props
  const [activeMenuItem, setActiveMenuItem] = useState(AppRoute.DASHBOARD);

  return (
    <View style={styles.container}>
      {Object.values(AppRoute).map((route) => (
        <View
          key={route}
          style={
            activeMenuItem === route
              ? styles.activeMenuItemContainer
              : styles.menuItemContainer
          }
          onTouchStart={() => {
            setActiveMenuItem(route);
          }}
        >
          <Text
            style={
              activeMenuItem === route ? styles.activeMenuItem : styles.menuItem
            }
          >
            {route}
          </Text>
        </View>
      ))}
    </View>
  );
};

// Styles should be refactored
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingTop: 32,
    backgroundColor: "#212155",
  },
  menuItem: {
    fontSize: 18,
    color: "white",
    paddingVertical: 18,
    paddingLeft: 62,
    paddingRight: "40%",
  },
  activeMenuItem: {
    fontSize: 18,
    paddingVertical: 18,
    paddingLeft: 62,
    paddingRight: "40%",
    color: "white",
    backgroundColor: "#6AC7BE",
  },
  menuItemContainer: {
    width: "80%",
  },
  activeMenuItemContainer: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#6AC7BE",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

export default Menu;
