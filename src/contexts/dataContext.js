import React, { useState } from "react";
import mockData from "../data/data";

export const DataContext = React.createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(mockData);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
