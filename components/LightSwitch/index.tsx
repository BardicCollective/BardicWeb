import React, { FunctionComponent, useState, useContext } from "react";
import { ThemeContext } from "@contexts/theme";
import { Lightbulb } from "@components/SVGs";

interface Props {
  classes?: string
}

const LightSwitch: FunctionComponent<Props> = ({classes}) => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  // short circuit
  if (!colorMode) {
    return null;
  }

  const darkMode = colorMode === 'dark';
  const [on, setOn] = useState(!darkMode);

  const setMode = () => {
    setColorMode(darkMode ? 'light' : 'dark');
  };

  return (
    <div onMouseOver={() => setOn(!on)} onMouseOut={() => setOn(!on)} onClick={setMode}>
      <Lightbulb classes={classes} darkMode={darkMode} on={on}/>
    </div>
  )
}

export default LightSwitch;
