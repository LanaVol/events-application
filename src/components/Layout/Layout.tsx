import { useMemo, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../Footer/Footer";
import { RootState } from "../../redux/store";
import { themeSettings } from "../../config/theme";
import { Box, ThemeProvider, createTheme, Theme } from "@mui/material";

interface ILayoutProps {
  children: ReactNode | any;
}

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme: Theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        {children}

        <Footer
          homePage={children && children.type.name === "Home" ? true : false}
        />
      </Box>
    </ThemeProvider>
  );
};
