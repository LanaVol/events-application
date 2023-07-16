import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormikHelpers } from "formik";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch, RootState } from "../../redux/store";
import { CategoryOperations } from "../../redux/category/category.operations";
import { FormValidation } from "../../config";
import { ModalWindow } from "../";
import { CountryItem, CityList, CountryModal, CityModal } from "./";
import {
  Box,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import {
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { ICity, ICountry, INewCountry } from "../../interfaces";

export const AdminListCountries = (): JSX.Element => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.categories.country
  );
  const [currentCountry, setCurrentCountry] = useState<ICountry | null>(null);
  const [currentCountryId, setCurrentCountryId] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<ICity | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [typeModalWindow, setTypeModalWindow] = useState<string>("country");
  const [expanded, setExpanded] = useState<string | boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme();

  console.log("isLoading", isLoading);

  useEffect(() => {
    dispatch(CategoryOperations.getCountries());
  }, []);

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => {
    setOpenModal(false);
    setCurrentCity(null);
    setCurrentCountry(null);
    setCurrentCountryId(null);
  };

  const handleSubmitCountry = async (
    { code, label, phone, cities }: ICountry,
    { resetForm }: FormikHelpers<ICountry>
  ) => {
    let response: any;
    if (!currentCountry) {
      const newCountry = { code, label, phone, cities: [] };
      response = await addCountry(newCountry);
    }

    if (currentCountry) {
      const updatedCountry = { code, label, phone, cities };
      const countryId = currentCountry._id;
      response = await updateCountry({ countryId, updatedCountry });
    }

    if (!response.error && !isLoading) {
      handleModalClose();
      resetForm();
    }
  };

  const handleAddCountry = () => {
    setTypeModalWindow("country");
    setOpenModal(true);
  };

  const handleUpdateCountry = async (countryId: string) => {
    const country = data.find((country: ICountry) => country._id === countryId);
    if (!country) return;
    setCurrentCountry(country);
    setTypeModalWindow("country");
    handleModalOpen();
  };

  const handleDeleteCountry = (cityId: string) => {
    dispatch(CategoryOperations.deleteCountry(cityId));
  };

  async function addCountry(newCountry: INewCountry) {
    const response = await dispatch(CategoryOperations.addCountry(newCountry));
    return response;
  }

  async function updateCountry({
    countryId,
    updatedCountry,
  }: {
    countryId: string;
    updatedCountry: INewCountry;
  }) {
    const response = await dispatch(
      CategoryOperations.updateCountry({ countryId, updatedCountry })
    );
    return response;
  }

  const handleSubmitCity = async (
    values: ICity,
    { resetForm }: FormikHelpers<ICity>
  ) => {
    const country = data.find(
      (country: ICountry) => country._id === currentCountryId
    );

    if (!country) return;
    const { _id: countryId, code, label, phone, cities } = country;

    let response: any;
    if (currentCity) {
      const updatedCityList = country.cities.map((city) => {
        if (city.id === values.id) return values;
        return city;
      });
      const updatedCountry = { code, label, phone, cities: updatedCityList };
      response = await updateCountry({ countryId, updatedCountry });
    }

    if (!currentCity) {
      const newCity = {
        id: uuidv4(),
        label: values.label,
        country: country.label,
        population: values.population,
      };

      const updatedCountry = {
        code,
        label,
        phone,
        cities: [...cities, newCity],
      };

      response = await updateCountry({ countryId, updatedCountry });
    }

    if (!response.error) {
      handleModalClose();
      resetForm();
    }
  };

  const handleAddCity = (countryId: string) => {
    setTypeModalWindow("city");
    setCurrentCountryId(countryId);
    handleModalOpen();
  };

  const handleUpdateCity = ({
    countryId,
    cityId,
  }: {
    countryId: string;
    cityId: string;
  }) => {
    setTypeModalWindow("city");

    const country = data.find((country: ICountry) => country._id === countryId);
    if (!country) return;

    const city = country.cities.find((city) => city.id === cityId);
    if (!city) return;

    setCurrentCountryId(countryId);
    setCurrentCity(city);
    handleModalOpen();
  };

  const handleDeleteCity = async ({
    countryId,
    cityId,
  }: {
    countryId: string;
    cityId: string;
  }) => {
    const country = data.find((country) => country._id === countryId);
    if (!country) return;

    const { code, label, phone } = country;
    const updatedCityList = country.cities.filter((city) => city.id !== cityId);
    const updatedCountry = {
      code,
      label,
      phone,
      cities: updatedCityList,
    };

    updateCountry({ countryId, updatedCountry });
  };

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          paddingBottom: "0.5rem",
        }}
      >
        <Tooltip title="Add New Country" placement="top">
          <IconButton onClick={handleAddCountry}>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />

      <Box>
        {data?.map((country: ICountry, index: number) => (
          <Accordion
            key={index}
            expanded={expanded === country.label}
            onChange={handleChange(country.label)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <CountryItem
                key={country._id}
                data={country}
                index={index}
                handleUpdateCountry={handleUpdateCountry}
                handleDeleteCountry={handleDeleteCountry}
              />
            </AccordionSummary>
            <AccordionDetails>
              {expanded === country.label && (
                <Box>
                  <CityList
                    countryId={country._id}
                    cities={country.cities}
                    number={index}
                    handleUpdateCity={handleUpdateCity}
                    handleDeleteCity={handleDeleteCity}
                  />
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Tooltip title="Add New City" placement="top">
                      <IconButton onClick={() => handleAddCity(country._id)}>
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <ModalWindow open={openModal} onCloseFunc={handleModalClose}>
        <Box sx={{ color: theme.palette.text.primary }}>
          {typeModalWindow === "country" ? (
            <CountryModal
              handleSubmit={handleSubmitCountry}
              validationSchema={FormValidation.countrySchema}
              initialValues={
                currentCountry
                  ? currentCountry
                  : FormValidation.initialValuesCountry
              }
              currentCountry={currentCountry}
              textError={error}
            />
          ) : (
            <CityModal
              handleSubmit={handleSubmitCity}
              initialValues={
                currentCity
                  ? currentCity
                  : FormValidation.initialValuesCityInCountry
              }
              validationSchema={FormValidation.cityityInCountrySchema}
              currentCity={currentCity}
              textError={error}
              isLoading={isLoading}
            />
          )}
        </Box>
      </ModalWindow>
    </Box>
  );
};
