import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';


const MyCarousel = () => {
  
  const options = {
    loop: true,
    margin: 10, 
    nav: true, 
    responsive: {
      0: {
        items: 1 
      },
    600: {
       items: 3
    },
    1000: {
      items: 6
    }
    }
  };
  return (
    
    <div>

        <OwlCarousel className="owl-theme" {...options}>
            
     
    </OwlCarousel>


</div>


  );
}

export default MyCarousel;
