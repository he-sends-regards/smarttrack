import {combineReducers} from "redux";

import alertReducer from "./alert";
import stuffReducer from "./stuff";

export default combineReducers({
  ALERTS: alertReducer,
  STUFF: stuffReducer,
});
