import { createContext, useState } from "react";

// Create a Context
export const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
  // Renamed to match "AppContext"
  const [dataset, setDataset] = useState(null);
  const [model, setModel] = useState(null);
  const [mitigation, setMitigation] = useState(null);

  return (
    <AppContext.Provider
      value={{
        dataset,
        setDataset,
        model,
        setModel,
        mitigation,
        setMitigation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
