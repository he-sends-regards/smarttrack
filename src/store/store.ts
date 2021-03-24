import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {dashboardItemType} from "./../mocks/dashboardData";
import {stuffWorkerType} from "./../types/index";
import reducer from "./reducer";

const store = createStore(reducer, composeWithDevTools());

type AlertItemType = {
  status: string;
  color: string;
};

interface IStuff {
  [key: string]: stuffWorkerType[];
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
