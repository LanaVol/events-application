import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { FormikText } from "../FormikElements/FormikText";
import { CustomLoadingButton } from "../CustomLoadingButton";
import clip from "../../image/clip.svg";
import waves from "../../image/waves.svg";
import bubles from "../../image/bubles.svg";

const initialValuesUser = {
  firstname: "",
  lastname: "",
  telephone: "",
  email: "",
  message: "",
};

const userSchema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
  telephone: Yup.string(),
  email: Yup.string(),
  message: Yup.string(),
});

export const FormSend = () => {
  const theme = useTheme();
  const smallerScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isLoading = false;

  const handleSubmitEvent = async (values: any) => {
    console.log("values", values);
  };

  return (
    <Box
      sx={{
        padding: "3rem 2rem",
        borderRadius: "1rem",
        width: isMobile ? "100%" : smallerScreen ? "80%" : "40%",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.light,
        backgroundImage: `url(${waves.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
      }}
    >
      <Typography
        variant="h5"
        sx={{ padding: "0.2rem", marginBottom: "2rem", textAlign: "center" }}
      >
        Form Registraton
      </Typography>
      <Formik
        onSubmit={handleSubmitEvent}
        initialValues={initialValuesUser}
        validationSchema={userSchema}
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
            <FormikText
              label="First Name"
              name="firstname"
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <FormikText
              label="Last Name"
              name="lastname"
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <FormikText
              label="Telephone"
              name="telephone"
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <FormikText
              label="Email"
              name="email"
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <FormikText
              label="Message"
              name="message"
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0.5rem 0",
              }}
            >
              <CustomLoadingButton text="Send" isLoading={isLoading} />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
