import Image from "next/image";
import { ItemIconText } from "../ItemIconText";
import { imagePathToLink } from "../../config";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { Chair, EventNote as EventNoteIcon } from "@mui/icons-material";
import { ICategoryItem, IEventItemResponse } from "../../interfaces";

interface IHomeEventItemProps {
  event: IEventItemResponse;
}

export const HomeEventItem = ({ event }: IHomeEventItemProps): JSX.Element => {
  const theme = useTheme();
  const { gradientBg1, gradientBg3, gradientHeaderBg } =
    theme.palette.background;

  const {
    imagePath,
    title,
    city,
    country,
    description,
    date,
    seats,
    categories,
  } = event;

  return (
    <Box
      sx={{
        cursor: "pointer",
        padding: "1rem 0.5rem 0 0.5rem",

        position: "relative",
        transition: "all 300ms ease-in-out",

        "&:hover": {
          transform: "scale(1.04)",
        },
        "&:hover .HomeEventItem-location": {
          transform: "translateY(200px)",
          background: gradientHeaderBg,
          color: theme.palette.text.white,
        },
        "&:hover .HomeEventItem-info": {
          transform: "translateY(-70px)",
          color: theme.palette.text.light,
        },
        "&:hover .HomeEventItem-title": {
          transform: "translateY(-70px)",
          color: theme.palette.text.white,
          background: gradientHeaderBg,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: "28rem",
          borderRadius: "0.5rem 0.5rem 0 0",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <Image
          src={imagePath}
          alt={title}
          fill={true}
          priority={true}
          style={{ display: "block", objectFit: "cover" }}
        />
      </Box>

      <Box
        className="HomeEventItem-location"
        sx={{
          position: "absolute",
          top: "25px",
          left: "25px",
          right: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.8rem",
          padding: "0.5rem",
          color: theme.palette.text.main,
          borderRadius: "0.5rem",
          transition: "all 400ms ease-in-out",
        }}
      >
        <Typography variant="h6">{city.label}</Typography>

        <img
          loading="lazy"
          width="50"
          height="50"
          src={imagePathToLink.countryFlag(country.code, 80)}
          srcSet={imagePathToLink.countryFlagx2(country.code, 160)}
          alt={country.label}
          style={{
            display: "block",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        />
        <Typography variant="h6">{country.label}</Typography>
      </Box>

      <Box
        className="HomeEventItem-info"
        sx={{
          color: theme.palette.text.disabled,
          background: gradientBg1,
          borderRadius: "0 0 0.5rem 0.5rem",
          transition: "all 300ms ease-in-out",
        }}
      >
        <Box
          sx={{
            padding: "1rem 1rem",
            background: `${gradientBg1} left, ${gradientBg3} right`,
            backgroundSize: "50%, 50%",
            backgroundPosition: "left, right",
            backgroundRepeat: "no-repeat",
            borderRadius: "0 0 0.5rem 0.5rem",
          }}
        >
          <Typography
            className="HomeEventItem-title"
            variant="h5"
            sx={{
              padding: "0.3rem",
              fontWeight: "500",
              textAlign: "center",
              borderRadius: "0.5rem",
              color: theme.palette.text.disabled,
              background: theme.palette.background.gradientCard,
              transition: "all 400ms linear",
              zIndex: 5,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              maxHeight: "2rem",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              padding: "0.5rem",
              zIndex: 1,
            }}
          >
            <ItemIconText
              text={date.split("").slice(4, 16).join("")}
              Component={
                <EventNoteIcon
                  sx={{
                    padding: "0.2rem",
                    fontSize: "2rem",
                    border: `1px solid ${theme.palette.text.disabled}`,
                    borderRadius: "50%",
                  }}
                />
              }
            />
            <ItemIconText
              text={seats}
              Component={
                <Chair
                  sx={{
                    padding: "0.2rem",
                    fontSize: "2rem",
                    border: `1px solid ${theme.palette.text.disabled}`,
                    borderRadius: "50%",
                  }}
                />
              }
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.5rem",
              zIndex: 1,
            }}
          >
            {categories.map(({ label, color }: ICategoryItem) => (
              <Chip
                key={label}
                label={label}
                style={{
                  color: "white",
                  backgroundColor: color,
                  border: "none",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
