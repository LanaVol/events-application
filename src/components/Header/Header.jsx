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
import AuthActions from "@/redux/auth/AuthOperations";
import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <header>
      <Box
        sx={{
          backgroundColor: theme.palette.background.headerBg,
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

                <Button
                  onClick={() => dispatch(AuthActions.logout())}
                  startIcon={<Logout />}
                  // sx={{ backgroundColor: "black" }}
                >
                  Logout
                </Button>
              </Box>
            ) : null}
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Container>
          <nav>
            <List
              sx={{
                minHeight: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "500",
                fontSize: "20px",
                padding: "0",
                color: theme.palette.text.primary,
              }}
            >
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href="/events"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Events
                </Link>
              </ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href="/about-us"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Link>
              </ListItem>
              <ListItem sx={{ display: "flex", justifyContent: "center" }}>
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
