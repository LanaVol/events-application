import Link from "next/link";
import Image from "next/image";
import { Box, Container, Grid, ImageListItem } from "@mui/material";
import { GridWrapper } from "../GridWrapper";
import { ItemBanner } from "../ItemBanner";
import { ItemSmallCard } from "../ItemSmallCard";
import banner from "../../image/banner.jpg";
import letters from "../../image/letters.jpg";

export const HomePage = ({ data }) => {
  return (
    <>
      <Box sx={{ height: "400px", overflow: "hidden", position: "relative" }}>
        <Image
          src={banner}
          alt="Banner Image"
          fill={true}
          style={{ objectFit: "cover" }}
        />
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
            src={letters}
            style={{ objectFit: "contain", display: "block" }}
            alt="Events letters"
          />
        </Box>

        <ItemBanner
          title="Explore the World of Events"
          subtitle="Discover the most fascinating events happening worldwide with us!"
        />

        <Grid
          container
          rowSpacing={1}
          sx={{ padding: "20px 0", marginBottom: "100px" }}
        >
          {data.cities
            .filter((city) => city.showOnHomePage)
            .map((ev, index) => (
              <GridWrapper item key={ev.id} isEven={index % 2 === 0}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "500px",
                    overflow: "hidden",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  alignItems={`${index % 2 === 0 ? "end" : "start"}`}
                >
                  <Link href={`/events/${ev.city.toLowerCase()}`}>
                    <ImageListItem
                      sx={{
                        width: "80%",
                        height: "auto",
                        transition: "transform 500ms linear",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    >
                      <Image
                        src={ev.imagePath}
                        alt={ev.title}
                        width={800}
                        height={500}
                        priority={true}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </ImageListItem>
                  </Link>
                </Box>
                <ItemSmallCard
                  title={ev.title}
                  description={ev.description}
                  country={ev.country}
                  totalEvents={ev.totalEvents}
                  population={ev.population}
                />
              </GridWrapper>
            ))}
        </Grid>
      </Container>
    </>
  );
};
