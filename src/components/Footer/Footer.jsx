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
  useTheme,
} from "@mui/material";
import {
  Instagram,
  Twitter,
  Telegram,
  LinkedIn,
  Facebook,
} from "@mui/icons-material";

export const Footer = () => {
  const theme = useTheme();

  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "#C49D5E",
          padding: "20px 0",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontWeight="700">
            Join to new events
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              maxWidth: "500px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.background.blackBtn,
              marginLeft: "5px",
              // "&:hover": theme.palette.background.blackBtnHover,
            }}
          >
            Send
          </Button>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "460px",
              marginBottom: "30px",
              padding: "20px 0",
              borderBottom: "1px solid gray",
            }}
          >
            <Typography variant="h5" fontSize="36px" fontWeight="700">
              EVENTS
            </Typography>
            <Box
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
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>&#169; 2022 - A Project Built with Next.js</Typography>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Telegram />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Facebook />
              </IconButton>
            </Stack>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
