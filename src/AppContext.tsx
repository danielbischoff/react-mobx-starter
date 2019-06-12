import * as React from "react";
import { ApplicationStore } from "./stores";

export function createStores() {
  return { applicationStore: new ApplicationStore() };
}

export const stores = createStores();

export const AppContext = React.createContext(stores);
