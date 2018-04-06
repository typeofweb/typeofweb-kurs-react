import { combineReducers } from "redux";
import { contacts } from "./contacts";
import { contactsSearch } from "./contactsSearch";

export default combineReducers({
  contacts,
  contactsSearch
});
