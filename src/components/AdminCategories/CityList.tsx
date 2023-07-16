import { Box, Typography, Tooltip, IconButton, Divider } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { ICity } from "../../interfaces";
import { formatPopulation } from "../../utils";

interface ICityItemProps {
  countryId: string;
  cities: ICity[];
  number: number;
  handleUpdateCity: (params: { countryId: string; cityId: string }) => void;
  handleDeleteCity: (params: { countryId: string; cityId: string }) => void;
}

export const CityList = ({
  countryId,
  cities,
  number,
  handleUpdateCity,
  handleDeleteCity,
}: ICityItemProps): JSX.Element => {
  return (
    <Box sx={{ width: "100%" }}>
      <Divider sx={{ marginBottom: "0.5rem" }} />
      {cities.length > 0 &&
        cities.map(({ id, label, population }: ICity, index: number) => (
          <Box
            key={id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", gap: "2rem" }}>
              <Typography>{`${number + 1}.${index + 1}. ${label}`}</Typography>
              <Typography>
                population: {formatPopulation(population)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip title="Update City" placement="top">
                <IconButton
                  onClick={() => handleUpdateCity({ countryId, cityId: id })}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete City" placement="top">
                <IconButton
                  onClick={() => handleDeleteCity({ countryId, cityId: id })}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        ))}

      {cities.length === 0 && (
        <Typography sx={{ textAlign: "center" }}>
          There Are No Saved Cities!
        </Typography>
      )}
      <Divider sx={{ margin: "0.5rem 0" }} />
    </Box>
  );
};
