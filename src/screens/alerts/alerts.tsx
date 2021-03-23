import React, {useState} from "react";
import {SafeAreaView} from "react-native";
import {useSelector} from "react-redux";

import AlertList from "../../components/alert-list/alert-list";
import Button from "../../components/buttons/button";
import Navbar from "../../components/navbar/navbar";
import {Color} from "../../const";
import {RootState} from "../../store/store";

const noop = () => {};

const Alerts = () => {
  const [activeListItem, setActiveListItem] = useState("doctors");
  const alertsData = useSelector((state: RootState) => state.alerts);

  return (
    <SafeAreaView>
      <Navbar />
      <Button
        title="Add new"
        onPress={noop}
        backgroundColor={Color.primaryColor}
        width="100%"
        color="#fff"
      />
      <AlertList alerts={alertsData[activeListItem]} />
    </SafeAreaView>
  );
};

export default Alerts;
