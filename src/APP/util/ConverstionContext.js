import { useState, createContext } from "react";

export const ConventionContext = createContext();

export const ConventionContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [test, setTest] = useState("hello");

  const ContextValue = {
    data,
    setData,
    test,
    setTest,
  };

  return (
    <ConventionContext.Provider value={ContextValue}>
      {children}
    </ConventionContext.Provider>
  );
};
