import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  width?: string;
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
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={{...styles.appButtonContainer, backgroundColor, width}}>
        <Text style={{...styles.appButtonText, color}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  appButtonContainer: {
    borderRadius: 20,
    paddingVertical: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  appButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Button;
