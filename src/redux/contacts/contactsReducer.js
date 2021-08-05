// ==================== toolkit ==========================

import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./contactsAction";

const itemsReducer = createReducer([], {
  [addContact]: (state, action) => {
    if (
      state.some(
        (item) => item.name.toLowerCase() === action.payload.name.toLowerCase()
      )
    ) {
      alert(action.payload.name + " is already in contact list");
      return state;
    }
    return [...state, action.payload];
  },

  [deleteContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;

// ==================== redux ==========================

// import { combineReducers } from "redux";
// import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from "./contactsAction";

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       if (
//         state.some(
//           (stateItem) =>
//             stateItem.name.toLowerCase() === action.payload.name.toLowerCase()
//         )
//       ) {
//         alert(action.payload.name + " is already in contact list");
//         return state;
//       }
//       return [...state, action.payload];
//     case DELETE_CONTACT:
//       return state.filter((item) => item.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;
