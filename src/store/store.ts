import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {dashboardItemType} from "./../mocks/dashboardData";
import {stuffWorkerType} from "./../types/index";
import reducer from "./reducers/";

const store = createStore(reducer, composeWithDevTools());

type AlertItemType = {
  status: string;
  color: string;
  id?: string;
};

interface IStuff {
  [key: string]: stuffWorkerType[];
}

interface IAlert {
  [key: string]: string;
}

export type RootState = {
  STUFF: {
    stuff: IStuff;
    dashboardData: dashboardItemType[];
  };
  ALERTS: {
    alerts: IAlert;
  };
  FORMS: {
    isStuffFormOpened: boolean;
    defaultData: IStuff;
  };
  MODAL: {
    isOpened: boolean;
    data: AlertItemType;
  };
};

export default store;
