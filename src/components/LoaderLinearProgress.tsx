import { Box, useTheme, LinearProgress } from "@mui/material";

export const LoaderLinearProgress = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <LinearProgress
        sx={{
          backgroundColor: theme.palette.primary.main,
          "& .MuiLinearProgress-bar": {
            backgroundColor: theme.palette.background.mainHover,
          },
        }}
      />
    </Box>
  );
};
