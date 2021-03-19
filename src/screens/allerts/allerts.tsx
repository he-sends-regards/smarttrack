import React from "react";
import {SafeAreaView} from "react-native";

import Button from "../../components/buttons/button";
import Navbar from "../../components/navbar/navbar";
import {primaryColor, dangerColor} from "../../const";

const noop = () => {};

const Allerts = () => {
  return (
    <SafeAreaView>
      <Navbar />
      <Button
        title="Add new"
        onPress={noop}
        backgroundColor={primaryColor}
        width="100%"
        color="#fff"
      />
      <Button
        title="Add new"
        onPress={noop}
        backgroundColor="transparent"
        width="100%"
        color={primaryColor}
      />
      <Button
        title="Add new"
        onPress={noop}
        backgroundColor="transparent"
        width="25%"
        color={dangerColor}
      />
    </SafeAreaView>
  );
};

export default Allerts;
