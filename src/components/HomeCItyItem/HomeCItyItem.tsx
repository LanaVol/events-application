import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Event, PeopleAlt, Place, Public } from "@mui/icons-material";
import { useState } from "react";
import ScrollHandler from "react-scroll-wheel-handler";
import { ItemIconText } from "../ItemIconText";
// import { animateScroll as scroll } from "react-scroll";

interface IHomeCItyItemProps {
  data: any;
  index: number;
}

export const HomeCItyItem = ({
  data,
  index,
}: IHomeCItyItemProps): JSX.Element => {
  const {
    city,
    imagePath,
    title,
    country,
    totalEvents,
    population,
    description,
  } = data;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile
          ? "column"
          : index % 2 === 0
          ? "row"
          : "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        background: theme.palette.background.gradientBg1,
        width: "100%",
        padding: isMobile ? "1rem" : "2rem",
        borderRadius: "10px",
        "&:hover .cityNumberBg": {
          transform: "translate(0%)",
        },
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "45%",
          height: "500px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Link href={`/cities/${city.label.toLowerCase()}`}>
          <Image
            src={imagePath}
            alt={title}
            fill={true}
            priority={true}
            style={{
              objectFit: "cover",
              display: "block",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Typography
            variant="h3"
            className="cityNumberBg"
            sx={{
              textAlign: "right",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              color: theme.palette.background.paper,
              transform: "translate(-100%)",
              background: theme.palette.background.blueGreyBg,
              transition: "transform 1000ms ease-in-out",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "140px",
              fontWeight: "800",
              opacity: "0.5",
            }}
          >
            {index < 10 ? `0${index + 1}` : `${index + 1}`}
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          width: isMobile ? "100%" : "53%",
        }}
      >
        <Box
          sx={{
            padding: "30px",
            background: theme.palette.background.blueGrey100,
            borderRadius: "20px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: index % 2 === 0 ? "row-reverse" : "row",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Box sx={{ width: isMobile ? "100%" : "50%" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                fontSize: "42px",
                textAlign: "center",
                color: theme.palette.text.primary,
                borderBottom: `2px solid ${theme.palette.text.primary}`,
                padding: "20px 10px",
                marginBottom: "30px",
              }}
            >
              {city.label}
            </Typography>

            <Box
              sx={{
                width: "90%",
                height: "250px",
                overflow: "hidden",
                position: "relative",
                margin: "0 auto",
              }}
            >
              <Link href={`/cities/${city.label.toLowerCase()}`}>
                <Image
                  src={imagePath}
                  alt={title}
                  fill={true}
                  priority={true}
                  style={{
                    objectFit: "contain",
                    display: "block",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </Link>
            </Box>
          </Box>

          <Box sx={{ width: isMobile ? "100%" : "50%" }}>
            <Box
              sx={{
                padding: isMobile ? "0.3rem" : "1rem",
                display: isMobile ? "flex" : "block",
                justifyContent: "space-between",
                flexWrap: "wrap",
                color: theme.palette.text.light,
              }}
            >
              <Box>
                <ItemIconText
                  Component={
                    <Public
                      sx={{
                        fontSize: "2rem",
                        color: theme.palette.text.primary,
                      }}
                    />
                  }
                  text={city.label}
                />

                <ItemIconText
                  Component={
                    <Event
                      sx={{
                        fontSize: "2rem",
                        color: theme.palette.text.primary,
                      }}
                    />
                  }
                  text={`All events: ${totalEvents}`}
                />
              </Box>

              <Box>
                <ItemIconText
                  Component={
                    <Place
                      sx={{
                        fontSize: "2rem",
                        color: theme.palette.text.primary,
                      }}
                    />
                  }
                  text={`Population: ${city.population}`}
                />

                <ItemIconText
                  Component={
                    <PeopleAlt
                      sx={{
                        fontSize: "2rem",
                        color: theme.palette.text.primary,
                      }}
                    />
                  }
                  text={`Location: ${country.label}`}
                />
              </Box>
            </Box>

            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                color: theme.palette.text.light,
                padding: "1rem",
              }}
            >
              {description}
            </Typography>
          </Box>

          <Link href={`/cities/${city.label.toLowerCase()}`}>
            <Button
              sx={{
                padding: "0.5rem 2rem",
                textDecoration: "none",
                borderRadius: "20px",
              }}
              variant="outlined"
            >
              Read More
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
