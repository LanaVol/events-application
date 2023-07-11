import { PaletteMode, createTheme } from "@mui/material";

declare module "@mui/material" {
  interface TypeBackground {
    light: string;
    main: string;
    mainHover: string;
    blackBtnHover: string;
    gradientHeaderBg: string;
    gradientCard: string;
    blueGreyBg: string,
    glassBg: string,
    gradientBg1: string,
    gradientBg2: string,
    gradientBg3: string,
    gradientBtn: string,
    blueGrey100: string,
    gradientGlass: string,
    lightBlue:string,

  }
  interface TypeText {
    light: string;
    main: string;
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
        paper: mode === "dark" ? "#121212" : "#fff",
        light: mode === "dark" ? "#212121" : "#fafafa",
        main: "#26a69a",
        mainHover: "#00796b",
        blackBtnHover: "#bdbdbd",
        blueGreyBg: "#455a64",
        blueGrey100: '#eceff170',
        lightBlue:'#CCF8FA70',
        gradientHeaderBg:
          mode === "light"
            ? "linear-gradient(109.6deg, rgb(104, 183, 249) 31.3%, rgb(176, 248, 200) 100.2%)"
            : "linear-gradient(109.6deg, rgb(23, 32, 34) 11.2%, rgb(11, 132, 145) 91.1%)",
        // gradientHeaderBg:
        //   mode === "light"
        //     ? "radial-gradient(circle at 10% 20%, rgb(166, 226, 229) 0%, rgb(198, 232, 221) 100%)"
        //     : "linear-gradient(109.6deg, rgb(23, 32, 34) 11.2%, rgb(11, 132, 145) 91.1%)",
        
        gradientCard:
          mode === "light"
            ? "linear-gradient(to top, #c4c5c790 0%, #dcdddf90 52%, #ebebeb 100%)"
            : "linear-gradient(-20deg, #61616190 0%, #9bc5c390 50%)",
        gradientBg1: mode === "light"
            ? "linear-gradient(108.1deg, rgb(167, 220, 225) 11.2%, rgb(217, 239, 242) 88.9%)"
          : "linear-gradient(79.8deg, rgb(101, 132, 154) 3.2%, rgb(160, 197, 201) 89.1%)",
        
        gradientBg2:mode === "light"
            ? "linear-gradient(108.1deg, rgb(167, 220, 225) 11.2%, rgb(217, 239, 242) 88.9%)"
          : "linear-gradient(180.2deg, rgb(30, 33, 48) 6.8%, rgb(74, 98, 110) 131%)",
        gradientBg3:mode === "light"
            ? "linear-gradient(89.2deg, rgb(191, 241, 236) 22.3%, rgb(109, 192, 236) 84.1%)"
          : "linear-gradient(109.6deg, rgb(23, 32, 34) 11.2%, rgb(11, 132, 145) 91.1%)",
        gradientBtn: 'radial-gradient(circle at 10% 20%, rgb(0, 93, 133) 0%, rgb(0, 181, 149) 90%)',
        // gradientBg2:mode === "light"
        //     ? "linear-gradient(108.1deg, rgba(44, 100, 118, 1) 11.2%, rgb(217, 239, 242) 88.9%)"
        //   : "linear-gradient(79.8deg, rgba(35, 53, 70, 1) 3.2%, rgb(160, 197, 201) 89.1%)",
        gradientGlass: 'radial-gradient(circle at 10% 20%, rgb(239, 246, 249) 0%, rgb(206, 239, 253) 90%)'
        
      },
      text: {
        main: mode === "dark" ? "#26a69a" : "#26a69a",
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
