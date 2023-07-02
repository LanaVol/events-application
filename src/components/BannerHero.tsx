import React, { Component } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images22 from "../image/banner/banner.jpg";
import image3 from "../image/banner/image3.jpg";
// import videoBg from "../video/videoBg.mp4";

export class BannerHero extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      arrows: false,
    };

    return (
      <Box sx={{ border: "1px solid red", width: "100%" }}>
        <Slider {...settings}>
          <Box>
            <Image
              src={images22}
              alt="adfsfd"
              width={1600}
              height={400}
              style={{ width: "100%" }}
            />
            {/* <video src={videoBg} autoPlay loop muted /> */}
          </Box>
          <Box>
            <Image
              src={image3}
              alt="adfsfd"
              width={1600}
              height={400}
              style={{ width: "100%" }}
            />
          </Box>
        </Slider>
      </Box>
    );
  }
}
