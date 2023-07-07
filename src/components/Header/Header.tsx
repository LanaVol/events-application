import { MobileMenu } from "./MobileMenu";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AccountCircle, Logout } from "@mui/icons-material";
import { MenuNavigationLink } from "../MenuNavigationLink";
import { ThemeToggle } from "../index";

export const Header = (): JSX.Element => {
  const isNonMobileScreens = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  return (
    <header>
      <Box
        sx={{
          background: theme.palette.background.gradientHeaderBg,
          color: theme.palette.text.primary,
          boxShadow: "0px 5px 2.9px rgba(12, 12, 12, 0.197)",
        }}
      >
        {isNonMobileScreens ? (
          <Container maxWidth="xl">
            <MobileMenu />
          </Container>
        ) : (
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h2"
                fontSize="42px"
                fontWeight="700"
                sx={{
                  textTransform: "uppercase",
                  padding: "20px 0px",
                }}
              >
                Events
              </Typography>

              <MenuNavigationLink />

              <ThemeToggle />
            </Box>
          </Container>
        )}
      </Box>
    </header>
  );
};
