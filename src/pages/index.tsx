import { useEffect } from "react";
import { useFetchCities } from "../hooks";
import { useFetchEvents } from "../hooks/useFetchEvents";
import { TypeFetchCitiesResult } from "../hooks/useFetchCities";
import { TypeFetchEventsResult } from "../hooks/useFetchEvents";
import { BannerHero } from "../components/BannerHero";
import { MainTitle } from "../components/MainTitle";
import { MessageError } from "../components/MessageError";
import { HomeCityList } from "../components/HomeCityList/HomeCityList";

// import { HomeEventList } from "../components/HomeEventList/HomeEventList";
import { HomeEventList } from "../components/HomeEventList/HomeEventList";
import { Box, Container } from "@mui/material";

export default function Home(): JSX.Element {
  const [citiesResult, citiesIsLoading, citiesError]: TypeFetchCitiesResult =
    useFetchCities({ params: { showOnHomePage: true, showInCityHome: true } });

  const [
    eventsResult,
    eventsIsLoading,
    eventsError,
    fetchData,
  ]: TypeFetchEventsResult = useFetchEvents();

  useEffect(() => {
    fetchData({ params: { showOnHomePage: true } });
  }, []);

  return (
    <Box sx={{ flex: 1 }}>
      <BannerHero />

      <Container maxWidth="xl">
        <MainTitle
          title="Choose the best city"
          showArrow={true}
          // subtitle="Welcome to our website, where you can find information about various exciting events happening around the world. Here, you can explore a diverse range of events, from concerts and exhibitions to sports competitions and cultural festivals. On our website, you will discover an up-to-date event calendar featuring detailed descriptions? dates, venues, and other valuable information. Browse through our event listings, choose what interests you, and join in on the thrilling experiences that will leave a lasting impression."
        />

        {citiesResult && !citiesIsLoading && !!citiesResult.cities.length && (
          <HomeCityList cities={citiesResult.cities} />
        )}

        {!citiesIsLoading && citiesResult?.cities.length === 0 && (
          <MessageError
            text={
              citiesError
                ? citiesError
                : "Sorry, There Are Currently No Cities With Events!"
            }
            errorMessage={!!citiesError}
          />
        )}

        {eventsResult && !eventsIsLoading && eventsResult.events.length > 0 && (
          <>
            <MainTitle title="These Are The Best Events" showArrow={false} />

            <HomeEventList events={eventsResult.events} />
          </>
        )}

        {!eventsIsLoading && eventsResult?.events.length === 0 && (
          <MessageError
            text={
              eventsError
                ? eventsError
                : "Sorry, There Are Currently No Cities With Events!"
            }
            errorMessage={!!eventsError}
          />
        )}
      </Container>
    </Box>
  );
}
