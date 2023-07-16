import { Formik } from "formik";
import { CustomLoadingButton } from "../";
import { FormikText, FormikNumber } from "../FormikElements";
import { Box, Typography } from "@mui/material";
import { ICity } from "../../interfaces";

interface ICityModalProps {
  handleSubmit: any;
  initialValues: any;
  validationSchema: any;
  currentCity: ICity | null;
  textError: string | null;
  isLoading?: boolean;
}

export const CityModal = ({
  handleSubmit,
  initialValues,
  validationSchema,
  currentCity,
  textError,
  isLoading = false,
}: ICityModalProps): JSX.Element => {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <FormikText
            label="City Name"
            name="label"
            formikFunc={{ values, errors, touched, handleBlur, handleChange }}
          />

          <FormikNumber
            label="Population"
            name="population"
            minValue={0}
            maxValue={30_000_000}
            formikFunc={{ values, errors, touched, handleBlur, handleChange }}
            isLoading={isLoading}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "0.25rem",
            }}
          >
            <CustomLoadingButton
              text={currentCity ? "Update City" : "Add City"}
            />
          </Box>
          {textError && <Typography color="error">{textError}</Typography>}
        </form>
      )}
    </Formik>
  );
};
