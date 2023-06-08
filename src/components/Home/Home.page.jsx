import Link from "next/link";
import Image from "next/image";
import { Box, Container, Grid, ImageListItem } from "@mui/material";
import { GridWrapper } from "../GridWrapper";
import { ItemBanner } from "../ItemBanner";

export const HomePage = () => {
  return (
    <>
      <Box sx={{ height: "400px", overflow: "hidden", position: "relative" }}>
        <Image alt="Banner Image" fill={true} style={{ objectFit: "cover" }} />
      </Box>

      <Container>
        <Box
          sx={{
            height: "180px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ objectFit: "contain", display: "block" }}
            alt="Events letters"
          />
        </Box>

        <ItemBanner
          title="Explore the World of Events"
          subtitle="Discover the most fascinating events happening worldwide with us!"
        />
      </Container>
    </>
  );
};
