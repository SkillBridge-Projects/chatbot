"use client";
import React, { useState, createContext } from "react";

const keyDefault: any = {
  key: "",
  setKey: () => {},
};
export const KeyContext = createContext<any>(keyDefault);

// specify the props type twice on purpose
const MainComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [key, setKey] = useState("");

  return (
    <KeyContext.Provider value={{ key, setKey }}>
      {children}
    </KeyContext.Provider>
  );
};

export default MainComponent;
