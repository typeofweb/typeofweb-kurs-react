import { asyncActionCreatorFactory } from "../utils/redux";

export const changeSeed = seed => ({
  type: "CHANGE_SEED",
  seed
});

export const changeSeedAndFetch = seed => dispatch => {
  dispatch(changeSeed(seed));
  dispatch(fetchContacts());
};

export const searchContacts = text => ({
  type: "SEARCH_CONTACTS",
  text
});

export const fetchContacts = asyncActionCreatorFactory(
  "CONTACTS",
  (dispatch, getState) => {
    return fetch(
      "https://randomuser.me/api/?format=json&results=10&seed=" +
        encodeURIComponent(getState().seed)
    );
  }
);
