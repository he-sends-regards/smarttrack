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
  const [modalVisible, setModalVisible] = useState(false);

  const modalHadler = () => {
    setModalVisible(!modalVisible);
  };

  const alertsData = useSelector((state: RootState) => state.alerts);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      {modalVisible && (
        <AlertModal visible={modalVisible} onPress={modalHadler} />
      )}
      <StuffMenu
        activeListItem={activeListItem}
        setActiveListItem={setActiveListItem}
        listItems={listItems}
      />
      <Button
        title="Add new"
        onPress={() => setModalVisible(true)}
        backgroundColor={primaryColor}
        width="100%"
        color="#fff"
      />
      <AlertList alerts={alertsData[activeListItem]} />
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
