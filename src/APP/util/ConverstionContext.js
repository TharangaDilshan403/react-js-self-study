import { useState, createContext } from "react";
import BlogData from "../data/BlogData";

export const ConventionContext = createContext();

export const ConventionContextProvider = ({children}) => {
  const [blogData, setBlogData] = useState(BlogData);
  const [test, setTest] = useState("hello");

  const ContextValue = {
    blogData,
    setBlogData,
    test, setTest
  };

  return(
  <ConventionContext.Provider value={ContextValue}>
   {children}
  </ConventionContext.Provider>
  )
};
