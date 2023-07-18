import { Formik } from "formik";
import { isEqual } from "lodash";
import { arrToStr } from "../../utils";
import { FormValidation } from "../../config";
import {
  FormikDate,
  FormikSlider,
  FormikText,
  FormikAutocomplete,
} from "../FormikElements";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { ICategoryItem, ISearchEventParams } from "../../interfaces";

interface IFormikValues {
  query: string;
  dateStart: string;
  dateEnd: string;
  priceMin: number;
  priceMax: number;
  seatsMin: number;
  seatsMax: number;
  categories: ICategoryItem[];
  hasFreePlaces: boolean;
}
interface IFilterEventProps {
  data: ISearchEventParams;
  handleFetchByFilter: any;
  handleClearFilter: any;
  isLoading?: boolean;
}

export const EventFilter = ({
  data,
  handleFetchByFilter,
  handleClearFilter,
  isLoading = false,
}: IFilterEventProps): JSX.Element => {
  const { seatsMin, seatsMax, priceMin, priceMax, categories } = data;
  const theme = useTheme();

  const initialValuesFilter = {
    ...data,
    ...FormValidation.initialValuesFilter,
  };

  const handleSubmitEvent = (values: IFormikValues): void => {
    const areEqual = isEqual(values, initialValuesFilter);
    if (areEqual) return;

    const {
      query,
      dateStart,
      dateEnd,
      priceMin,
      priceMax,
      seatsMin,
      seatsMax,
      categories,
      hasFreePlaces,
    } = values;

    const queryParams: any = { hasFreePlaces };
    if (query) queryParams.query = query;
    if (dateStart) queryParams.dateStart = dateStart;
    if (dateEnd) queryParams.dateEnd = dateEnd;
    if (priceMin) queryParams.priceMin = priceMin;
    if (priceMax) queryParams.priceMax = priceMax;
    if (seatsMin) queryParams.seatsMin = seatsMin;
    if (seatsMax) queryParams.seatsMax = seatsMax;
    if (categories.length > 0) queryParams.categories = arrToStr(categories);

    handleFetchByFilter(queryParams);
  };

  const handleClearForm = ({ setFieldValue, resetForm }: any) => {
    setFieldValue("categories", []);
    handleClearFilter();
    resetForm();
  };

  return (
    <Box sx={{ color: theme.palette.text.primary }}>
      <Formik
        onSubmit={handleSubmitEvent}
        //@ts-ignore
        initialValues={initialValuesFilter}
        validationSchema={FormValidation.searchSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }: any) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <FormikText
              label="Search"
              name="query"
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <FormikDate
              label="Date Start"
              name="dateStart"
              formikFunc={{ values, errors, touched, setFieldValue }}
              isLoading={isLoading}
            />

            <FormikDate
              label="Date End"
              name="dateEnd"
              formikFunc={{ values, errors, touched, setFieldValue }}
              isLoading={isLoading}
            />

            <FormikAutocomplete
              label="Set category"
              changeFieldName="categories"
              options={categories}
              formikFunc={{ values, errors, touched, setFieldValue }}
              isLoading={isLoading}
            />

            <Box>
              <Typography sx={{ marginBottom: "0.5rem", textAlign: "center" }}>
                Seats:
              </Typography>
              <FormikSlider
                label={["Seats min", "Seats max"]}
                name={["seatsMin", "seatsMax"]}
                value={[seatsMin, seatsMax]}
                formikFunc={{
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  setFieldValue,
                }}
                isLoading={isLoading}
              />
            </Box>

            <Box>
              <Typography sx={{ marginBottom: "0.5rem", textAlign: "center" }}>
                Price:
              </Typography>
              <FormikSlider
                label={["Price min", "Price max"]}
                name={["priceMin", "priceMax"]}
                value={[priceMin, priceMax]}
                formikFunc={{
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  setFieldValue,
                }}
                isLoading={isLoading}
              />
            </Box>

            <FormControlLabel
              control={<Checkbox />}
              label="Free places"
              checked={values.hasFreePlaces}
              disabled={isLoading}
              onChange={() =>
                setFieldValue("hasFreePlaces", !values.hasFreePlaces)
              }
            />

            <Box
              className="flexCenter--gap-1rem"
              sx={{
                flexDirection: "column",
                padding: "0 3rem",
              }}
            >
              <LoadingButton loading={isLoading} sx={{ minWidth: "14rem" }}>
                Search Events
              </LoadingButton>
              <LoadingButton
                type="button"
                onClick={() => handleClearForm({ resetForm, setFieldValue })}
                loading={isLoading}
                sx={{ minWidth: "14rem" }}
              >
                Clear Events
              </LoadingButton>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
