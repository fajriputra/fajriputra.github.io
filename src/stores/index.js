import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import promiseMiddleware from "redux-promise-middleware";
import storage from "redux-persist/lib/storage";

import pokemonReducers from "stores/pokemon/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  pokemon: pokemonReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(promiseMiddleware)
);
let persistor = persistStore(store);

export { store, persistor };
