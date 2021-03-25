import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../components/buttons/button";
import Navbar from "../../components/navbar/navbar";
import StuffList from "../../components/stuff-list/stuff-list";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import {Color} from "../../const";
import {ActionType} from "../../store/actions";
import {RootState} from "../../store/store";
import AddStuff from "../add-stuff/add-stuff";

const listItems = {
  doctors: "doctors",
  assistants: "assistants",
  receptionists: "receptionists",
};

const Stuff = () => {
  const [activeListItem, setActiveListItem] = useState(listItems.doctors);
  const isFormOpened = useSelector(
    (state: RootState) => state.FORMS.isStuffFormOpened
  );
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      {isFormOpened ? (
        <View>
          <Navbar
            haveCloseAbility
            onPress={() => {
              dispatch({type: ActionType.SWITCH_STUFF_FORM_STATUS});
              dispatch({
                type: ActionType.SET_STUFF_FORM_DEFAULT_VALUE,
                payload: {},
              });
            }}
          />
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
            onPress={() =>
              dispatch({type: ActionType.SWITCH_STUFF_FORM_STATUS})
            }
            width="100%"
            backgroundColor={Color.primaryColor}
            color="white"
            title="Add new"
          />
          <StuffList activeListItem={activeListItem} />
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
