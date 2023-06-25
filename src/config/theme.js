import { PaletteMode, createTheme } from "@mui/material";

// declare module "@mui/material" {
//   interface TypeBackground {
//     light: string;
//     main: string;
//     mainHover: string;
//   }
//   interface TypeText {
//     light: string;
//     main: string;
//   }
// }

export const themeSettings = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#00838f",
        light: "#00acc1",
        dark: "#006064",
      },
      secondary: {
        light: "#ff7961",
        main: "#ff3d00",
        dark: "#dd2c00",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#fff",
        paper: mode === "dark" ? "#121212" : "#fff",
        light: mode === "dark" ? "#212121" : "#fafafa",
        main: "#26a69a",
        mainHover: "#00796b",
        headerBg: mode === "light" ? "#95E1D3" : "#025345",
        blackBtn: "#000",
        blackBtnHover: "#4A4A4A",
        gradientCard:
          mode === "light"
            ? "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)"
            : "linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)",
        // gradient:
        //   "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
      },
      text: {
        primary: mode === "dark" ? "#fff" : "rgba(0, 0, 0, 0.87)",
        light: mode === "dark" ? "#fff" : "#fff",
        main: mode === "dark" ? "#26a69a" : "#26a69a",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 600,
        lg: 1024,
        xl: 1680,
      },
    },
  });
};
