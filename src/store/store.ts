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

type modalType = {
  isOpened: boolean;
  actionType: string;
  
}

interface IStuff {
  [key: string]: stuffWorkerType[];
}

interface IAlert {
  [key: string]: AlertItemType[];
}

interface IModal {
  [key: string]: modalType[];
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
};

export default store;
