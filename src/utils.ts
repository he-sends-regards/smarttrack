import {Buffer} from "buffer";
import uuid from "react-native-uuid";
global.Buffer = Buffer;

export const generateId = () => uuid.v4();
