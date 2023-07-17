import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ICityItem } from "@/src/interfaces";
import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { Event, PeopleAlt, Place, Public } from "@mui/icons-material";
import { EventSlider } from "../EventSlider/EventSlider";
import { formatPopulation } from "../../utils";
import { ItemIconText } from "../ItemIconText";

export const Card = ({
  index,
  city,
  events,
  totalEvents,
  country,
  description,
}: any): JSX.Element => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        padding: "1rem",
        color: theme.palette.text.white,
        background: theme.palette.background.gradientBg3,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          {city.label}
        </Typography>
        <Divider
          style={{
            height: "2px ",
            marginBottom: "1rem",
            backgroundColor: theme.palette.text.white,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: index % 2 === 0 ? "row-reverse" : "row",
          gap: "1rem",
        }}
      >
        <Box sx={{ border: "1px solid green", width: "50%" }}>
          <Box sx={{ marginBottom: "0.5rem" }}>
            {[
              { text: country.label, icon: <Public fontSize="large" /> },
              {
                text: `Total Events: ${totalEvents}`,
                icon: <Event fontSize="large" />,
              },
              {
                text: `Population: ${formatPopulation(city.population)}`,
                icon: <Place fontSize="large" />,
              },
            ].map(({ text, icon }) => (
              <ItemIconText key={text} Component={icon} text={text} />
            ))}
          </Box>

          <Typography variant="h6" sx={{ textAlign: "justify" }}>
            {description}
          </Typography>
        </Box>

        <Box sx={{ border: "1px solid tomato", width: "50%" }}>
          <EventSlider events={events} cityName={city.label} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          paddingTop: "0.5rem",
        }}
      >
        <Link
          href={`/cities/${city.label.toLowerCase()}`}
          style={{ textDecoration: "none" }}
        >
          <Button sx={{ color: theme.palette.text.white }}>Read More</Button>
        </Link>
      </Box>
    </Box>
  );
};
