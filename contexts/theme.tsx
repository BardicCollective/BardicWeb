import React, { createContext, useState, useEffect, useMemo } from 'react';
import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '@components/Theme/colors';


const defaultContext = {
  colorMode: 'light',
  setColorMode: (newValue: string) => {}
};

export const ThemeContext = createContext(defaultContext);

export const ThemeProvider = ({ children }) => {
  const [ colorMode, rawSetColorMode ] = useState<string | undefined>(undefined);

  useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in InlineCssVariable. That way it can
    // happen before the React component tree mounts
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    // we should probably build a type guard if for this
    // instead of just using `as` casting
    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(newValue: string) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
