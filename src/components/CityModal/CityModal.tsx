import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, FormikHelpers } from "formik";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { isEqual } from "lodash";
import { ImageItemCity, DropzoneUploadImage, CustomLoadingButton } from "..";
import {
  FormikAutocompleteOfCities,
  FormikAutocompleteOfCountries,
} from "../FormikElements";
import { FormikCheckbox, FormikText } from "../FormikElements";
import { FormValidation } from "../../config";
import { EventOperations } from "../../redux/event/event.operations";
import { AppDispatch, RootState } from "../../redux/store";
import { ICity, ICountry, ICityItem } from "../../interfaces";
import { Box, useTheme, Typography, IconButton, Tooltip } from "@mui/material";
import {
  Home as HomeIcon,
  HideSource as HideSourceIcon,
  Info as InfoIcon,
} from "@mui/icons-material";

interface ICityModalProps {
  page: number;
  limit: number;
  cityId: string | null;
  isLoading?: boolean;
  error: string | null;
  handleCloseModal: () => void;
}

interface IFormValues {
  country: ICountry;
  city: ICity;
  description: string;
  showOnHomePage: boolean;
  isHidden: boolean;
}

export const CityModal = ({
  page,
  limit,
  cityId,
  isLoading = false,
  error,
  handleCloseModal,
}: ICityModalProps): JSX.Element => {
  const { data: listCountries } = useSelector(
    (state: RootState) => state.categories.country
  );
  const [listCities, setListCities] = useState<ICity[] | []>([]);
  const [image, setImage] = useState<File | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme();

  const city = cityId
    ? useSelector((state: RootState) => state.events.cities).find(
        (city: ICityItem) => city._id === cityId
      )
    : null;

  const currentCity = city
    ? {
        country: city.country,
        city: city.city,
        description: city.description,
        showOnHomePage: city.showOnHomePage,
        isHidden: city.isHidden,
      }
    : null;

  const handleSubmitCity = async (
    values: IFormValues,
    { resetForm }: FormikHelpers<IFormValues>
  ) => {
    const areEqual = isEqual(values, currentCity);

    if (areEqual) {
      Notify.warning("Make changes to update the data");
      return;
    }

    const formData = new FormData();
    if (cityId) formData.append("_id", cityId);
    if (image) formData.append("picture", image);

    const { cities, ...countryWithoutCities }: any = values.country;
    formData.append("country", JSON.stringify(countryWithoutCities));

    formData.append(
      "city",
      JSON.stringify({ ...values.city, country: values.country.label })
    );
    formData.append("showOnHomePage", JSON.stringify(values.showOnHomePage));
    formData.append("isHidden", JSON.stringify(values.isHidden));

    formData.append("description", values.description);

    try {
      let res: any;
      setLocalError(null);

      if (cityId) res = await dispatch(EventOperations.updateCity(formData));
      if (!cityId) {
        res = await dispatch(
          EventOperations.addCity({ formData, params: { page, limit } })
        );
      }

      if (!res.error && !isLoading) {
        handleCloseModal();
        setImage(null);
        resetForm();
      }
    } catch (err: any) {
      setLocalError(err.message);
    }
  };

  return (
    <Box sx={{ color: theme.palette.text.primary }}>
      <Formik
        onSubmit={handleSubmitCity}
        // @ts-ignore
        initialValues={
          currentCity ? currentCity : FormValidation.initialValuesCity
        }
        validationSchema={FormValidation.citySchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }: any) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FormikAutocompleteOfCountries
                label="Set Country"
                changeFieldName="country"
                options={listCountries}
                formikFunc={{ values, errors, touched, setFieldValue }}
                isLoading={isLoading}
                setCitiesFunc={setListCities}
              />
              <Tooltip
                title='If you want to add a new country, use the "Add new country" in "List countries"'
                placement="top"
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FormikAutocompleteOfCities
                label="Set City"
                changeFieldName="city"
                options={listCities}
                formikFunc={{ values, errors, touched, setFieldValue }}
                isLoading={isLoading}
              />
              <Tooltip
                title='If you want to add a new city, use the "Add new city" in "List countries"'
                placement="top"
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <FormikText
              label="Description"
              name="description"
              info="Please provide a description that is between 6 and 300 characters in length."
              minRows={5}
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <Box>
              <FormikCheckbox
                label="Show This City On Home Page"
                name="showOnHomePage"
                addNameChange="isHidden"
                formikFunc={{ values, setFieldValue }}
                isLoading={isLoading}
              >
                <HomeIcon
                  sx={{
                    fontSize: "1.8rem",
                    color: theme.palette.primary.main,
                  }}
                />
              </FormikCheckbox>

              <FormikCheckbox
                label="Hide This City"
                name="isHidden"
                addNameChange="showOnHomePage"
                hideStyle={true}
                formikFunc={{ values, setFieldValue }}
                isLoading={isLoading}
              >
                <HideSourceIcon sx={{ fontSize: "1.8rem", color: "red" }} />
              </FormikCheckbox>
            </Box>

            {city?.imagePath && !image ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <ImageItemCity
                  imagePath={city.imagePath}
                  size="100px"
                  borderRadius="1rem"
                />
                <Typography sx={{ color: theme.palette.text.primary }}>
                  This Is Current Photo
                </Typography>
              </Box>
            ) : null}

            <DropzoneUploadImage image={image} setImage={setImage} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0.5rem 0",
              }}
            >
              <CustomLoadingButton
                text={cityId ? "Update City" : "Add city"}
                isLoading={isLoading}
              />
            </Box>
          </form>
        )}
      </Formik>
      <Typography color="error">{error || localError}</Typography>
    </Box>
  );
};
