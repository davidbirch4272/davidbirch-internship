import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";

export default function Carousel({
  children,
  defaultitemwidth = 535,
  items = 4,
  loop = true,
  margin = 10,
  autoplay = false,
  nav = true,
  dots = false,
  responsive = { 
        0: { items: 1 },
        600: { items: 2 },
        983: { items: 3 },
        1198: { items: 4 },
      }
      
}) {
  return (
    <OwlCarousel
      className="owl-theme"
      loop={loop}
      margin={margin}
      nav={nav}
      items={items}
      autoplay={autoplay}
      dots={dots}
      defaultitemwidth={defaultitemwidth}
      responsive={responsive}
      
    >
      {children}
          </OwlCarousel>
  );
}
