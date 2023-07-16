import { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { Header } from "./Header/Header";

// @ts-ignore
// import videoBg from "../video/videoBg.mp4";

export const BannerHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      //@ts-ignore
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Header homePage={true} />
      <video
        //@ts-ignore
        ref={videoRef}
        loop
        muted
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "45rem" : betweenMdLg ? "40rem" : "35rem",
          left: 0,
          top: 0,
          objectFit: "cover",
          marginBottom: betweenMdLg ? "70px" : "30px",
        }}
      >
        <source src="video/discolight2.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "22%" : betweenMdLg ? "16%" : "28%",
          left: 0,
          right: 0,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "800",
            textAlign: "center",
            fontSize: isMobile ? "70px" : betweenMdLg ? "84px" : "110px",
            padding: "5px",
            marginBottom: "36px",
            textTransform: "uppercase",
            color: theme.palette.background.whiteOpacity70,
            WebkitTextStroke: `1px ${theme.palette.text.white}`,
          }}
        >
          Join Events of the World
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            padding: "0 7px",
            color: theme.palette.text.white,
            fontSize: betweenMdLg ? "18px" : "20px",
          }}
        >
          Welcome to our website, where you can find information about various
          exciting events happening around the world.
          <br />
          Explore and choose what interests you, and join in on the thrilling
          experiences that will leave a lasting impression.
        </Typography>
      </Box>
    </Box>
  );
};
