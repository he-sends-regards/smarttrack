import React from "react";
import {StyleSheet, View} from "react-native";
import {TouchableHighlight} from "react-native-gesture-handler";

import * as RootNavigation from "../../../routes/root-navigation";
import {generateId} from "../../utils";
import Text from "../custom-text/custom-text";

type MenuItemProps = {
  title: string;
  Logo: React.FC;
  ActiveLogo: React.FC;
  activeMenuItem: string;
  setActiveMenuItem: Function;
};

const MenuItem = ({
  title,
  Logo,
  ActiveLogo,
  activeMenuItem,
  setActiveMenuItem,
}: MenuItemProps) => {
  return (
    <TouchableHighlight
      key={generateId()}
      underlayColor="transparent"
      onPress={() => {
        setActiveMenuItem(title);
        RootNavigation.navigate(title, {});
      }}
      style={{
        width: "100%",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}>
      <View
        style={
          activeMenuItem === title
            ? styles.activeMenuItemContainer
            : styles.menuItemContainer
        }>
        {activeMenuItem === title ? <ActiveLogo /> : <Logo />}
        <Text
          text={title}
          fontSize="xl"
          color="white"
          additionalStyle={styles.menuItem}
        />
      </View>
    </TouchableHighlight>
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
    paddingVertical: 18,
    paddingRight: "40%",
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
});

export default MenuItem;
