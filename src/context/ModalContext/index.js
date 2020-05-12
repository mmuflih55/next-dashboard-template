import React from "react";
import Reducer from "./reducer";
const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [state, dispatch] = Reducer();
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a modalProvider");
  }
  return [context.state, context.dispatch];
}

export { ModalProvider, useModal };
