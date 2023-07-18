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
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const betweenMdLg = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <footer style={{ marginTop: "auto" }}>
      <Box
        sx={{
          height: "fit-content",
          // position: "relative",
          background: theme.palette.background.gradientHeaderBg,
        }}
      >
        {/* {homePage ? <VideoBg /> : null} */}

        <Box>
          <Box
            sx={{
              background: theme.palette.background.gradientGlassHeader,
            }}
          >
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: betweenMdLg ? "center" : "space-between",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
                padding: "20px 0",
                color: theme.palette.text.white,
                position: "relative",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="700"
                sx={{
                  textAlign: isMobile ? "center" : "left",
                  padding: "0.5rem",
                }}
              >
                Want to know the latest events
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: betweenMdLg ? "center" : "space-between",
                  gap: "1rem",
                  width: isMobile ? "100%" : "50%",
                  padding: "0.5rem",
                }}
              >
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
                <CustomButton
                  text="Join"
                  startIcon={<Send />}
                  sx={{ margin: "0 auto" }}
                />
              </Box>
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
            sx={{
              color: theme.palette.text.white,
              zIndex: 100,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                padding: "1rem",
                fontSize: "16px",
                fontWeight: "400",
                textAlign: "center",
                zIndex: 100,
              }}
            >
              &#169; 2022 - A Project Built with Next.js
            </Typography>
          </Container>
        </Box>
      </Box>
    </footer>
  );
};
