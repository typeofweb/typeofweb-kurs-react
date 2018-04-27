export const changeSeed = seed => ({
  type: "CHANGE_SEED",
  seed
});

export const changeSeedAndFetch = seed => dispatch => {
  dispatch(changeSeed(seed));
  dispatch(fetchContacts());
};

const contactsFetched = contacts => ({
  type: "FETCH_CONTACTS_SUCCESS",
  contacts
});

export const searchContacts = text => ({
  type: "SEARCH_CONTACTS",
  text
});

export const fetchContacts = () => (dispatch, getState) => {
  fetch("https://randomuser.me/api/?format=json&results=10&seed=" + encodeURIComponent(getState().seed))
    .then(res => res.json())
    .then(json => dispatch(contactsFetched(json.results)));
};
