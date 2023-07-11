import Image from "next/image";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Place, Celebration as CelebrationIcon } from "@mui/icons-material";
import { ItemIconText } from "./ItemIconText";

export const CardItem = ({
  imagePath,
  title,
  leftPoint,
  rightPoint,
  mainTitle,
  description,
}: any): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: theme.palette.background.gradientCard,
        position: "relative",

        transition: "transform 300ms linear",

        "&:hover::before": {
          content: `''`,
          borderRadius: "0 10px 0 10px",
          position: "absolute",
          transform: "skew(2deg,2deg)",
          width: "101%",
          height: "101%",
          background: theme.palette.background.gradientBtn,
        },

        "&:hover": {
          transform: "scale(1.03)",
          color: theme.palette.text.white,
        },

        "&:hover .cardDescription": {
          opacity: 1,
          color: theme.palette.text.white,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "500px",
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Image
          src={imagePath}
          alt={title}
          fill={true}
          priority={true}
          style={{
            margin: "auto",
            display: "block",
            objectFit: "cover",
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
          sizes="(max-width: 768px) 25vw, (max-width: 1800px) 40vw, 33vw"
        />
        <Box
          sx={{
            padding: "10px",
            textAlign: "center",
            minHeight: "80px",
            opacity: "1",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 5,
          }}
        >
          <Box
            sx={{
              borderRadius: "10px",
              background: theme.palette.background.gradientCard,
              color: theme.palette.text.dark,
            }}
          >
            <Box
              className="cardDescription"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                fontSize: "16px",
                padding: "10px",
              }}
            >
              <ItemIconText
                text={leftPoint}
                Component={<Place fontSize="medium" />}
              />
              <ItemIconText
                text={rightPoint}
                Component={<CelebrationIcon fontSize="medium" />}
              />
            </Box>

            <Typography
              className="cardDescription"
              variant="h3"
              sx={{
                padding: "7px",
                fontSize: "32px",
                fontWeight: "600",
              }}
            >
              {mainTitle}
            </Typography>
          </Box>
        </Box>

        {description ? (
          <Typography
            className="cardDescription"
            variant="h6"
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              zIndex: 10,
              padding: "7px",
              transition: "opacity 200ms linear, color 200ms linear",
              opacity: 0,
              backgroundColor: "#00000050",
              textAlign: "center",
            }}
          >
            {description}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};
