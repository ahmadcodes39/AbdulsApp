import { createContext, useState } from "react";

// Create a Context
export const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
  // Renamed to match "AppContext"
  const [dataset, setDataset] = useState(" ");
  const [model, setModel] = useState("");

  return (
    <AppContext.Provider value={{ dataset, setDataset, model, setModel }}>
      {children}
    </AppContext.Provider>
  );
};
