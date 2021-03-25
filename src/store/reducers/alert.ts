import {mockAlerts} from "../../mocks/alerts";
import {ActionType} from "../actions";

const initialState = {
  alerts: mockAlerts,
};

type actionTypes = {
  type: string;
  payload: any;
};

export default (state = initialState, action: actionTypes) => {
  switch (action.type) {
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
