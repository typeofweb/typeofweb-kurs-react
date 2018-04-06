export const getFilteredContacts = (contacts, text) => {
  const contactsSearch = text.toLowerCase();

  return contacts.filter(contact => {
    const { first, last } = contact.name;

    return (
      first.toLowerCase().includes(contactsSearch) ||
      last.toLowerCase().includes(contactsSearch)
    );
  });
};
