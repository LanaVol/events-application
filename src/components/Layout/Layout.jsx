import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "../../config/theme";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ThemeProvider, createTheme } from "@mui/material";

export const Layout = ({ children }) => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
