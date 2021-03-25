import {ActionType} from "../actions";

const initialState = {
  isStuffFormOpened: false,
  defaultData: {},
};

type actionTypes = {
  type: string;
  payload: any;
};

export default (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case ActionType.SWITCH_STUFF_FORM_STATUS:
      console.log(state.defaultData);

      return Object.keys(state.defaultData).length > 0
        ? {
            ...state,
            isStuffFormOpened: !state.isStuffFormOpened,
            defaultData: {},
          }
        : {
            ...state,
            isStuffFormOpened: !state.isStuffFormOpened,
          };

    case ActionType.SET_STUFF_FORM_DEFAULT_VALUE:
      return {
        ...state,
        defaultData: action.payload,
      };

    default:
      return state;
  }
};
