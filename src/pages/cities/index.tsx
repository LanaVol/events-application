import { useEffect, useState } from "react";
import { CityList } from "@/src/components/CityList/CityList";
import { useFetchCities } from "../../hooks";
import { TypeFetchCitiesResult } from "../../hooks/useFetchCities";
import {
  Box,
  Pagination,
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  useTheme,
  Container,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { MenuNavigation } from "@/src/components/MenuNavigation";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import { CustomAutocompleteOfCountries } from "@/src/components/CustomAutocompleteOfCountries";
import { DataConfigInformation as Data } from "../../data";
import { CustomAutocompleteOfCities } from "@/src/components/CustomAutocompleteOfCities";
import { ICountry, ICity, IQueryParams } from "../../interfaces";
import { LoaderLinearProgress } from "@/src/components";

const arrToStr = (items: ICountry[] | ICity[]) => {
  return items.map(({ label }) => label).join(",");
};

const EvantsPage = (): JSX.Element => {
  const [allCities, setAllCities] = useState<ICity[]>(Data.listCities);
  const [countriesFilter, setCountriesFilter] = useState<ICountry[] | []>([]);
  const [citiesFilter, setCitiesFilter] = useState<ICity[] | []>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const allCountries = Data.listCountries;
  const theme = useTheme();

  const params: IQueryParams = { page, limit };
  if (countriesFilter.length > 0) params.countries = arrToStr(countriesFilter);
  if (citiesFilter.length > 0) params.cities = arrToStr(citiesFilter);

  const [data, isLoading, error, fetchData]: TypeFetchCitiesResult =
    useFetchCities({ params });

  const handleChangeLimit = (nevLimit: number) => {
    setPage(1);
    setLimit(nevLimit);
    // @ts-ignore
    fetchData({ ...params, page: 1, limit: nevLimit });
  };

  const handleChangePage = (_: any, newPageValue: number) => {
    setPage(newPageValue);
    fetchData({ params: { ...params, page: newPageValue } });
  };

  const handleLoadMore = () => {
    const newPageValue = page + 1;
    setPage(newPageValue);
    fetchData({ params: { ...params, page: newPageValue }, loadMore: true });
  };

  useEffect(() => {
    const countries = countriesFilter.map(({ label }) => label);

    const updatedCitiesList =
      countries.length > 0
        ? Data.listCities.filter((city) => countries.includes(city.country))
        : Data.listCities;

    setCitiesFilter([]);

    setAllCities(updatedCitiesList);

    if (countries.length > 0) {
      setPage(1);
      fetchData({ params: { ...params, page: 1 } });
    }
    fetchData({ params });
  }, [countriesFilter]);

  return (
    <Box>
      <Container maxWidth="xl">
        {isLoading && (
          <Box>
            <LoaderLinearProgress />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "2rem",
            padding: "10px 0",
          }}
        >
          {data && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "2rem",
                padding: "10px 0",
              }}
            >
              <FormControl
                size="small"
                sx={{ m: 1, minWidth: 80, color: theme.palette.text.primary }}
              >
                <InputLabel>Count</InputLabel>
                <Select
                  label="Count"
                  value={limit}
                  onChange={(e) => handleChangeLimit(Number(e.target.value))}
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
              </FormControl>
              <Typography
                sx={{ color: theme.palette.text.primary, whiteSpace: "nowrap" }}
              >
                All city: {data.totalCities}
              </Typography>
              <Typography
                sx={{ color: theme.palette.text.primary, whiteSpace: "nowrap" }}
              >
                Display: {data?.cities.length}
              </Typography>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              width: "100%",
            }}
          >
            <CustomAutocompleteOfCountries
              label="Set Country"
              value={countriesFilter}
              options={allCountries}
              onChangeFunc={setCountriesFilter}
              isLoading={isLoading}
            />

            <CustomAutocompleteOfCities
              label="Set Cities"
              value={citiesFilter}
              options={allCities}
              onChangeFunc={setCitiesFilter}
              isLoading={isLoading}
            />
          </Box>
        </Box>
      </Container>

      <Box>
        <Container maxWidth="xl">
          <MenuNavigation
            list={[
              { title: "Home", path: "/", iconName: "home" },
              { title: "Cities", path: "", iconName: "city" },
            ]}
          />
        </Container>
      </Box>

      {data && data.cities?.length > 0 && (
        <Container maxWidth="xl">
          <CityList data={data.cities} totalCities={Number(data.totalCities)} />
        </Container>
      )}

      {data && data.cities?.length < data.totalCities && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: "0.75rem",
              color: theme.palette.text.primary,
            }}
          >
            <LoadingButton
              variant="text"
              loadingPosition="start"
              onClick={handleLoadMore}
              loading={isLoading}
              startIcon={<RefreshIcon />}
              sx={{ p: "0.75rem 2rem", fontSize: "0.8rem", color: "inherit" }}
            >
              <span>Load more cities!</span>
            </LoadingButton>
          </Box>
          <Box
            sx={{
              border: "1px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Pagination
              count={Math.ceil(data.totalCities / limit)}
              page={page}
              onChange={handleChangePage}
              disabled={isLoading}
            />
          </Box>
        </>
      )}
      {!error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default EvantsPage;
