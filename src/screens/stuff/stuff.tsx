import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../components/buttons/button";
import Navbar from "../../components/navbar/navbar";
import StuffList from "../../components/stuff-list/stuff-list";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import {Color} from "../../const";
import {RootState} from "../../store/store";
import AddStuff from "../add-stuff/add-stuff";

const listItems = {
  doctors: "doctors",
  assistants: "assistants",
  receptionists: "receptionists",
};

const Stuff = () => {
  const [activeListItem, setActiveListItem] = useState(listItems.doctors);
  const [isFormOpened, setIsFormOpened] = useState(false);

  const dispatch = useDispatch();

  const onStuffItemDelete = (id: string, type: string = activeListItem) => {
    dispatch({type: "DELETE_STUFF", payload: {type, id}});
  };

  const changeIsFormOpenedStatus = () => {
    setIsFormOpened(!isFormOpened);
  };

  const stuffData = useSelector((state: RootState) => state.stuff);

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
          <StuffList
            onStuffItemDelete={onStuffItemDelete}
            stuff={stuffData[activeListItem]}
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
