import React, {useState} from "react";
import {SafeAreaView} from "react-native";

import Navbar from "../../components/navbar/navbar";
import StuffList from "../../components/stuff-list/stuff-list";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import mockStuff from "../../mocks/stuff";

const listItems = ["Doctors", "Assistans", "Receptionist"];

const Stuff = () => {
  const [activeListItem, setActiveListItem] = useState("Doctors");

  return (
    <SafeAreaView>
      <Navbar />
      <StuffMenu
        activeListItem={activeListItem}
        setActiveListItem={setActiveListItem}
        listItems={listItems}
      />
      <StuffList stuff={mockStuff} />
    </SafeAreaView>
  );
};

export default Stuff;
