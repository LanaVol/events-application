import { Box, Typography } from "@mui/material";
import image3 from "../image/banner/image3.jpg";
import letters from "../image/letters.jpg";
import Image from "next/image";

export const MainTitle = () => {
  return (
    <Box
      sx={{
        // backgroundImage: "url()",
        // backgroundClip: "text",
        // color: "transparent",
        // textFillColor: "transperent",
        padding: "20px 0",
      }}
    >
      {/* <Box sx={{ width: "100%" }}>
        <Image
          src={letters}
          alt="adfsfd"
          width={600}
          height={120}
          style={{
            width: "auto",
            height: "auto",
            display: "block",
            margin: "auto",
            objectFit: "contain",
          }}
        />
      </Box> */}

      <Typography
        variant="h1"
        sx={{
          fontWeight: "600",
          textAlign: "center",
          fontSize: "64px",
          padding: "36px",
        }}
      >
        Explore the World of Events
      </Typography>
    </Box>
  );
};
