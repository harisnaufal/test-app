import React from "react";
import { reducer } from "../reducers/Reducers";

export const Store = React.createContext(null);

const initialState = {
  category: [],
  products: [],
  purchaseHistory: [],
  isLogged: false
};

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
