import { useEffect } from "react";
import { HomeCItyItem } from "../HomeCItyItem/HomeCItyItem";
import { ICityItem } from "../../interfaces";
import { Box, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

interface IHomeCityListProps {
  cities: ICityItem[];
}

export const HomeCityList = ({ cities }: IHomeCityListProps): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box sx={{ paddingBottom: "5rem" }}>
      {cities.map((city: ICityItem, index: number) => (
        <Box
          key={index}
          data-aos="fade-up"
          data-aos-duration="2000"
          sx={{ border: "1px solid red", padding: "0.5rem 0" }}
        >
          <HomeCItyItem data={city} index={index} />
        </Box>
      ))}
    </Box>
  );
};
