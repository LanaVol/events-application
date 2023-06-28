import { useEffect, useState } from "react";
import CityOperations from "@/redux/event/event.operations";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export const ListEvent = ({
  cityId,
  eventId,
  handleAddEvent,
  handleEditEvent,
}) => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.events.cities).find(
    (city) => city._id === cityId
  );

  const cityName = city.city[0].toUpperCase() + city.city.slice(1);

  useEffect(() => {
    dispatch(CityOperations.getEvent({ cityName, limit: 10 }));
  }, []);

  const eventsList = city.events ? city.events : [];

  const handleDeleteEvent = (eventId) => {
    dispatch(CityOperations.deleteEvent({ cityId, eventId }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.25rem",
      }}
    >
      <Box>
        <Button variant="outlined" onClick={() => handleAddEvent(cityId)}>
          {" "}
          Add New Event
        </Button>
      </Box>

      {!eventsList?.length ? "Don't have any events" : null}
      {eventsList?.map(
        ({ id: eventId, title, description, date, seats }, index) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              gap: "1rem",
              border: "1px solid green",
            }}
            key={index}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Typography component="p">{index}</Typography>
              <Typography component="p">{title}</Typography>
              <Typography component="p">{date}</Typography>
              <Typography component="p">{seats}</Typography>
            </Box>
            <IconButton onClick={() => handleEditEvent(cityId, eventId)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => handleDeleteEvent(eventId)}>
              <Delete />
            </IconButton>
          </Box>
        )
      )}
    </Box>
  );
};
