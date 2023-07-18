import { Header } from "../components/Header/Header";
import { MenuNavigation } from "../components/MenuNavigation";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { MainTitle } from "../components";
import blob2 from "../image/blob2.svg";

const list = [
  { title: "Home", path: "/", iconName: "home" },
  { title: "About", path: "", iconName: "about" },
];

const AboutUsPage = (): JSX.Element => {
  const theme = useTheme();
  const smallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Header />
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${blob2.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            flex: 1,
          }}
        >
          <Box
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            <MenuNavigation list={list} />

            <MainTitle title="About Us Page" showArrow={false} />

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "justify",
                width: smallerScreen ? "100%" : "50%",
                margin: "0 auto",
                lineHeight: "2rem",
                fontSize: "20px",
                padding: "3rem 1rem",
              }}
            >
              Welcome to our website, where you can find information about
              various exciting events happening around the world. Here, you can
              explore a diverse range of events, from concerts and exhibitions
              to sports competitions and cultural festivals. On our website, you
              will discover an up-to-date event calendar featuring detailed
              descriptions? dates, venues, and other valuable information.
              Browse through our event listings, choose what interests you, and
              join in on the thrilling experiences that will leave a lasting
              impression.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutUsPage;
