import { MenuNavigation } from "../components/MenuNavigation";
import { MenuNavigationLink } from "../components/MenuNavigationLink";
import { Box, Typography, useTheme } from "@mui/material";

const AboutUsPage = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box sx={{ color: theme.palette.text.primary }}>
      <Box sx={{ padding: "1rem 0" }}>
        <MenuNavigation
          list={[
            { title: "Home", path: "/", iconName: "home" },
            { title: "About", path: "", iconName: "about" },
          ]}
        />
      </Box>

      <Typography variant="h4">About us Page</Typography>
      <Typography>
        Welcome to our website, where you can find information about various
        exciting events happening around the world. Here, you can explore a
        diverse range of events, from concerts and exhibitions to sports
        competitions and cultural festivals. On our website, you will discover
        an up-to-date event calendar featuring detailed descriptions? dates,
        venues, and other valuable information. Browse through our event
        listings, choose what interests you, and join in on the thrilling
        experiences that will leave a lasting impression.
      </Typography>
    </Box>
  );
};

export default AboutUsPage;
