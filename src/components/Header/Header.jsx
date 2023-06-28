import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { AccountCircle, Logout } from "@mui/icons-material";
import AuthActions from "@/redux/auth/auth.operations";
import { ThemeToggle } from "../ThemeToggle";
import { CustomButton } from "../CustomButton";

export const Header = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <header>
      <Box
        sx={{
          background: theme.palette.background.gradientHeaderBg,
          color: theme.palette.text.primary,
        }}
      >
        <Container>
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
              sx={{ textTransform: "uppercase", padding: "20px 0px" }}
            >
              Events
            </Typography>
            <ThemeToggle />

            {isLogged ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "2rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <AccountCircle fontSize="large" />
                  <Typography variant="subtitle1">Hello, Admin!</Typography>
                </Box>

                {/* <Button
                  onClick={() => dispatch(AuthActions.logout())}
                  startIcon={<Logout />}
                >
                  Logout
                </Button> */}
                <CustomButton
                  text="Logout"
                  onClick={() => dispatch(AuthActions.logout())}
                  startIcon={<Logout />}
                  styles={{
                    backgroundColor: theme.palette.text.primary,
                    color: theme.palette.background.default,
                    borderRadius: "20px",
                    padding: "7px 20px",
                    "&:hover": {
                      backgroundColor: theme.palette.background.default,
                      color: theme.palette.text.primary,
                    },
                  }}
                />
              </Box>
            ) : null}
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          // borderTop: `1px solid ${theme.palette.text.primary}`,
          borderBottom: `1px solid ${theme.palette.background.blackBtnHover}`,
        }}
      >
        <Container>
          <nav>
            <List
              sx={{
                minHeight: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "500",
                fontSize: "20px",
                padding: "0",
                color: theme.palette.text.primary,
              }}
            >
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    textShadow: `-4px 4px 7px ${theme.palette.primary.light}`,
                  },
                }}
              >
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    textShadow: `-4px 4px 7px ${theme.palette.primary.light}`,
                  },
                }}
              >
                <Link
                  href="/events"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Events
                </Link>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    textShadow: `-4px 4px 7px ${theme.palette.primary.light}`,
                  },
                }}
              >
                <Link
                  href="/about-us"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Link>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    textShadow: `-4px 4px 7px ${theme.palette.primary.light}`,
                  },
                }}
              >
                <Link
                  href="/admin"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Admin
                </Link>
              </ListItem>
            </List>
          </nav>
        </Container>
      </Box>
    </header>
  );
};
