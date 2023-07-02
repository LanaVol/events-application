import { BannerHero } from "../components/BannerHero";
import { MainTitle } from "../components/MainTitle";
import { HomeCityList } from "../components/HomeCityList/HomeCityList";
import { Typography } from "@mui/material";
import { useFetchHomeEvent } from "../hooks";
import { IUseFetchHomeEvent } from "../hooks/useFetchHomeEvent";
import { MenuNavigationLink } from "../components/MenuNavigationLink";
import { Box, useTheme } from "@mui/material";

export default function Home(): JSX.Element {
  const { data, isLoading, error }: IUseFetchHomeEvent = useFetchHomeEvent();
  const theme = useTheme();

  return (
    <>
      <MenuNavigationLink />
      <BannerHero />
      <MainTitle />

      {data.length > 0 && <HomeCityList data={data} />}

      {error && !isLoading && <Typography>{error}</Typography>}
    </>
  );
}
