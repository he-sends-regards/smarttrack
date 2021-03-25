import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";

import Text from "../custom-text/custom-text";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  width?: string | number;
  color?: string;
  border?: string;
  onPress: () => void;
}

const Button = ({
  onPress,
  title,
  backgroundColor,
  width,
  border,
  color,
}: ButtonProps) => {
  const borderType =
    border === "sm"
      ? {
          borderWidth: 1,
          borderColor: color,
          paddingVertical: 3,
        }
      : {
          borderWidth: 2,
          borderColor: backgroundColor,
          paddingVertical: 11,
        };

  return (
    <View style={border !== "sm" && {paddingHorizontal: "5%"}}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...styles.appButtonContainer,
          backgroundColor,
          width,
          ...borderType,
        }}>
        <Text
          text={title}
          fontSize={border === "sm" ? "s" : "l"}
          color={color}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
