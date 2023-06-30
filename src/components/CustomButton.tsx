import { Button, useTheme } from "@mui/material";

export const CustomButton = ({ text, startIcon }: any) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        fontSize: "16px",
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
        borderRadius: "20px",
        padding: "10px 30px",
        "&:hover": {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      }}
      startIcon={startIcon}
    >
      {text}
    </Button>
  );
};
