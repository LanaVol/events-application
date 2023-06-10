import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export const AllEvents = ({ data }) => {
  return (
    <Box sx={{ margin: "0 auto", width: "75%" }}>
      <Grid container spacing={1}>
        {data?.map(({ _id, city, title, totalEvents, imagePath }) => (
          <Grid
            item
            key={_id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              border: "1px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href={`/events/${city.toLowerCase()}`}>
              <Image
                src={imagePath}
                alt={title}
                width={400}
                height={200}
                priority={true}
                style={{ width: "auto", height: "auto" }}
              />
              <Typography variant="h3">{title}</Typography>
              <Typography variant="h5">Count events: {totalEvents}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
