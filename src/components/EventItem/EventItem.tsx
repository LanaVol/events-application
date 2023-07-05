import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { SpeakersLine } from "../SpeakersLine";
import { SpeakerItem } from "../SpeakerItem";
import { EventInfoCard } from "../EventInfoCard";
import { Event, Chair, Sell } from "@mui/icons-material";

export const EventItem = ({ data }: any) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const theme = useTheme();

  return (
    <Box sx={{ overflow: "hidden", marginBottom: "100px" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: "60px",
          fontWeight: "800",
          textTransform: "uppercase",
          letterSpacing: "0.5rem",
          padding: "10px 0",
          color: theme.palette.text.primary,
        }}
      >
        {data.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // border: "1px solid green",
          gap: "1rem",
          marginBottom: "40px",
        }}
      >
        {data.imagePath ? (
          <Box sx={{ width: "50%" }}>
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

        <Box
          sx={{
            padding: "1rem",
            width: "50%",
            color: theme.palette.text.light,
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              padding: "10px 3px",
            }}
          >
            <Event
              fontSize="large"
              sx={{ color: theme.palette.primary.main }}
            />
            <Typography variant="h5">When: {data.date}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              padding: "10px 3px",
              gap: "4rem",
              flexWrap: "wrap",
              borderBottom: "1px solid black",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",

                padding: "7px 14px",
              }}
            >
              <Chair
                fontSize="large"
                sx={{ color: theme.palette.primary.main }}
              />
              <Typography variant="h5">Seats: {data.seats}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <Sell
                fontSize="large"
                sx={{ color: theme.palette.primary.main }}
              />
              <Typography variant="h5">Price: {data.price}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "1rem",
              padding: "40px 3px",
            }}
          >
            <Typography variant="h5">Category: </Typography>
            {data.categories
              ? data.categories.map((cat: any) => (
                  <Chip
                    label={cat.label}
                    sx={{
                      backgroundColor: cat.color,
                      minWidth: "100px",
                      padding: "10px",
                    }}
                  />
                ))
              : null}
          </Box>

          <Typography variant="h5">
            Description: {data.description} Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Labore possimus incidunt similique
            voluptates ipsum aperiam saepe minima consequatur deleniti sunt
            adipisci nulla repudiandae laborum, consequuntur itaque neque a.
            Minus, facilis.
          </Typography>
        </Box>
      </Box>

      <SpeakersLine speakers={data.speakers} />
    </Box>
  );
};
