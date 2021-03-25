import React, {useState} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import {useSelector} from "react-redux";

import AlertList from "../../components/alert-list/alert-list";
import Button from "../../components/buttons/button";
import AlertModal from "../../components/modal/alert-modal";
import Navbar from "../../components/navbar/navbar";
import StuffMenu from "../../components/stuff-menu/stuff-menu";
import {primaryColor} from "../../const";
import {RootState} from "../../store/store";

const listItems = ["doctors", "assistans", "receptionist"];

const Alerts = () => {
  const [activeListItem, setActiveListItem] = useState("doctors");
  // const [modalStatus, setModalStatus] = useState({
  //   isOpened: false,
  //   actionType: "",
  //   options: {},
  // });

  // const modal = useSelector((state: RootState) => state.modal);

  // const alertsData = useSelector((state: RootState) => state.alerts);

  const [modalVisible, setModalVisible] = useState(false);

  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      {modalVisible && (
        <AlertModal
          visible={modalVisible}
          onPress={modalHandler}
          activeListItem={activeListItem}

             // onPress={
          //   // () => dispatch()
          //   setModalStatus(prev => {
          //     return {
          //       ...prev,
          //       isOpened: true,
          //     };
          //   })
          // }

        />
      )}
      <StuffMenu
        activeListItem={activeListItem}
        setActiveListItem={setActiveListItem}
        listItems={listItems}
      />
      <Button
        title="Add new"
        onPress={() => modalHandler()}
        // onPress={() =>
        //   setModalStatus({isOpened: true, actionType: "create", options: {}})
        // }
        backgroundColor={primaryColor}
        width="100%"
        color="#fff"
      />
       <AlertList modalHandler={modalHandler} activeListItem={activeListItem} />
      {/* <AlertList
        setModalStatus={setModalStatus}
        activeListItem={activeListItem}
      /> */}
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
