import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Typography, useTheme } from "@mui/material";
import { SpeakersLine } from "../SpeakersLine";

export const EventItem = ({ data }: any) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const theme = useTheme();

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: "60px",
          fontWeight: "800",
          textTransform: "uppercase",
          letterSpacing: "0.5rem",
          padding: "40px 0",
          color: theme.palette.text.primary,
        }}
      >
        {data.title}
      </Typography>

      <Box sx={{ display: "flex", border: "1px solid green" }}>
        {data.imagePath ? (
          <Box sx={{ width: "400px" }}>
            <Image
              src={data.imagePath}
              width={400}
              height={300}
              alt={data.title}
              style={{ width: "100%", height: "auto" }}
              priority={true}
            />
          </Box>
        ) : null}

        <Box sx={{ padding: "1rem" }}>
          <Typography variant="h4">Description: {data.description}</Typography>

          <p>{message}</p>
        </Box>
      </Box>

      <SpeakersLine speakers={data.speakers} />
    </Box>
  );
};
