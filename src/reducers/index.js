import { combineReducers } from "redux";
import { contacts } from "./contacts";
import { contactsSearch } from "./contactsSearch";
import { seed } from "./seed";

export default combineReducers({
  contacts,
  contactsSearch,
  seed
});
