import { useEffect, useRef } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export const VideoBg = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      //@ts-ignore
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <video
      //@ts-ignore
      ref={videoRef}
      loop
      muted
      style={{
        position: "absolute",
        width: "100%",
        // minHeight: isMobile ? "24rem" : "2rem",
        // maxHeight: isMobile ? "33rem" : "25rem",
        // minHeight: "fit-content",
        height: "100%",
        left: 0,
        top: 0,
        right: 0,
        objectFit: "cover",
        transform: "rotate(180deg)",
        zIndex: 0,
      }}
    >
      <source src="video/discolight2.mp4" type="video/mp4" />
    </video>
  );
};
