import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  ListItem,
  List,
  Divider,
  useTheme,
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

export const Footer = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdLg = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      //@ts-ignore
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <footer>
      <Box sx={{ position: "relative" }}>
        <video
          //@ts-ignore
          ref={videoRef}
          loop
          muted
          style={{
            position: "relative",
            width: "100%",
            height: isMobile ? "25rem" : "16rem",
            left: 0,
            top: 0,
            objectFit: "cover",
            transform: "rotate(180deg)",
          }}
        >
          <source src="video/discolight2.mp4" type="video/mp4" />
        </video>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
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
                marginBottom: "30px",
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

              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: "20px",
                }}
              >
                <List>
                  <ListItem>Email</ListItem>
                  <ListItem>Support</ListItem>
                  <ListItem>Ticketing</ListItem>
                  <ListItem>Guest Management</ListItem>
                </List>
                <List>
                  <ListItem>Partners</ListItem>
                  <ListItem>Carreers</ListItem>
                  <ListItem>Management team</ListItem>
                </List>
              </Box> */}
            </Box>
          </Container>
          <Divider />
          <Container
            maxWidth="xl"
            sx={{ color: theme.palette.text.white, textAlign: "center" }}
          >
            <Typography>&#169; 2022 - A Project Built with Next.js</Typography>
          </Container>
        </Box>
      </Box>
    </footer>
  );
};
