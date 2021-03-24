import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {TouchableHighlight} from "react-native-gesture-handler";

import * as RootNavigation from "../../../routes/root-navigation";
import CloseIcon from "./img/close-icon.svg";

type NavbarProps = {
  haveCloseAbility?: boolean;
  onPress?: Function;
};

const Navbar = ({
  haveCloseAbility = false,
  onPress = () => RootNavigation.goBack(),
}: NavbarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>

      {haveCloseAbility ? (
        <TouchableHighlight
          onPress={() => onPress()}
          underlayColor="transparent">
          <CloseIcon />
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          onPress={() => {
            RootNavigation.navigate("Menu", {});
          }}
          underlayColor="transparent">
          <View style={styles.menuIconContainer}>
            <View style={styles.lineLeft} />
            <View style={styles.lineRight} />
            <View style={styles.lineLeft} />
          </View>
        </TouchableHighlight>
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
    fontFamily: "Poppins-Bold",
    color: "#fff",
  },
  closeIcon: {
    width: 24,
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
