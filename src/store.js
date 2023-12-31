import { createStore } from "redux";
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const persistConfigure = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfigure, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store)

export default store;