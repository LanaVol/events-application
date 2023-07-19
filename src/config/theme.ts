import {  PaletteMode,
  PaletteOptions,
  createTheme,
  TypographyProps, } from "@mui/material";

declare module "@mui/material" {
  interface PaletteOptions {
    typography?: TypographyProps;
  }

  interface TypeBackground {
    light: string;
    mainHover: string;
    blackBtnHover: string;
    gradientMainBackground: string;
    gradientBgCardInfo: string;
    blueGreyBg: string,
    glassBg: string,
    gradientBgEventCard: string,
    gradientBgSpeakersCard: string,
    gradientBgHomePageCard: string,
    gradientAccent: string,
    bgHomePageCityCardInfo: string,
    gradientGlass: string,
    gradientGlassBgHeader: string,
    whiteLight:string,
  }
  interface TypeText {
    light: string;
    dark: string;
    white: string;
    grey: string;
  }
}

export const themeSettings = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#26a69a",
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
        light: mode === "dark" ? "#212121" : "#fafafa",
        mainHover: "#00796b",
        blueGreyBg: "#455a64",
        bgHomePageCityCardInfo: '#eceff170',
        whiteLight: '#ffffff70',
        gradientMainBackground:
          mode === "light"
            ? "linear-gradient(109.6deg, rgb(104, 183, 249) 31.3%, rgb(176, 248, 200) 100.2%)"
            : "linear-gradient(109.6deg, rgb(23, 32, 34) 11.2%, rgb(11, 132, 145) 91.1%)",
        gradientGlassBgHeader: 'radial-gradient(circle at 10% 20%, rgba(174, 224, 245, 0.122) 0%, rgba(72, 107, 122, 0.418) 90%)',
        gradientBgCardInfo:
          mode === "light"
            ? "linear-gradient(to top, #c4c5c790 0%, #dcdddf90 52%, #ebebeb 100%)"
            : "linear-gradient(-20deg, #61616190 0%, #9bc5c390 50%)",
        gradientBgEventCard: mode === "light"
            ? "linear-gradient(108.1deg, rgb(167, 220, 225) 11.2%, rgb(217, 239, 242) 88.9%)"
          : "linear-gradient(79.8deg, rgb(101, 132, 154) 3.2%, rgb(160, 197, 201) 89.1%)",
        gradientBgSpeakersCard:mode === "light"
            ? "linear-gradient(108.1deg, rgb(167, 220, 225) 11.2%, rgb(217, 239, 242) 88.9%)"
          : "linear-gradient(180.2deg, rgb(30, 33, 48) 6.8%, rgb(74, 98, 110) 131%)",
        gradientBgHomePageCard:mode === "light"
            ? "linear-gradient(89.2deg, rgb(118, 240, 255) 20%, rgb(45, 134, 182) 100%)"
          : "linear-gradient(109.6deg, rgb(23, 32, 34) 11.2%, rgb(11, 132, 145) 91.1%)",
        gradientAccent: 'radial-gradient(circle at 10% 20%, rgb(0, 93, 133) 0%, rgb(0, 181, 149) 90%)',
      },
      text: {
        primary: mode === "dark" ? "#fff" : "rgba(0, 0, 0, 0.87)",
        light: mode === "dark" ? "#fff" : "#5f6769",
        dark: mode === "dark" ? "#222831" : "#393e46",
        white: '#fff',
        grey:'#bdbdbd'
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
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
