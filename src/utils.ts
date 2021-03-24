import {Buffer} from "buffer";
import uuid from "react-native-uuid";
global.Buffer = Buffer;

export const generateId = () => uuid.v4();

export const createColor = (color: string, amount: number): string => {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, color =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
};
