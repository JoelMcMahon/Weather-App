import React, { createContext, useContext, useState } from "react";
import { IToolTipContext } from "../interfaces/interfaces";

const toolTipContext = createContext<IToolTipContext>({
  enabled: true,
  setEnabled: () => {},
  onExit: () => {},
});

export const useToolTipContext = () => useContext(toolTipContext);

const ToolTipContextProvider: React.FC = ({ children }) => {
  const [enabled, setEnabled] = useState(true);

  const onExit = () => {
    setEnabled(false);
  };

  return (
    <toolTipContext.Provider value={{ enabled, setEnabled, onExit }}>
      {children}
    </toolTipContext.Provider>
  );
};

export default ToolTipContextProvider;
