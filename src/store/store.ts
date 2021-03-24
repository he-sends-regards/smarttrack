import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {dashboardItemType} from "./../mocks/dashboardData";
import reducer from "./reducer";

const store = createStore(reducer, composeWithDevTools());

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
  dashboardData: dashboardItemType[];
};

export default store;
