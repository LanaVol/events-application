import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  useTheme,
} from "@mui/material";
import { Place } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

export const AllEvents = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: "0 auto",
        // width: "75%",
        padding: "20px 0",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Container>
        <Grid container gap={2}>
          {data?.map(({ _id, city, title, totalEvents, imagePath }) => (
            <Grid
              item
              key={_id}
              xs={12}
              sm={6}
              md={4}
              lg={3.8}
              sx={{
                borderRadius: "10px",
                margin: "0 auto",
                display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
                alignItems: "end",
                // overflow: "hidden",
                transition: "transform 300ms linear",
                background: theme.palette.background.gradientCard,

                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: " 0px 1px 7px 0px rgba(36,188,196,0.75)",
                },
              }}
            >
              <Link
                href={`/events/${city.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid red",
                    maxHeight: "350px",
                    width: "100%",
                    height: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={imagePath}
                    alt={title}
                    width={400}
                    height={200}
                    priority={true}
                    style={{
                      width: "100%",
                      height: "auto",
                      margin: "auto",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    padding: "20px 16px",
                    textAlign: "center",
                    border: "1px solid blue",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        fontSize: "16px",
                      }}
                    >
                      <Place fontSize="medium" />
                      <Typography variant="h5" sx={{ fontSize: "inherit" }}>
                        {city}
                      </Typography>
                    </Box>

                    <Typography variant="h5" sx={{ fontSize: "inherit" }}>
                      Events: {totalEvents}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{ fontSize: "24px", fontWeight: "600" }}
                  >
                    {title}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
