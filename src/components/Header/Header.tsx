import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { AccountCircle, Logout } from "@mui/icons-material";
import { AuthOperations } from "../../redux/auth/auth.operations";
import { ThemeToggle } from "../index";
import { AppDispatch, RootState } from "../../redux/store";
import { CustomButton } from "../index";

export const Header = (): JSX.Element => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme();

  return (
    <header>
      <Box
        sx={{
          background: theme.palette.background.gradientHeaderBg,
          color: theme.palette.text.primary,
          boxShadow: "0px 5px 2.9px rgba(12, 12, 12, 0.197)",
          // position: "fixed",
          // zIndex: 20,
          // width: "100%",
        }}
      >
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
              fontSize="50px"
              fontWeight="700"
              sx={{
                textTransform: "uppercase",
                padding: "10px 0px",
                letterSpacing: "0.5rem",
              }}
            >
              Events
            </Typography>

            <Box
              sx={{
                width: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
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

                  <IconButton onClick={() => dispatch(AuthOperations.logout())}>
                    <Logout />
                  </IconButton>

                  <CustomButton
                    text="Logout"
                    onClick={() => {
                      dispatch(AuthOperations.logout());
                    }}
                    startIcon={<Logout />}
                  />
                </Box>
              ) : null}
            </Box>
          </Box>
        </Container>
      </Box>
    </header>
  );
};
