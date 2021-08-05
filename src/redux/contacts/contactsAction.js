// ==================== toolkit ==========================
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact");
const deleteContact = createAction("contacts/deleteContact");
const setFilter = createAction("contacts/setFilter");

export { addContact, deleteContact, setFilter };

// ==================== redux ==========================
// const ADD_CONTACT = "contacts/addContact";
// const DELETE_CONTACT = "contacts/deleteContact";
// const SET_FILTER = "contacts/setFilter";

// const addContact = (newContact) => ({
//   type: ADD_CONTACT,
//   payload: newContact,
// });

// const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

// const setFilter = (filterValue) => ({
//   type: SET_FILTER,
//   payload: filterValue,
// });

// export { ADD_CONTACT, DELETE_CONTACT, SET_FILTER };
// export { addContact, deleteContact, setFilter };
