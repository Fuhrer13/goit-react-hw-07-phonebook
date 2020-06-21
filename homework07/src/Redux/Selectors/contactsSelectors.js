import { createSelector } from "reselect";

export const contactsSelector = (state) => state.contacts;
export const errorSelector = (state) => state.error;
export const filterSelector = (state) => state.filter;
export const loaderSelector = (state) => state.loader;

export const getVisibleContacts = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
