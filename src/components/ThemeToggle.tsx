import { useDispatch } from "react-redux";
import { setModeTheme } from "../redux/theme/theme.slice";
import { IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export const ThemeToggle = (): JSX.Element => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <IconButton
      onClick={() => dispatch(setModeTheme())}
      sx={{ color: theme.palette.text.white }}
    >
      {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};
