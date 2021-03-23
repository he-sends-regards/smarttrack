import {createStore} from "redux";

import reducer from "./reducer";

const store = createStore(reducer);

type StuffItemType = {
  name: string;
  email: string;
  phoneNumber: string;
  rooms: string[];
};
type AlertItemType = {
  status: string;
  color: string;
};

interface IStuff {
  [key: string]: StuffItemType[];
}

interface IAlert {
  [key: string]: AlertItemType[];
}

export type RootState = {
  stuff: IStuff;
  alerts: IAlert;
};

export default store;
