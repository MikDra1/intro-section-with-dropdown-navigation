/* eslint-disable react/prop-types */
import useScreenSize from "../hooks/useScreenSize";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const IntroContext = createContext();

function IntroProvider({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <IntroContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </IntroContext.Provider>
  );
}

function useIntro() {
  const context = useContext(IntroContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { IntroProvider, useIntro };
