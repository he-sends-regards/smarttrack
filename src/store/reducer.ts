import {mockAlerts} from "../mocks/alerts";
import {mockStuff} from "../mocks/stuff";
import {mockDashboardData} from "./../mocks/dashboardData";
import {ActionType} from "./actions";

const initialState = {
  stuff: mockStuff,
  alerts: mockAlerts,
  dashboardData: mockDashboardData,
};

type actionTypes = {
  type: string;
  payload: any;
};

export default (state = initialState, action: actionTypes) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ActionType.ADD_STUFF:
      newState.stuff[action.payload.type] = [
        ...newState.stuff[action.payload.type],
        action.payload.data,
      ];

      return newState;

    case ActionType.DELETE_STUFF:
      return {
        ...state,
        stuff: {
          ...state.stuff,
          [action.payload.type]: state.stuff[action.payload.type].filter(
            stuff => stuff.email !== action.payload.id
          ),
        },
      };

    default:
      return state;
  }
};
