import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "./filtersSlice.js";

export const getIsContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.loading;

export const getError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [getIsContacts, selectFilters],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
