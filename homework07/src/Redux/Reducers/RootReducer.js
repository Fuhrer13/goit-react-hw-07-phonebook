import { combineReducers } from "redux";
import { contactsReducer } from "./Contacts";
import filterReducer from "./Filter";

import loader from "./Loader";
import error from "./Error";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loader,
  error,
});

export default rootReducer;
