import { Button } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useToolTipContext } from "../context/ToolTipContextProvider";
import { getSteps } from "../services";
import { firstSteps } from "../tooltipSteps/tooltipSteps";

const Tutorial = () => {
  const { enabled, setEnabled, setActiveSteps } = useToolTipContext();

  const toggleSteps = () => {
    getSteps("tutorial/en/firstSteps.json")
      .then((response) => {
        setActiveSteps(Object.values(response));
      })
      .then(() => {
        setEnabled(!enabled);
      });
  };

  return (
    <div>
      <Button id="tutorialBtn" type="submit" onClick={toggleSteps}>
        <FormattedMessage id="tutorial" defaultMessage="Tutorial" />
      </Button>
    </div>
  );
};

export default Tutorial;
