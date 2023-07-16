import { HomeEventItem } from "./HomeEventItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme, useMediaQuery } from "@mui/material";
import { IEventItemResponse } from "../../interfaces";

interface IHomeEventListProps {
  events: IEventItemResponse[];
}

export const HomeEventList = ({ events }: IHomeEventListProps): JSX.Element => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getSlidesToShow = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 3;
  };

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: getSlidesToShow(),
    swipeToSlide: true,
    speed: 500,
    arrows: false,
    dots: true,
  };

  return (
    <Slider {...settings}>
      {events.map((event: IEventItemResponse) => (
        <HomeEventItem key={event.id} event={event} />
      ))}
    </Slider>
  );
};
