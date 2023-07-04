import { Box } from "@mui/material";
import { SpeakerItem } from "../components/SpeakerItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SpeakersLine = ({ speakers }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Slider {...settings}>
        {speakers &&
          speakers.map((speaker) => (
            <SpeakerItem
              id={speaker.id}
              firstname={speaker.firstname}
              lastname={speaker.lastname}
              age={speaker.age}
            />
          ))}
      </Slider>
    </Box>
  );
};
