import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

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
          style={{
            ...styles.appButtonText,
            color,
            fontSize: border === "sm" ? 12 : 16,
          }}>
          {title}
        </Text>
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
  appButtonText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    lineHeight: 18,
  },
});

export default Button;
