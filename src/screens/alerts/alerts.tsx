import React from "react";
import {SafeAreaView} from "react-native";

import Button from "../../components/buttons/button";
import Navbar from "../../components/navbar/navbar";
import {Color} from "../../const";

const noop = () => {};

const Alerts = () => {
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
      <Button
        title="Add new"
        onPress={noop}
        backgroundColor="transparent"
        width="100%"
        color={Color.primaryColor}
      />
      <Button
        title="Add new"
        onPress={noop}
        backgroundColor="transparent"
        width="25%"
        color={Color.dangerColor}
      />
    </SafeAreaView>
  );
};

export default Alerts;
