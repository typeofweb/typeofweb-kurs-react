export const getFilteredContacts = (contactsResponse, text) => {
  if (!contactsResponse.data) {
    return [];
  }

  const contactsSearch = text.toLowerCase();

  return contactsResponse.data.results.filter(contact => {
    const { first, last } = contact.name;

    return (
      first.toLowerCase().includes(contactsSearch) ||
      last.toLowerCase().includes(contactsSearch)
    );
  });
};
