import React, {useState} from "react";
import {SafeAreaView, StyleSheet, StatusBar} from "react-native";

import Button from "../../components/buttons/button";
import Navbar from "../../components/navbar/navbar";
import StuffList from "../../components/stuff-list/stuff-list";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import {Color} from "../../const";
import {mockStuff} from "../../mocks/stuff";

const listItems = {
  doctors: "doctors",
  assistans: "assistans",
  receptionist: "receptionist",
};

const Stuff = () => {
  const [activeListItem, setActiveListItem] = useState(listItems.doctors);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />

      <StuffMenu
        activeListItem={activeListItem}
        setActiveListItem={setActiveListItem}
        listItems={Object.values(listItems)}
      />

      <Button
        onPress={() => {}}
        width="100%"
        backgroundColor={Color.primaryColor}
        color="white"
        title="Add new"
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
