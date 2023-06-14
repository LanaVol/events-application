import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import { DropzoneUpload } from "./DropzoneUpload";
import { Box, Button, FormControlLabel, Checkbox } from "@mui/material";
import CityOperations from "@/redux/cities/city.operations";
import { FormValidation } from "@/config/form.validation";
import { ImageCity } from "./ImageCity";

export const ModalCity = ({ cityId }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.events.cities).find(
    (city) => city._id === cityId
  );

  const handleSubmitCity = (values, { resetForm }) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    if (image) formData.append("picture", image);

    if (cityId) {
      dispatch(CityOperations.updateCity(formData));
    } else {
      dispatch(CityOperations.addCity(formData));
    }

    setImage(null);
    resetForm();
  };

  return (
    <div style={{ width: "100%" }}>
      <Formik
        onSubmit={handleSubmitCity}
        initialValues={city ? city : FormValidation.initialValuesCity}
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
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <label htmlFor="fist-name">City name:</label>
              <div>
                <input
                  type="text"
                  name="city"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                />
                <p style={{ color: "red" }}>{errors.city}</p>
              </div>
            </div>

            <div>
              <label htmlFor="first-name">Title event:</label>
              <div>
                <input
                  type="text"
                  name="title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                />
                <p style={{ color: "red" }}>{errors.title}</p>
              </div>
            </div>

            <div>
              <label htmlFor="first-name">Country:</label>
              <div>
                <input
                  type="text"
                  name="country"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.country}
                />
                <p style={{ color: "red" }}>{errors.country}</p>
              </div>
            </div>

            <div>
              <label htmlFor="first-name">Population:</label>
              <div>
                <input
                  type="text"
                  name="population"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.population}
                />
                <p style={{ color: "red" }}>{errors.population}</p>
              </div>

              <FormControlLabel
                control={
                  <Checkbox
                    name="showOnHomePage"
                    checked={values.showOnHomePage}
                    onChange={(e) =>
                      setFieldValue("showOnHomePage", e.target.checked)
                    }
                  />
                }
                label="Show on Home Page"
              />
              {city?.imagePath ? (
                <ImageCity imagePath={city.imagePath} size="100px" />
              ) : null}

              <DropzoneUpload image={image} setImage={setImage} />

              <Box sx={{ padding: "1rem" }}>
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{ display: "block", margin: "0 auto" }}
                >
                  {cityId ? "Update City" : "Add city"}
                </Button>
              </Box>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
