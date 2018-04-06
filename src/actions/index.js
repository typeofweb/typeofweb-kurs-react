export const contactsFetched = (contacts) => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  contacts
});

export const searchContacts = (text) => ({
  type: 'SEARCH_CONTACTS',
  text
});
