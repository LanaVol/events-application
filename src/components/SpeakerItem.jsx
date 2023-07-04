import { Box, Typography, useTheme } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

// const SpeakerItem: ({
//   id,
//   firstname,
//   lastname,
//   age,
// }: {
//   id: any;
//   firstname: any;
//   lastname: any;
//   age: any;
// }) => JSX.Element;

export const SpeakerItem = ({ id, firstname, lastname, age, topic, about }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "fit-content" }}>
      <Box
        key={id}
        sx={{
          background: theme.palette.background.gradientHeaderBg,
          width: "fit-content",
          padding: "16px 35px",
          borderRadius: "10px",
          color: theme.palette.text.primary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "50px",
            border: `1px solid ${theme.palette.text.primary}`,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SupportAgentIcon fontSize="large" />
        </Box>

        <Box>
          <Typography>{firstname}</Typography>
          <Typography>{lastname}</Typography>
        </Box>

        <Box>{age}</Box>
      </Box>

      <Box
        sx={{
          background: theme.palette.background.lightBlue,
          color: theme.palette.text.light,
        }}
      >
        {topic && (
          <Typography
            variant="h6"
            sx={{ fontSize: "16px", fontWeight: "400", padding: "20px" }}
          >
            {topic}
          </Typography>
        )}
        {about && (
          <Typography
            variant="h6"
            sx={{ fontSize: "16px", fontWeight: "300", padding: "20px" }}
          >
            {about}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
