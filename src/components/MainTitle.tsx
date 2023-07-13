import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import bg3 from "../image/bg3.jpg";

interface IMainTitleProps {
  title: string;
  subtitle?: string;
  showArrow?: boolean;
}

export const MainTitle = ({
  title,
  subtitle,
  showArrow = true,
}: IMainTitleProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        padding: "20px 0",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "800",
          textAlign: "center",
          fontSize: isMobile ? "70px" : "90px",
          marginBottom: "46px",
          textTransform: "uppercase",
          color: "transparent",
          WebkitTextStroke: `1px ${theme.palette.text.primary}`,
          backgroundImage: `url(${bg3.src})`,
          WebkitBackgroundClip: "text",
          backgroundPosition: "0 0",
          animation: "back 15s linear infinite",

          "@keyframes back": {
            "100%": { backgroundPosition: "2000px 0" },
          },
        }}
      >
        {title}
      </Typography>
      {/* <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          padding: "0 50px",
          color: theme.palette.text.primary,
          marginBottom: "50px",
        }}
      >
        {subtitle ? subtitle : null}
      </Typography> */}

      {showArrow && (
        <Box
          sx={{
            width: "100px",
            height: "100px",
            margin: "0 auto",
            position: "relative",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "70px",
              height: "70px",
              borderBottom: `15px solid ${theme.palette.text.primary}`,
              borderRight: `15px solid ${theme.palette.text.primary}`,
              transform: "rotate(45deg) translate(-50%, -50%)",
              animation: "arrow 2s linear infinite",

              "@keyframes arrow": {
                "0%": {
                  top: "10px",
                  opacity: "0",
                },
                "50%": {
                  opacity: "1",
                },
                "100%": {
                  top: "50px",
                  opacity: "0",
                },
              },
            },
          }}
        ></Box>
      )}
    </Box>
  );
};
