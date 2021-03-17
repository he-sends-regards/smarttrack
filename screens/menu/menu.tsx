import React, {useState} from "react";
import {StyleSheet, Text, View, Image} from "react-native";

import {AppRoute} from "../../const";

const MenuItems = [
  {
    title: AppRoute.DASHBOARD,
    logo: require("./img/dashboard.png"),
    activeLogo: require("./img/dashboard-active.png"),
  },
  {
    title: AppRoute.STUFF,
    logo: require("./img/stuff.png"),
    activeLogo: require("./img/stuff-active.png"),
  },
  {
    title: AppRoute.ALLERTS,
    logo: require("./img/allerts.png"),
    activeLogo: require("./img/allerts-active.png"),
  },
  {
    title: AppRoute.SEQUENCE,
    logo: require("./img/sequence.png"),
    activeLogo: require("./img/sequence-active.png"),
  },
];

const Menu = () => {
  // Active menu item should be received from props
  const [activeMenuItem, setActiveMenuItem] = useState(AppRoute.DASHBOARD);

  return (
    <View style={styles.container}>
      {MenuItems.map(({title, logo, activeLogo}) => (
        <View
          key={title}
          style={
            activeMenuItem === title
              ? styles.activeMenuItemContainer
              : styles.menuItemContainer
          }
          onTouchStart={() => {
            setActiveMenuItem(title);
          }}>
          <Image source={activeMenuItem === title ? activeLogo : logo} />
          <Text
            style={
              activeMenuItem === title ? styles.activeMenuItem : styles.menuItem
            }>
            {title}
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
    paddingVertical: 18,
    paddingRight: "40%",
    color: "white",
    marginLeft: 14,
  },
  activeMenuItem: {
    fontSize: 18,
    paddingVertical: 18,
    paddingRight: "40%",
    color: "white",
    marginLeft: 14,
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    paddingLeft: 25,
  },
  activeMenuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    backgroundColor: "#6AC7BE",
    borderWidth: 1,
    borderColor: "#6AC7BE",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 25,
  },
});

export default Menu;
