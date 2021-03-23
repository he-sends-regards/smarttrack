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
  switch (action.type) {
    case ActionType.DELETE_STUFF:
      return Object.assign({}, state, {
        stuff: Object.assign(
          {},
          state.stuff,
          Object.assign(
            {},
            state.stuff[action.payload.type],
            state.stuff[action.payload.type].filter(
              ({email}) => email !== action.payload.id
            )
          )
        ),
      });
    default:
      return state;
  }
};