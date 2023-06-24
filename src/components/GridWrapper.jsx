import React from "react";
import { Grid } from "@mui/material";

export const GridWrapper = ({ children, isEven, key }) => {
  return (
    <Grid container rowSpacing={2} key={key}>
      {isEven ? (
        <>
          <Grid item xs={12} md={6}>
            {children[0]}
          </Grid>
          <Grid item xs={12} md={6}>
            <div>{children[1]}</div>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} md={6}>
            <div>{children[1]}</div>
          </Grid>
          <Grid item xs={12} md={6}>
            {children[0]}
          </Grid>
        </>
      )}
    </Grid>
  );
};
