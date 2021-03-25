import {combineReducers} from "redux";

import alertReducer from "./alert";
import formsReducer from "./forms";
import stuffReducer from "./stuff";

export default combineReducers({
  ALERTS: alertReducer,
  STUFF: stuffReducer,
  FORMS: formsReducer,
});
