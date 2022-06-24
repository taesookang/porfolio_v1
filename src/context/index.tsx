import React, { useContext, useEffect, RefObject } from "react";

interface ContextInterface {
  scrollToSection: (id: string) => void;
}

interface Props {
  children: React.ReactNode;
}

const GlobalContext = React.createContext({} as ContextInterface);

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const scrollToSection = (id: string) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <GlobalContext.Provider value={{ scrollToSection }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);



type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); 
};