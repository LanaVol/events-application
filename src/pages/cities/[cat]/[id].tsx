import { useEffect } from "react";
import { useRouter } from "next/router";
import { EventItem } from "../../../components/EventItem/EventItem";
import { FormSend } from "../../../components/FormSend/FormSend";
import { useFetchEvents } from "../../../hooks";
import { MenuNavigation } from "../../../components";
import { Box, Typography, Container, Divider } from "@mui/material";
import { Header } from "../../../components/Header/Header";
import blob from "../../../image/blob.svg";
import blurry from "../../../image/blurry.svg";

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

const EventPage = (): JSX.Element => {
  const { query } = useRouter();
  const { cat, id } = query;

  const cityName = cat ? String(cat).toLocaleLowerCase() : null;
  const eventName = id ? String(id).toLocaleLowerCase() : null;

  const [data, isLoading, error, fetchData]: any = useFetchEvents();

  useEffect(() => {
    if (cityName && eventName) fetchData({ cityName, eventName });
  }, [eventName]);

  const list =
    cityName && eventName
      ? [
          { title: "Home", path: "/", iconName: "home" },
          { title: "Cities", path: "/cities", iconName: "cities" },
          {
            title: capitalizeFirstLetter(cityName),
            path: `/cities/${cat}`,
            iconName: "city",
          },
          {
            title: capitalizeFirstLetter(eventName),
            path: "",
            iconName: "event",
          },
        ]
      : null;

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${blob.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container
          maxWidth="xl"
          // sx={{ flex: 1 }}
        >
          {list && (
            <Box sx={{ padding: "0.75rem 0" }}>
              <MenuNavigation list={list} />
            </Box>
          )}

          <Box>
            {data && <EventItem event={data.events} isLoading={isLoading} />}
          </Box>
        </Container>
      </Box>
      <Divider />

      <Box
        sx={{
          backgroundImage: `url(${blurry.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h5"
            id="formSend"
            sx={{
              padding: "3rem 1rem 10rem 1rem",
              textAlign: "center",
            }}
          >
            Register for this event and receive details to your email
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem 0",
            marginBottom: "5rem",
          }}
        >
          <FormSend />
        </Box>

        {error && <Typography color="error">{error}</Typography>}
      </Container>
    </>
  );
};

export default EventPage;
