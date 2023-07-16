import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "../index";
import { MenuNavigationLink } from "../MenuNavigationLink";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";

interface IHeaderProps {
  homePage?: boolean;
}

export const Header = ({ homePage }: IHeaderProps): JSX.Element => {
  const isNonMobileScreens = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  return (
    <header>
      <Box
        sx={{
          position: homePage ? "absolute" : "static",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          background: homePage
            ? theme.palette.background.gradientGlassHeader
            : theme.palette.background.gradientBg3,
          color: theme.palette.text.white,
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
        <Divider />
      </Box>
    </header>
  );
};
