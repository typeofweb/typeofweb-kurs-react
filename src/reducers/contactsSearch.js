export const contactsSearch = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_CONTACTS':
      return action.text;
    default:
      return state
  }
}
