import React, {useState} from "react";
import {SafeAreaView, StyleSheet, StatusBar} from "react-native";

import Navbar from "../../components/navbar/navbar";
import StuffList from "../../components/stuff-list/stuff-list";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import {mockStuff} from "../../mocks/stuff";

const listItems = ["doctors", "assistans", "receptionist"];

const Stuff = () => {
  const [activeListItem, setActiveListItem] = useState("doctors");

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <StuffMenu
        activeListItem={activeListItem}
        setActiveListItem={setActiveListItem}
        listItems={listItems}
      />
      <StuffList stuff={mockStuff[activeListItem]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#E5E5E5",
  },
});

export default Stuff;
