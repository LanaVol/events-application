import { Formik } from "formik";
import { CustomLoadingButton } from "../";
import { FormikText } from "../../components/FormikElements";
import { Box, Typography } from "@mui/material";
import { ICountry } from "../../interfaces";

interface ICountryModalProps {
  handleSubmit: any;
  validationSchema: any;
  initialValues: any;
  currentCountry: ICountry | null;
  textError: string | null;
}

export const CountryModal = ({
  handleSubmit,
  validationSchema,
  initialValues,
  currentCountry,
  textError,
}: ICountryModalProps): JSX.Element => {
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
            label="Code Country"
            name="code"
            formikFunc={{
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
            }}
          />
          <FormikText
            label="Name Country"
            name="label"
            formikFunc={{
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
            }}
          />
          <FormikText
            label="Code Phone"
            name="phone"
            formikFunc={{
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "0.25rem",
            }}
          >
            <CustomLoadingButton
              text={currentCountry ? "Update Country" : "Add Country"}
            />
          </Box>
          {textError && <Typography color="error">{textError}</Typography>}
        </form>
      )}
    </Formik>
  );
};
