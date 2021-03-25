import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {dashboardItemType} from "./../mocks/dashboardData";
import {stuffWorkerType} from "./../types/index";
import reducer from "./reducers/";

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
  STUFF: {
    stuff: IStuff;
    dashboardData: dashboardItemType[];
  };
  ALERTS: {
    alerts: IAlert;
  };
};

export default store;
