import React, { createContext, useContext, useEffect, useState } from "react";
import { IToolTipContext } from "../interfaces/interfaces";
import { getSteps } from "../services";

const toolTipContext = createContext<IToolTipContext>({
  enabled: true,
  setEnabled: () => {},
  onExit: () => {},
  activeSteps: [],
  setActiveSteps: () => {},
});

export const useToolTipContext = () => useContext(toolTipContext);

const ToolTipContextProvider: React.FC = ({ children }) => {
  const [enabled, setEnabled] = useState(false);
  const [activeSteps, setActiveSteps] = useState<any>([
    {
      element: "#tutorialBtn",
      title: "",
      intro: "",
      tooltipClass: "",
      highlightClass: "",
      nextLabel: "",
    },
  ]);

  useEffect(() => {
    getSteps("tutorial/en/firstSteps.json")
      .then((response) => {
        setActiveSteps(Object.values(response));
      })
      .then(() => {
        setEnabled(true);
      });
  }, []);

  console.log(activeSteps);

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
