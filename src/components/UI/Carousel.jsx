import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";



export default function Carousel({
    children, 
    items = 4,
    width = 235,
    loop = true,
    margin = 10,
    autoplay = false, 
    nav = true,
    dots = false, 
})  {

  
  return (
    <OwlCarousel 
    className="owl-theme" 
    loop={loop}
    margin={margin}
    nav={nav}
    items={items}
    autoplay={autoplay}
    dots={dots}
    width={width}
    
    >
    {children}  
    </OwlCarousel>
  );  
}

