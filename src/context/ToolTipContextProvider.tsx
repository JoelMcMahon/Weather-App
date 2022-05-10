import React, { createContext, useContext, useState } from "react";
import { IToolTipContext, step } from "../interfaces/interfaces";
import { firstSteps, secondSteps } from "../tooltipSteps/tooltipSteps";

const toolTipContext = createContext<IToolTipContext>({
  enabled: true,
  setEnabled: () => {},
  onExit: () => {},
  activeSteps: [],
  setActiveSteps: () => {},
});

export const useToolTipContext = () => useContext(toolTipContext);

const ToolTipContextProvider: React.FC = ({ children }) => {
  const [enabled, setEnabled] = useState(true);
  const [activeSteps, setActiveSteps] = useState<step[]>(firstSteps);

  const onExit = () => {
    setEnabled(false);
  };

  return (
    <toolTipContext.Provider
      value={{ enabled, setEnabled, onExit, activeSteps, setActiveSteps }}
    >
      {children}
    </toolTipContext.Provider>
  );
};

export default ToolTipContextProvider;
