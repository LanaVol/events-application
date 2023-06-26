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
        // main: "#00838f",
        // light: "#00acc1",
        // dark: "#006064",
        main: "#00838f",
        light: "#a7ffeb",
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
        // headerBg: mode === "light" ? "#95E1D3" : "#025345",
        blackBtnHover: "#bdbdbd",
        gradientHeaderBg:
          mode === "light"
            ? "radial-gradient(circle at 10% 20%, rgb(166, 226, 229) 0%, rgb(198, 232, 221) 100.2%)"
            : "linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)",
        gradientCard:
          mode === "light"
            ? "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)"
            : "linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)",
        // gradient:
        //   "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
        // linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)
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
