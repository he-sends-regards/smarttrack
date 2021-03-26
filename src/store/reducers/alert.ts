import {mockAlerts} from "../../mocks/alerts";
import {generateId} from "../../utils";
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
            {...action.payload.data, id: generateId()},
          ],
        },
      };
    case ActionType.UPDATE_ALERT:
      return {
        ...state,
        alerts: {
          ...state.alerts,
          [action.payload.type]: state.alerts[action.payload.type].map(item => {
            return item.id === action.payload.data.id
              ? action.payload.data
              : item;
          }),
        },
      };

    default:
      return state;
  }
};
