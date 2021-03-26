import {mockAlerts} from "../../mocks/alerts";
import {mockDashboardData} from "../../mocks/dashboardData";
import stuffData, {mockStuff} from "../../mocks/stuff";
import {generateId} from "../../utils";
import {ActionType} from "../actions";
const {doctors, assistants, receptionists} = stuffData;
const initialState = {
  stuff: mockStuff,
  doctors,
  assistants,
  receptionists,
  dashboardData: mockDashboardData,
};

type actionTypes = {
  type: string;
  payload: any;
};

export default (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case ActionType.ADD_STUFF:
      return {
        ...state,
        [action.payload.type]: [
          ...state[action.payload.type],
          {...action.payload.data, id: generateId()},
        ],
      };

    case ActionType.UPDATE_STUFF:
      return {
        ...state,
        [action.payload.type]: state[action.payload.type].map(stuff => {
          console.log(stuff.id, action.payload.data);

          return stuff.id === action.payload.data.id
            ? action.payload.data
            : stuff;
        }),
      };

    case ActionType.DELETE_STUFF:
      return {
        ...state,
        [action.payload.type]: state[action.payload.type].filter(
          stuff => stuff.id !== action.payload.id
        ),
      };

    // case ActionType.ADD_ALERT:
    //   return {
    //     ...state,
    //     [action.payload.type]: 
    //     alerts: {
    //       ...state.alerts,
    //       [action.payload.type]: [
    //         ...state.alerts[action.payload.type],
    //         {...action.payload.data, id: generateId()},
    //       ],
    //     },
    //   };
    case ActionType.UPDATE_ALERT:
      return {
        ...state,
        [action.payload.ownerId]: state.alerts[action.payload.type].map(item => {
          return item.id === action.payload.data.id
            ? action.payload.data
            : item;
        }),
      };
    default:
      return state;
  }
};
