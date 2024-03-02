export const getContacts = (state) => state.contacts;

export const getFilter = (state) => state.filters.name;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;
