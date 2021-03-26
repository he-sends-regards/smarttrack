import {ActionType} from "../actions";

const initialState = {
  isOpened: false,
  data: {
    status: "",
    color: "",
    id: "",
  },
};

type actionTypes = {
  type: string;
  payload: any;
};

export default (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case ActionType.TOGGLE_MODAL:
      return {
        ...state,
        data: action.payload,
        isOpened: !state.isOpened,
      };
    // case ActionType.SET_DATA_MODAL:
    //   return {
    //     ...state,
    //     data: action.payload,
    //   };
    default:
      return state;
  }
};
