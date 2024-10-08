import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyContextType {
  value: string;
  setValue: (newValue: string) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>("");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext loyut kisimdi ContextProvider kullanin!!");
  }
  return context;
};
