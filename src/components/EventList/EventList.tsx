import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Chip,
  useTheme,
  Container,
  LinearProgress,
  Typography,
  Grid,
} from "@mui/material";
import { CardItem } from "../CardItem";

export const EventList = ({
  data,
  cityNameLink,
  isLoading,
}: any): JSX.Element => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ border: "1px solid green" }}>
      <Grid
        container
        sx={{
          position: "relative",
          width: "100%",
          color: theme.palette.text.primary,
        }}
      >
        {data?.map(
          ({
            id,
            title,
            imagePath,
            description,
            date,
            seats,
            categories,
          }: any) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              sx={{
                padding: "1rem",
                width: "25%",
              }}
            >
              <Link
                key={id}
                href={`/cities/${cityNameLink.toLowerCase()}/${title}`}
                style={{
                  border: "1px solid red",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <CardItem
                  imagePath={imagePath}
                  title={title}
                  description={description}
                  mainTitle={title}
                  leftPoint={date}
                  rightPoint={`Seats: ${seats}`}
                />
                {/* <Image
                  src={imagePath}
                  alt={title}
                  width={300}
                  height={300}
                  priority={true}
                  style={{ width: "100%", height: "auto" }}
                />
                <Box sx={{ color: theme.palette.text.primary }}>
                  <Typography variant="h4">Title: {title}</Typography>
                  <Typography>Descrition: {description}</Typography>
                  <Typography>Data: {date}</Typography>
                  <Typography>Seats: {seats}</Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}
                  >
                    {categories &&
                      categories?.map((cat: any, index: number) => (
                        <Chip key={index} label={cat} variant="outlined" />
                      ))}
                  </Box>
                </Box> */}
              </Link>
            </Grid>
          )
        )}
        {isLoading && (
          <Box sx={{ position: "absolute", width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </Grid>
    </Container>
  );
};
