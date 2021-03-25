import React from "react";
import {Text} from "react-native";

const fontWeightType = {
  BOLD: "bold",
  REGULAR: "regular",
};

const fontSizeType = {
  s: 12,
  m: 14,
  l: 16,
  xl: 18,
};

interface IText {
  text: string;
  fontWeight?: "bold" | "regular";
  color?: string;
  fontSize?: "l" | "s" | "m" | "xl";
  additionalStyle?: object;
}

const CustomText = ({
  text,
  fontWeight = "regular",
  color = "black",
  fontSize = "m",
  additionalStyle = {},
}: IText) => {
  return (
    <Text
      style={{
        fontFamily:
          fontWeightType.BOLD === fontWeight
            ? "Poppins-Bold"
            : "Poppins-Regular",
        color,
        fontSize: fontSizeType[fontSize],
        ...additionalStyle,
      }}>
      {text}
    </Text>
  );
};

export default CustomText;
