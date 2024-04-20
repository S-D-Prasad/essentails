import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./DiscountProducts.css";
import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jfif";
import d4 from "../assets/d4.jfif";
import d5 from "../assets/d5.jpg";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: d1,
  },
  {
    url: d2,
  },
  //Second image url
  {
    url: d3,
  },
  //Third image url
  {
    url: d4,
  },

  //Fourth image url

  {
    url: d5,
  },
];
const DiscountProducts = () => {
  return (
    <div className="parent">
        <h2>Discount Products</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        
  
        infinite={true}
       
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="discount" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default DiscountProducts;
