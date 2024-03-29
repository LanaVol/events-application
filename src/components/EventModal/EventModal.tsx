import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import { FormValidation } from "../../config";
import { DropzoneUploadImage, CustomLoadingButton, ImageItemCity } from "..";
import {
  FormikText,
  FormikNumber,
  FormikDate,
  FormikAutocomplete,
  FormikCheckbox,
} from "../FormikElements";
import { SpeakerModal } from "../SpeakerModal/SpeakerModal";
import { DataConfigInformation } from "../../data";
import { EventOperations } from "../../redux/event/event.operations";
import { AppDispatch } from "../../redux/store";
import { ISpeaker } from "../../interfaces";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import {
  Home as HomeIcon,
  HideSource as HideSourceIcon,
  AddHome as AddHomeIcon,
  PersonAdd as PersonAddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import dayjs from "dayjs";

interface IEventModalProps {
  cityId: string | null;
  eventId: string | null;
  handleCloseModal: () => void;
  error: any;
  isLoading?: boolean;
}

export const EventModal = ({
  cityId,
  eventId,
  handleCloseModal,
  error,
  isLoading = false,
}: IEventModalProps): JSX.Element => {
  const [image, setImage] = useState<File | null>(null);
  const [showAddPerson, setShowAddPerson] = useState<boolean>(false);
  const [currentSpeaker, setCurrentSpeaker] = useState<ISpeaker | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme();

  const city = useSelector((state: any) => state.events.cities).find(
    (city: any) => city._id === cityId
  );
  const singleEvent = city.events.find((event: any) => event.id === eventId);

  const dataEvent = eventId
    ? {
        title: singleEvent.title,
        description: singleEvent.description,
        date: dayjs(singleEvent.date),
        seats: singleEvent.seats,
        price: singleEvent.price,
        minAge: singleEvent.minAge,
        language: singleEvent.language,
        imagePath: singleEvent.imagePath,
        categories: singleEvent.categories,
        showOnHomePage: singleEvent.showOnHomePage || false,
        isHidden: singleEvent.isHidden || false,
        showInCityHome: singleEvent.showInCityHome || false,
        speakers: singleEvent.speakers || [],
      }
    : null;

  const handleSubmitEvent = async (values: any, { resetForm }: any) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("date", values.date);
    formData.append("seats", values.seats);
    formData.append("price", values.price);
    formData.append("minAge", values.minAge);
    formData.append("language", values.language);

    formData.append("categories", JSON.stringify(values.categories));
    formData.append("speakers", JSON.stringify(values.speakers));
    formData.append("showOnHomePage", JSON.stringify(values.showOnHomePage));
    formData.append("showInCityHome", JSON.stringify(values.showInCityHome));
    formData.append("isHidden", JSON.stringify(values.isHidden));

    if (cityId) formData.append("cityId", cityId);
    if (eventId) formData.append("eventId", eventId);
    if (image) formData.append("picture", image);

    let response: any;
    if (eventId) {
      response = await dispatch(EventOperations.updateEvent(formData));
    } else {
      response = await dispatch(EventOperations.addEvent(formData));
    }
    if (!response.error && !isLoading) {
      handleCloseModal();
      setImage(null);
      setCurrentSpeaker(null);
      resetForm();
    }
  };

  const handleModalClose = () => {
    setCurrentSpeaker(null);
    setShowAddPerson(false);
  };

  const handleDeleteSpeaker = ({ values, speakerId, setFieldValue }: any) => {
    const updatedSpeakers = values.speakers.filter(
      (speaker: ISpeaker) => speaker.id !== speakerId
    );
    setFieldValue("speakers", updatedSpeakers);
  };

  const handleEditSpeaker = ({
    values,
    speakerId,
  }: {
    values: any;
    speakerId: string;
  }) => {
    const currentSpeaker = values.speakers.find(
      (speaker: ISpeaker) => speaker.id === speakerId
    );

    setCurrentSpeaker({ ...currentSpeaker });
    setTimeout(() => setShowAddPerson(true), 1000);
    setShowAddPerson(true);
  };

  return (
    <Box>
      <Formik
        onSubmit={handleSubmitEvent}
        initialValues={
          dataEvent ? dataEvent : FormValidation.initialValuesEvent
        }
        validationSchema={FormValidation.eventSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldError,
          setFieldTouched,
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
              label="Title Event"
              name="title"
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <FormikText
              label="Description"
              name="description"
              minRows={2}
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <FormikDate
              label="Date"
              name="date"
              formikFunc={{ values, errors, touched, setFieldValue }}
              isLoading={isLoading}
            />

            <Box sx={{ display: "flex", gap: "1rem" }}>
              <FormikNumber
                label="Seats count"
                name="seats"
                formikFunc={{
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                }}
                minValue={0}
                isLoading={isLoading}
              />

              <FormikNumber
                label="Price"
                name="price"
                formikFunc={{
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                }}
                minValue={0}
                isLoading={isLoading}
              />
              <FormikNumber
                label="Min age"
                name="minAge"
                formikFunc={{
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                }}
                minValue={0}
                isLoading={isLoading}
              />
            </Box>

            <FormikText
              label="Languages for Event"
              name="language"
              formikFunc={{ values, errors, touched, handleBlur, handleChange }}
              isLoading={isLoading}
            />

            <FormikAutocomplete
              label="Set category"
              changeFieldName="categories"
              options={DataConfigInformation.labelEventCategories}
              formikFunc={{ values, errors, touched, setFieldValue }}
              isLoading={isLoading}
            />

            <Box>
              <FormikCheckbox
                label="Show This Event On Home Page"
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
                label="Show This Event On City In Home Page"
                name="showInCityHome"
                formikFunc={{ values, setFieldValue }}
                isLoading={isLoading}
              >
                <AddHomeIcon
                  sx={{
                    fontSize: "1.8rem",
                    color: theme.palette.primary.main,
                  }}
                />
              </FormikCheckbox>

              <FormikCheckbox
                label="Hide This Event"
                name="isHidden"
                addNameChange="showOnHomePage"
                hideStyle={true}
                formikFunc={{ values, setFieldValue }}
                isLoading={isLoading}
              >
                <HideSourceIcon sx={{ fontSize: "1.8rem", color: "red" }} />
              </FormikCheckbox>
            </Box>

            {values?.imagePath && !image ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <ImageItemCity
                  imagePath={values.imagePath}
                  size="100px"
                  borderRadius="1rem"
                />
                <Typography sx={{ color: theme.palette.text.primary }}>
                  This Is Current Photo
                </Typography>
              </Box>
            ) : null}

            <DropzoneUploadImage image={image} setImage={setImage} />

            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Tooltip title="Add New Speaker" placement="top">
                <IconButton onClick={() => setShowAddPerson(true)}>
                  <PersonAddIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <SpeakerModal
              openModal={showAddPerson}
              handleModalClose={handleModalClose}
              currentSpeaker={currentSpeaker}
              setCurrentSpeaker={setCurrentSpeaker}
              formikFunc={{
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                setFieldValue,
                setFieldError,
                setFieldTouched,
              }}
            />

            {values?.speakers?.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: theme.palette.text.primary,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.text.primary,
                  }}
                >
                  List Speakers For Event:
                </Typography>
                {values.speakers.map(
                  (
                    {
                      id,
                      firstname,
                      lastname,
                    }: { id: string; firstname: string; lastname: string },
                    index: number
                  ) => (
                    <Box
                      key={id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        padding: "0.1rem 0",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <Typography sx={{ color: theme.palette.text.light }}>
                          {index + 1}
                        </Typography>
                        <Typography>{`${firstname} ${lastname}`}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <IconButton
                          onClick={() =>
                            handleEditSpeaker({
                              values,
                              speakerId: id,
                            })
                          }
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() =>
                            handleDeleteSpeaker({
                              values,
                              speakerId: id,
                              setFieldValue,
                            })
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "0.5rem 0",
              }}
            >
              <CustomLoadingButton
                text={eventId ? "Update Event" : "Add Event"}
                isLoading={isLoading}
              />
            </Box>
          </form>
        )}
      </Formik>
      <Typography sx={{ color: "red" }}>{error}</Typography>
    </Box>
  );
};
