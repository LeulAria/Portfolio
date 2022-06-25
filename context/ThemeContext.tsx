import { createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

type ThemeState = {
  theme: Theme;
  setTheme: ((theme: "dark" | "light") => void) | null;
};

const initialState: ThemeState = {
  theme: "light",
  setTheme: null,
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider, ThemeContext };
