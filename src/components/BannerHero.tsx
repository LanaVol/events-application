import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

// @ts-ignore
// import videoBg from "../video/videoBg.mp4";

export const BannerHero = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      //@ts-ignore
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <Box>
      <video
        //@ts-ignore
        ref={videoRef}
        loop
        muted
        style={{
          position: "relative",
          width: "100%",
          height: "30rem",
          left: 0,
          top: 0,
          objectFit: "cover",
        }}
      >
        <source src="video/waves2.mp4" type="video/mp4" />
      </video>
    </Box>
  );
};
