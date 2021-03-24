import React, {useState} from "react";
import {StyleSheet, Text, View, Alert, SafeAreaView} from "react-native";

import MenuItem from "../../components/menu-item/menu-item";
import Navbar from "../../components/navbar/navbar";
import {AppRoute} from "../../const";
import {generateId} from "../../utils";
import menuLogo from "./image";

const MenuItems = [
  {
    title: AppRoute.DASHBOARD,
    Logo: menuLogo.DashboardSvg,
    ActiveLogo: menuLogo.DashboardActiveSvg,
  },
  {
    title: AppRoute.STUFF,
    Logo: menuLogo.StuffSvg,
    ActiveLogo: menuLogo.StuffActiveSvg,
  },
  {
    title: AppRoute.ALERTS,
    Logo: menuLogo.AlertsSvg,
    ActiveLogo: menuLogo.AlertsActiveSvg,
  },
  {
    title: AppRoute.SEQUENCE,
    Logo: menuLogo.SequenceSvg,
    ActiveLogo: menuLogo.SequenceActiveSvg,
  },
];

const Menu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(AppRoute.DASHBOARD);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar haveCloseAbility />

      {MenuItems.map(({title, Logo, ActiveLogo}) => (
        <MenuItem
          title={title}
          Logo={Logo}
          ActiveLogo={ActiveLogo}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
          key={generateId()}
        />
      ))}

      <View
        style={styles.signOut}
        onTouchStart={() => Alert.alert("You are signed out (no)")}>
        <menuLogo.SignOutSvg />

        <Text style={styles.signOutText}>Sign Out</Text>
      </View>
    </SafeAreaView>
  );
};

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
    fontFamily: "Poppins-Regular",
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
    fontFamily: "Poppins-Regular",
  },
});

export default Menu;
