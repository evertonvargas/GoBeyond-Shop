import { createContext, useState, useContext, ReactNode } from "react";

interface MenuOpenCloseContextData {
  menu: boolean;
  handleMenu: () => void;
}

interface MenuOpenCloseProviderProps {
  children: ReactNode;
}

const MenuOpenCloseContext = createContext<MenuOpenCloseContextData>({} as MenuOpenCloseContextData);

export function MenuOpenCloseProvider({ children } : MenuOpenCloseProviderProps) {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <MenuOpenCloseContext.Provider value={{ menu, handleMenu }}>
      {children}
    </MenuOpenCloseContext.Provider>
  );
}

export function useMenu(): MenuOpenCloseContextData {
  return useContext(MenuOpenCloseContext);
}