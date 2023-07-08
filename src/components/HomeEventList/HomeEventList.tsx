import { useEffect } from "react";
import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import AOS from "aos";
import { Place } from "@mui/icons-material";

export const HomeEventList = ({ events }: any): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        paddingBottom: "5rem",
      }}
    >
      {events?.map(
        (
          {
            country,
            city,
            title,
            description,
            seats,
            date,
            categories,
            imagePath,
          }: any,
          index: number
        ) => (
          <Box
            key={index}
            data-aos="fade-up"
            data-aos-duration="2000"
            sx={{
              // border: "1px solid red",
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              justifyContent: index % 2 === 0 ? "start" : "end",
              padding: "1rem 0",
              gap: "1rem",
            }}
          >
            <Box sx={{ width: "40%" }}>
              <Image
                src={imagePath}
                alt={title}
                width={800}
                height={400}
                priority={true}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
              />
            </Box>

            <Box
              sx={{
                border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <Box sx={{ border: "1px solid red", borderRadius: "10px" }}>
                <img
                  loading="lazy"
                  width="80"
                  src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                <Box
                  sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      padding: "3px 5px",
                      border: "1px solid red",
                      borderRadius: "50%",
                    }}
                  >
                    <Place fontSize="medium" />
                  </Box>

                  <Typography>{city.label}</Typography>
                </Box>

                <Typography>Country: {country.label}</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                paddingLeft: "1rem",
                border: "1px solid red",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Typography>Title: {title}</Typography>
              <Typography>Description: {description}</Typography>
              <Typography>Date: {date}</Typography>
              <Typography>Seats: {seats}</Typography>

              {/* <Box>
                <Box>
                  <Box>
                    <img
                      loading="lazy"
                      width="80"
                      src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    <Typography>City: {city.label}</Typography>
                  </Box>
                </Box>
                <Typography>Country: {country.label}</Typography>
              </Box> */}

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {categories?.map(({ label, color }: any, index: number) => (
                  <Chip
                    key={index}
                    label={label}
                    variant="outlined"
                    style={{
                      color: "white",
                      backgroundColor: color,
                      marginRight: "5px",
                      border: "none",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};
