import { Box, Typography, useTheme } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const SpeakersLine = ({ speakers }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingLeft: "0",
        paddingRight: "0",
        background: theme.palette.background.gradientBg1,
        display: "flex",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          borderRadius: "10px",
          color: theme.palette.text.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          whiteSpace: "nowrap",
          animation: "animate 20s linear infinite",
          animationDelay: "-20s",

          "@keyframes animate": {
            "0%": {
              transform: "translateX(100%)",
            },
            "100%": {
              transform: "translateX(-100%)",
            },
          },
        }}
      >
        {speakers &&
          speakers.map((speaker) => (
            <Box
              key={speaker.id}
              sx={{
                backgroundColor: theme.palette.background.blueGreyBg,
                width: "fit-content",
                padding: "16px 35px",
                borderRadius: "10px",
                color: theme.palette.text.main,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                // whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  border: `1px solid ${theme.palette.background.main}`,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SupportAgentIcon fontSize="large" />
              </Box>

              <Box>
                <Typography>{speaker.firstname}</Typography>
                <Typography>{speaker.lastname}</Typography>
              </Box>
              {speaker.age}
            </Box>
          ))}
      </Box>

      <Box
        sx={{
          // width: "fit-content",
          padding: "1rem",
          borderRadius: "10px",
          color: theme.palette.text.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          whiteSpace: "nowrap",

          animation: "animate2 20s linear infinite",
          animationDelay: "-10s",

          "@keyframes animate2": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: "translateX(-200%)",
            },
          },
        }}
      >
        {speakers &&
          speakers.map((speaker) => (
            <Box
              key={speaker.id}
              sx={{
                backgroundColor: theme.palette.background.blueGreyBg,
                width: "fit-content",
                padding: "16px 35px",
                borderRadius: "10px",
                color: theme.palette.text.main,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                // whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  border: `1px solid ${theme.palette.background.main}`,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SupportAgentIcon fontSize="large" />
              </Box>

              <Box>
                <Typography>{speaker.firstname}</Typography>
                <Typography>{speaker.lastname}</Typography>
              </Box>
              {speaker.age}
            </Box>
          ))}
      </Box>
    </Box>
  );
};
