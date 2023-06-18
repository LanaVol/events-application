import { useState } from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { Place } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

export const AllEvents = ({ data }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      sx={{
        margin: "0 auto",
        // width: "75%",
        padding: "20px 0",
        // border: "1px solid blue",
        // background: "rgb(27,10,1)",
        // background:
        //   "linear-gradient(180deg, rgba(27,10,1,1) 0%, rgba(255,170,58,0.6250875350140056) 100%)",
      }}
    >
      <Container>
        <Grid
          container
          spacing={1}
          rowGap={3}
          sx={
            {
              // border: "1px solid blue",
            }
          }
        >
          {data?.map(({ _id, city, title, totalEvents, imagePath }) => (
            <Grid
              item
              key={_id}
              xs={12}
              sm={6}
              md={4}
              lg={3.5}
              sx={{
                padding: "20px 0",
                border: "1px solid gray",
                borderRadius: "10px 0px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                overflow: "hidden",
                filter: "sepia(70%) grayscale(70%)",
                transition: "transform 500ms linear, filter 100ms linear",
                "&:hover": {
                  transform: "scale(1.05)",
                  filter: "sepia(0) grayscale(0)",
                },
              }}
              // onMouseEnter={() => setIsHover(true)}
              // onMouseLeave={() => setIsHover(false)}
            >
              <Link
                href={`/events/${city.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "20px 0",
                  }}
                >
                  <Place fontSize="medium" />
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {city}
                  </Typography>
                </Box>
                <Image
                  src={imagePath}
                  alt={title}
                  width={400}
                  height={200}
                  priority={true}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxHeight: "400px",

                    margin: "auto",
                    display: "block",
                  }}
                />

                <Typography variant="h3" sx={{ textAlign: "center" }}>
                  {title}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Count events: {totalEvents}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
