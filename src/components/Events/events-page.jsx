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
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                borderRadius: "10px",
                overflow: "hidden",
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
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "400px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={imagePath}
                    alt={title}
                    fill={true}
                    // width={400}
                    // height={200}
                    priority={true}
                    style={{
                      margin: "auto",
                      display: "block",
                      objectFit: "cover",
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    padding: "20px 16px",
                    textAlign: "center",
                    minHeight: "120px",
                    width: "100%",
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
