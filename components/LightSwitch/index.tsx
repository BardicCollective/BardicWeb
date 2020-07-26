import React, { FunctionComponent, useState } from "react";
import { Lightbulb } from "@components/SVGs";

interface Props {
  classes?: string
}

const LightSwitch: FunctionComponent<Props> = ({classes}) => {
  const [darkMode, setDarkMode] = useState(true);
  const [on, setOn] = useState(false);

  return (
    <div onMouseOver={() => setOn(!on)} onMouseOut={() => setOn(!on)}>
      <Lightbulb classes={classes} darkMode={darkMode} on={on}/>
    </div>
  )
}

export default LightSwitch;
