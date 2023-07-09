import { useEffect } from "react";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import AOS from "aos";
import {
  CalendarMonth,
  Chair,
  Description,
  Place,
  Public,
  Title,
} from "@mui/icons-material";
import { CalendarIcon } from "@mui/x-date-pickers";
import { ItemIconText } from "../ItemIconText";

export const HomeEventList = ({ events }: any): JSX.Element => {
  const theme = useTheme();

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
              gap: "0.5rem",
            }}
          >
            <Box
              sx={{ width: "40%", borderRadius: "10px", overflow: "hidden" }}
            >
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
                // border: "1px solid red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  // border: "1px solid red",
                  borderRadius: "10px",
                  background: theme.palette.background.blueGreyBg,
                  padding: "1rem",
                  color: theme.palette.text.main,
                }}
              >
                <img
                  loading="lazy"
                  width="80"
                  src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png 2x`}
                  alt=""
                  style={{
                    margin: "0 auto",
                    display: "block",
                    padding: "3px",
                    borderRadius: "7px",
                    overflow: "hidden",
                  }}
                />

                <ItemIconText
                  text={city.label}
                  Component={
                    <Place
                      fontSize="medium"
                      sx={{
                        border: `1px solid ${theme.palette.text.main}`,
                        borderRadius: "50%",
                        padding: "3px 5px",
                        fontSize: "2.5rem",
                      }}
                    />
                  }
                />

                <ItemIconText
                  text={country.label}
                  Component={
                    <Public
                      fontSize="medium"
                      sx={{
                        border: `1px solid ${theme.palette.text.main}`,
                        borderRadius: "50%",
                        padding: "3px 5px",
                        fontSize: "2.5rem",
                      }}
                    />
                  }
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                paddingLeft: "1rem",
                border: `1px solid ${theme.palette.text.main}`,
                justifyContent: "center",
                // alignItems: "center",
                color: theme.palette.text.main,
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <ItemIconText
                text={title}
                Component={
                  <Title
                    sx={{
                      border: `1px solid ${theme.palette.text.main}`,
                      borderRadius: "50%",
                      padding: "3px 5px",
                      fontSize: "2.5rem",
                    }}
                  />
                }
              />
              <ItemIconText
                text={description}
                Component={
                  <Description
                    sx={{
                      border: `1px solid ${theme.palette.text.main}`,
                      borderRadius: "50%",
                      padding: "3px 5px",
                      fontSize: "2.5rem",
                    }}
                  />
                }
              />
              <ItemIconText
                text={date}
                Component={
                  <CalendarIcon
                    sx={{
                      border: `1px solid ${theme.palette.text.main}`,
                      borderRadius: "50%",
                      padding: "3px 5px",
                      fontSize: "2.5rem",
                    }}
                  />
                }
              />
              <ItemIconText
                text={seats}
                Component={
                  <Chair
                    sx={{
                      border: `1px solid ${theme.palette.text.main}`,
                      borderRadius: "50%",
                      padding: "3px 5px",
                      fontSize: "2.5rem",
                    }}
                  />
                }
              />

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
