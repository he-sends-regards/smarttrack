import React from "react";
import { StyleSheet, Text, View } from "react-native";

type NavbarProps = {
  setIsMenuOpened: Function;
  isMenuOpened: boolean;
};

const Navbar = ({ setIsMenuOpened, isMenuOpened }: NavbarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>

      {isMenuOpened ? (
        <View onTouchStart={() => setIsMenuOpened(!isMenuOpened)}>
          <Text style={styles.closeIcon}>&times;</Text>
        </View>
      ) : (
        <View
          style={styles.menuIconContainer}
          onTouchStart={() => setIsMenuOpened(!isMenuOpened)}
        >
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
