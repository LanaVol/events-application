import { useState } from "react";
import { useDispatch } from "react-redux";
import { ListEvent } from "./ListEvent";
import EventService from "@/services/event.service";
import CityOperations from "@/redux/event/event.operations";
import { Box, IconButton, Typography } from "@mui/material";
import { List, Delete, Edit, Add } from "@mui/icons-material";

export const ItemCity = ({
  data,
  handleUpdateCity,
  handleAddEvent,
  handleEditEvent,
}) => {
  const [openList, setOpenList] = useState(false);
  const { _id: cityId, city } = data;
  const dispatch = useDispatch();

  const handleDeleteCity = (cityId) =>
    dispatch(CityOperations.deleteCity(cityId));

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component="p">{city}</Typography>
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <IconButton onClick={() => handleUpdateCity(cityId)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDeleteCity(cityId)}>
            <Delete />
          </IconButton>
          <IconButton onClick={() => setOpenList(!openList)}>
            <List />
          </IconButton>
        </Box>
      </Box>
      {openList ? (
        <ListEvent
          cityId={cityId}
          handleAddEvent={handleAddEvent}
          handleEditEvent={handleEditEvent}
        />
      ) : null}
    </Box>
  );
};
