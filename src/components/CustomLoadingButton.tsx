import { LoadingButton } from "@mui/lab";
import { useTheme, Theme } from "@mui/material";

interface ICustomLoadingButtonProps {
  text: string;
  isLoading?: boolean;
}

export const CustomLoadingButton = ({
  text,
  isLoading = false,
}: ICustomLoadingButtonProps): JSX.Element => {
  const theme: Theme = useTheme();

  return (
    <LoadingButton
      variant="contained"
      loading={isLoading}
      disabled={isLoading}
      loadingPosition="center"
      type="submit"
      sx={{
        padding: "0.25rem 4rem",
        fontSize: "1rem",
        color: theme.palette.text.white,
        textTransform: "none",
        whiteSpace: "nowrap",
        backgroundColor: theme.palette.primary.main,

        "&:hover": {
          backgroundColor: theme.palette.background.mainHover,
        },
      }}
    >
      <span>{text}</span>
    </LoadingButton>
  );
};
