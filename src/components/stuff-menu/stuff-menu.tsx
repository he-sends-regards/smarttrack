import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {TouchableHighlight} from "react-native-gesture-handler";

type StuffMenuProps = {
  activeListItem: string;
  setActiveListItem: Function;
  listItems: string[];
};

const StuffMenu = ({
  activeListItem,
  setActiveListItem,
  listItems,
}: StuffMenuProps) => {
  return (
    <View style={styles.container}>
      {listItems.map(listItem => (
        <TouchableHighlight
          key={listItem}
          onPress={() => setActiveListItem(listItem)}
          underlayColor="transparent">
          <View style={styles.listItemContainer}>
            <Text
              style={
                activeListItem === listItem
                  ? styles.activeItemList
                  : styles.listItem
              }>
              {listItem}
            </Text>
            <View
              style={activeListItem === listItem && styles.activeItemBorder}
            />
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingLeft: "7%",
    paddingRight: "3%",
    marginBottom: 24,
  },
  listItem: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  activeItemList: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#5CBD9F",
    paddingBottom: 10,
  },
  listItemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#5CBD9F",
    width: 22,
  },
});

export default StuffMenu;
