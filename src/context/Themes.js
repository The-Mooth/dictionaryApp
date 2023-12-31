import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../constants/colors";

//manages light and dark themes

const Themes = ["light", "dark"];

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  colors: Colors["light"],
  font: "sans",
  loading: true,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("sans");
  const [loading, setLoading] = useState(true);
  const colors = Colors[theme];

  useEffect(() => {
    AsyncStorage.getItem("@user_preferred_theme")
      .then((storedTheme) => {
        if (storedTheme) {
          setTheme(storedTheme);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@user_preferred_theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, font, setFont, loading, colors }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, Themes };
