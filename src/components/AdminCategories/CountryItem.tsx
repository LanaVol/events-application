import { ICountry } from "../../interfaces";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";

interface ICountryItem {
  data: ICountry;
  index: number;
  handleUpdateCountry: (id: string) => void;
  handleDeleteCountry: (id: string) => void;
}

export const CountryItem = ({
  data,
  index,
  handleUpdateCountry,
  handleDeleteCountry,
}: ICountryItem): JSX.Element => {
  const { _id, label, code, phone } = data;

  return (
    <>
      {_id && (
        <Box
          key={_id}
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            width: "100%",
            paddingRight: "1rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography>{index + 1}.</Typography>
            <img
              loading="lazy"
              width="40"
              src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w160/${code.toLowerCase()}.png 2x`}
              alt=""
            />
            <Typography>{label}</Typography>
            <Typography>(phone: {phone})</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip title="Update Country" placement="top">
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpdateCountry(_id);
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Country" placement="top">
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteCountry(_id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      )}
    </>
  );
};
