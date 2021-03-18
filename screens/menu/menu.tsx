import React, {useState} from "react";
import {StyleSheet, Text, View, Image, Alert} from "react-native";
import {TouchableHighlight} from "react-native-gesture-handler";

import Navbar from "../../components/navbar/navbar";
import {AppRoute} from "../../const";
import * as RootNavigation from "../../routes/root-navigation";

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
      <Navbar />
      {MenuItems.map(({title, logo, activeLogo}) => (
        <View key={title}>
          <TouchableHighlight
            onPress={() => {
              setActiveMenuItem(title);
              RootNavigation.navigate(title, {});
            }}>
            <View
              style={
                activeMenuItem === title
                  ? styles.activeMenuItemContainer
                  : styles.menuItemContainer
              }>
              <Image source={activeMenuItem === title ? activeLogo : logo} />
              <Text style={styles.menuItem}>{title}</Text>
            </View>
          </TouchableHighlight>
        </View>
      ))}

      <View
        style={styles.signOut}
        onTouchStart={() => Alert.alert("You are signed out (no)")}>
        <Image source={require("./img/sign-out.png")} />
        <Text style={styles.signOutText}>Sign Out</Text>
      </View>
    </View>
  );
};

// Styles should be refactored
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundColor: "#212155",
  },
  menuItem: {
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
  signOut: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    paddingLeft: 25,
    marginTop: "20%",
  },
  signOutText: {
    fontSize: 18,
    paddingVertical: 18,
    paddingRight: "40%",
    marginLeft: 14,
    color: "#8484D8",
  },
});

export default Menu;
