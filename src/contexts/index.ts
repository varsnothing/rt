import { createContext } from "react";

export const MainContext = createContext({
  selectedSymbols: ["AAPL", "GOOG"],
  setSelectedSymbols: () => {},
});
