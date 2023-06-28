import { useState } from "react";
import { useDispatch } from "react-redux";
import { AdminCityItem } from "../AdminCityItem/AdminCityItem";
import {
  Box,
  IconButton,
  Tooltip,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  ExpandMore as ExpandMoreIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import { AppDispatch } from "../../redux/store";
import { EventOperations } from "../../redux/event/event.operations";
import { ICityItem } from "../../interfaces";

interface IAdminCityListProps {
  data: ICityItem[];
  handleUpdateCity: any;
  handleAddEvent: any;
  handleEditEvent: any;
  isLoading?: boolean;
}

export const AdminCityList = ({
  data,
  handleUpdateCity,
  handleAddEvent,
  handleEditEvent,
  isLoading = false,
}: IAdminCityListProps): JSX.Element => {
  const [expanded, setExpanded] = useState<string | boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  console.log("expanded", expanded);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleDeleteCity = (cityId: string) =>
    dispatch(EventOperations.deleteCity(cityId));

  console.log("data", data);

  return (
    <Box>
      {data.map((CityItem: ICityItem, index: number) => (
        <Accordion
          key={index}
          expanded={expanded === CityItem.city.label}
          onChange={handleChange(CityItem.city.label)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "1rem",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Typography sx={{ fontWeight: 500 }}>
                  {CityItem.city.label}
                </Typography>
                {CityItem.showOnHomePage ? (
                  <Tooltip
                    title="This City Is Shown On The Main Page"
                    placement="top"
                  >
                    <HomeIcon />
                  </Tooltip>
                ) : null}
              </Box>
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <Tooltip title="Update City" placement="top">
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdateCity(CityItem._id);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete City" placement="top">
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteCity(CityItem._id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {expanded === CityItem.city.label && (
              <AdminCityItem
                key={CityItem._id}
                data={CityItem}
                handleAddEvent={handleAddEvent}
                handleEditEvent={handleEditEvent}
                isLoading={isLoading}
              />
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
