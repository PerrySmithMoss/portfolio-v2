import React, { useState, createContext, useContext } from "react";

interface GlobalUIProps {
  isMobileMenuDrawerOpen: boolean;
  setIsMobileMenuDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalUIContext = createContext<GlobalUIProps>({
  isMobileMenuDrawerOpen: false,
  setIsMobileMenuDrawerOpen: () => {},
  isLoaded: false,
  setIsLoaded: () => {},
});

export const GlobalUIProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [isMobileMenuDrawerOpen, setIsMobileMenuDrawerOpen] =
    useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <GlobalUIContext.Provider
      value={{
        isMobileMenuDrawerOpen,
        setIsMobileMenuDrawerOpen,
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </GlobalUIContext.Provider>
  );
};

// Export useContext Hook.
export function useGlobalUIContext() {
  return useContext(GlobalUIContext);
}
