import { combineReducers } from "redux";
import contactsReducer from "./contacts/contactsReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contacts",
  storage: storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

export default rootReducer;
