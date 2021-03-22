import {mockStuff} from "../mocks/stuff";

const initialState = {
  stuff: mockStuff,
};

type actionTypes = {
  type: string;
  payload: any;
};

export default (state = initialState, action: actionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
