import { Button } from "@mui/material";

export const CustomButton = ({ text, styles, startIcon }) => {
  return (
    <Button sx={styles} startIcon={startIcon}>
      {text}
    </Button>
  );
};
