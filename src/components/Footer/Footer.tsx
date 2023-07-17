import { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Stack,
  TextField,
  useTheme,
  Divider,
  useMediaQuery,
} from "@mui/material";
import {
  Instagram,
  Twitter,
  Telegram,
  LinkedIn,
  Facebook,
  Send,
} from "@mui/icons-material";
import { CustomButton } from "../CustomButton";
import { VideoBg } from "./VideoBg";

interface IFooterProps {
  homePage?: boolean;
}

export const Footer = ({ homePage }: IFooterProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdLg = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <footer style={{ marginTop: "auto" }}>
      <Box
        sx={{
          position: "relative",
          minHeight: "20rem",
          height: "fit-content",
        }}
      >
        {homePage ? <VideoBg /> : null}

        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            // border: "1px solid red",
            background: homePage
              ? "none"
              : theme.palette.background.gradientHeaderBg,
          }}
        >
          <Box
            sx={{
              background: theme.palette.background.gradientGlassHeader,
              padding: "20px 0",
              color: theme.palette.text.white,
            }}
          >
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "space-between",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="h4" fontWeight="700">
                Want to know the latest events
              </Typography>

              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  maxWidth: "400px",
                  outlineColor: "white",
                }}
              />
              <CustomButton text="Join" startIcon={<Send />} />
            </Container>
          </Box>
          <Divider />

          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "space-between",
                alignItems: "center",
                gap: "1rem",
                padding: "20px 0",
                fontFamily: "Roboto, Arial, sans-serif",
                color: theme.palette.text.white,
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "inherit",
                }}
              >
                EVENTS
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton color="inherit">
                  <Instagram />
                </IconButton>

                <IconButton color="inherit">
                  <Twitter />
                </IconButton>

                <IconButton color="inherit">
                  <Telegram />
                </IconButton>

                <IconButton color="inherit">
                  <LinkedIn />
                </IconButton>

                <IconButton color="inherit">
                  <Facebook />
                </IconButton>
              </Stack>
            </Box>
          </Container>

          <Divider />

          <Container
            maxWidth="xl"
            sx={{ color: theme.palette.text.white, textAlign: "center" }}
          >
            <Typography variant="subtitle1" sx={{ padding: "1rem" }}>
              &#169; 2022 - A Project Built with Next.js
            </Typography>
          </Container>
        </Box>
      </Box>
    </footer>
  );
};
