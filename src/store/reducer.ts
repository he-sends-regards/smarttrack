import {mockAlerts} from "../mocks/alerts";
import {mockStuff} from "../mocks/stuff";
import {mockDashboardData} from "./../mocks/dashboardData";
import {generateId} from "./../utils";
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
        {...action.payload.data, id: generateId()},
      ];

      return newState;

    case ActionType.UPDATE_STUFF:
      return {
        ...state,
        stuff: {
          ...state.stuff,
          [action.payload.type]: state.stuff[action.payload.type].map(stuff => {
            console.log(stuff.id, action.payload.data);

            return stuff.id === action.payload.data.id
              ? action.payload.data
              : stuff;
          }),
        },
      };

    case ActionType.DELETE_STUFF:
      return {
        ...state,
        stuff: {
          ...state.stuff,
          [action.payload.type]: state.stuff[action.payload.type].filter(
            stuff => stuff.id !== action.payload.id
          ),
        },
      };
    case ActionType.ADD_ALERT:
      return {
        ...state,
        alerts: {
          ...state.alerts,
          [action.payload.type]: [
            ...state.alerts[action.payload.type],
            action.payload.data,
          ],
        },
      };

    default:
      return state;
  }
};
