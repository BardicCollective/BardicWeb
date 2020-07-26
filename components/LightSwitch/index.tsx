import React, { FunctionComponent, useState } from "react";
import { Lightbulb } from "@components/SVGs";
import Cookie from "universal-cookie";

interface Props {
  classes?: string
}

const LightSwitch: FunctionComponent<Props> = ({classes}) => {
  const [darkMode, setDarkMode] = useState(true);
  const [on, setOn] = useState(false);

  const setMode = () => {
    console.log("setting cookie");
    const cookie = new Cookie();
    cookie.set('darkMode', !darkMode, { path: "/"});
    setDarkMode(!darkMode);
  };

  return (
    <div onMouseOver={() => setOn(!on)} onMouseOut={() => setOn(!on)} onClick={setMode}>
      <Lightbulb classes={classes} darkMode={darkMode} on={on}/>
    </div>
  )
}

export default LightSwitch;
