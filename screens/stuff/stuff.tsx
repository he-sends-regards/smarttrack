import React, {useState} from "react";
import {SafeAreaView} from "react-native";

import Navbar from "../../components/navbar/navbar";
import StuffList from "../../components/stuff-list/stuff-list";

const listItems = ["Doctors", "Assistans", "Receptionist"];

const Stuff = () => {
  const [activeListItem, setActiveListItem] = useState("Doctors");

  return (
    <SafeAreaView>
      <Navbar />
      <StuffList
        activeListItem={activeListItem}
        setActiveListItem={setActiveListItem}
        listItems={listItems}
      />
    </SafeAreaView>
  );
};

export default Stuff;
