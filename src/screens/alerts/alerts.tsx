import React, {useState} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import AlertList from "../../components/alert-list/alert-list";
import Button from "../../components/buttons/button";
import AlertModal from "../../components/modal/alert-modal";
import Navbar from "../../components/navbar/navbar";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import {primaryColor} from "../../const";
import {ActionType} from "../../store/actions";
import {RootState} from "../../store/store";

const listItems = ["doctors", "assistants", "receptionists"];

const Alerts = () => {
  const [activeListItem, setActiveListItem] = useState("doctors");
  const isModalOpened = useSelector((state: RootState) => state.MODAL.isOpened);

  const dispatch = useDispatch();
  // const alertsData = useSelector((state: RootState) => state.alerts);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      {isModalOpened && (
        <AlertModal visible={isModalOpened} activeListItem={activeListItem} />
      )}
      <StuffMenu
        activeListItem={activeListItem}
        setActiveListItem={setActiveListItem}
        listItems={listItems}
      />
      <Button
        title="Add new"
        onPress={() => dispatch({type: ActionType.TOGGLE_MODAL})}
        backgroundColor={primaryColor}
        width="100%"
        color="#fff"
      />
      <AlertList activeListItem={activeListItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});

export default Alerts;
