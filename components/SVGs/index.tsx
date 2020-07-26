import React, { FunctionComponent } from 'react';

// Wrapper?
// export const Svg = (children) => {
//   return(
//     <svg version="1.1"
//        baseProfile="full"
//        width="300" height="200"
//        xmlns="http://www.w3.org/2000/svg">
//        {children}
//     </svg>
//   )
// }

export const Square = () => {
  return(
    <svg version="1.1"
         baseProfile="full"
         width="100" height="100"
         xmlns="http://www.w3.org/2000/svg">

      <rect x="0" y="0" width="100" height="100" />
    </svg>
  );
}

// This only shows the upper right quarter of the cirlce because we're only
// showing 100 units in each direction from 0,0 of the full image
export const CircleZoomed = () => {
  return(
    <svg version="1.1"
         baseProfile="full"
         width="200" height="200"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 100 100">

      <circle cx="100" cy="100" r="100" />
    </svg>
  );
}

export const SvgFlag = () => {
  return (
    <svg version="1.1"
         baseProfile="full"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">

      <rect width="100%" height="100%" fill="red" />

      <circle cx="150" cy="100" r="80" fill="green" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>
  );
}

export const BunchOfShapes = () => {
  // in XML strokeWidth would be stroke-width
  return (
    <svg width="105" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="105" height="250" stroke="black" fill="transparent" strokeWidth="5" />

      <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5" />
      <rect x="60" y="10" rx="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5" />

      <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" strokeWidth="5" />
      <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" strokeWidth="5" />

      <line x1="10" x2="50" y1="110" y2="150" stroke="orange" strokeWidth="5" />
      <polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145" stroke="orange" fill="transparent" strokeWidth="5" />

      <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" stroke="green" fill="transparent" strokeWidth="5" />

      <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" strokeWidth="5" />
    </svg>
  );
}

interface CloseProps {
  height?: number,
  width?: number,
  stroke?: string,
  strokeWidth?: number
}
// passing things was giving me type errors, TODO: investigate
// export const Close = (height: number = 5, width: number = 5, stroke: string = "black")
export const Close: React.StatelessComponent<CloseProps> = ({height = 10, width = 10, stroke = "black", strokeWidth = 2}) => {
  return(
    <svg height={height} width={width} version="1.1" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" x2={width} y1="0" y2={height} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1={width} x2="0" y1="0" y2={height} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
}

interface HamburgerMenuProps {
  height?: number,
  width?: number,
  stroke?: string,
  strokeWidth?: number
}

export const HamburgerMenu: React.StatelessComponent<HamburgerMenuProps> = ({height = 10, width = 10, stroke = "black", strokeWidth = 2}) => {
  return(
    <svg height={height} width={width} version="1.1" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" x2={width} y1="0" y2="0" stroke={stroke} strokeWidth={strokeWidth} />
      <line x1="0" x2={width} y1={height/2} y2={height/2} stroke={stroke} strokeWidth={strokeWidth} />
      <line x1="0" x2={width} y1={height} y2={height} stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
  );
}

interface LightbulbProps {
  darkMode?: boolean,
  on?: boolean,
  classes?: string
}

export const Lightbulb: FunctionComponent<LightbulbProps> = ({darkMode = false, on = true, classes}) => {
  let mainStroke = 'black';
  let wickStroke = 'white';
  let glassFill = 'yellow';
  let nubFill = 'grey';

  if (!darkMode && !on) {
    wickStroke = 'black';
    glassFill = 'transparent';
    nubFill = 'transparent'
  } else if (darkMode && on) {
    mainStroke = 'white';
  } else if (darkMode && !on) {
    mainStroke = 'white';
    glassFill = 'transparent';
    nubFill = 'transparent';
  }

  return (
    <svg className={classes} viewBox="0 0 52 72" width="52" height="72" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="26" cy="26" r="25" stroke={mainStroke} fill={glassFill} strokeWidth="2" />
      <path d="M16,49 V67 C 16,71 36,71 36,67 V49 C26,51 26,51 16,49" fill={nubFill} stroke={mainStroke} strokeWidth="2" />
      <path d="M16,54 C16,59 36,59 36,54" fill="transparent" stroke={mainStroke} strokeWidth="2" />
      <path d="M16,60 C16,65 36,65 36,60" fill="transparent" stroke={mainStroke} strokeWidth="2" />
      <path d="M26,49 V41 Q26,31 31,31 T36,36 T26,41 T18,31 T28,24" fill="transparent" stroke={wickStroke} strokeWidth="3" />
    </svg>
  );
}
