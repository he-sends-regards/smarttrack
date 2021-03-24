import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";

import Button from "../../components/buttons/button";
import Navbar from "../../components/navbar/navbar";
import StuffList from "../../components/stuff-list/stuff-list";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import {Color, formType} from "../../const";
import AddStuff from "../add-stuff/add-stuff";

const listItems = {
  doctors: "doctors",
  assistants: "assistants",
  receptionists: "receptionists",
};

const Stuff = () => {
  const [activeListItem, setActiveListItem] = useState(listItems.doctors);
  const [formStatus, setFormStatus] = useState({
    isOpened: false,
    initiator: "",
    options: {},
  });

  return (
    <SafeAreaView style={styles.container}>
      {formStatus.isOpened ? (
        <View>
          <Navbar
            haveCloseAbility
            onPress={() =>
              setFormStatus({isOpened: false, initiator: "", options: {}})
            }
          />
          <AddStuff
            stuffType={activeListItem}
            formStatus={formStatus}
            setFormStatus={setFormStatus}
          />
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
            onPress={() =>
              setFormStatus({
                isOpened: true,
                initiator: formType.ADD,
                options: {},
              })
            }
            width="100%"
            backgroundColor={Color.primaryColor}
            color="white"
            title="Add new"
          />
          <StuffList
            activeListItem={activeListItem}
            setFormStatus={setFormStatus}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});

export default Stuff;
