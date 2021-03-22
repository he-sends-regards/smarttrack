import {createStore} from "redux";

import reducer from "./reducer";

const store = createStore(reducer);

type StuffItemType = {
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
};

interface IStuff {
  [key: string]: StuffItemType[];
}

export type RootState = {
  stuff: IStuff;
};

export default store;
