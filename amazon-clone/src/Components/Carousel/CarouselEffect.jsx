import React from "react";
import { carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";
function CarouselEffect() {
  return (
    <div>
      <carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => {
          return <img src={imageItemLink} key={index} alt="" />;
        })}
      </carousel>
      <div className={classes.hero_img}>

      </div>
    </div>
  );
}

export default CarouselEffect;
