import React, {useState} from "react";
import {SafeAreaView, StyleSheet, StatusBar, View} from "react-native";

import Button from "../../components/buttons/button";
import Navbar from "../../components/navbar/navbar";
import StuffList from "../../components/stuff-list/stuff-list";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import {Color} from "../../const";
import {mockStuff} from "../../mocks/stuff";
import AddStuff from "../add-stuff/add-stuff";

const listItems = {
  doctors: "doctors",
  assistants: "assistants",
  receptionists: "receptionists",
};

const Stuff = () => {
  const [activeListItem, setActiveListItem] = useState(listItems.doctors);
  const [isFormOpened, setIsFormOpened] = useState(false);

  const changeIsFormOpenedStatus = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isFormOpened ? (
        <View>
          <Navbar haveCloseAbility onPress={changeIsFormOpenedStatus} />
          <AddStuff stuffType={activeListItem} />
        </View>
      ) : (
        <View>
          <Navbar />

          <StuffMenu
            activeListItem={activeListItem}
            setActiveListItem={setActiveListItem}
            listItems={Object.values(listItems)}
          />
          <Button
            onPress={changeIsFormOpenedStatus}
            width="100%"
            backgroundColor={Color.primaryColor}
            color="white"
            title="Add new"
          />
          <StuffList stuff={mockStuff[activeListItem]} />
        </View>
      )}
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
