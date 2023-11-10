import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Preloader() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        height: "1000px",
        justifyContent: "center",
        alignItems: "start",
        paddingTop: "100px",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
