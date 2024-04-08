// import React from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import image1 from "../circle/hello.jpeg";
import image2 from "../circle/istockphoto-1096419446-612x612.jpg";

import image4 from "../circle/istockphoto-1364917563-612x612.jpg";
import image3 from "../circle/stock-photo-african-american-man-white-short-pointing-hand-looking-camera-isolated.jpeg";
import image5 from "../circle/stock-photo-image-of-young-asian-woman-company-worker-in-glasses-smiling-and-holding-digital-tablet-standing-2122700972.jpg";
// import image4 from './public/images';

import { useState } from "react";

const Circle = () => {
  const [focusElement, setFocusElement] = useState(0);

  const images = [image1, image2,image5,image3, image4];
  const info = ["Absolutely love this todo app! It's intuitive, easy to use, and helps me stay organized effortlessly.🌹😇", "This app has been a game-changer for my productivity. The ability to set deadlines and prioritize tasks has really helped me stay on top of my workload.🌹✔", "I've tried several todo apps, but this one stands out for its simplicity and effectiveness. It's become an essential tool in my daily routine. 😇","While the app is functional, it lacks some advanced features like subtasks and collaboration options, which would make it even more versatile.🙂🙂","Overall, a solid todo app with a clean interface and reliable performance. Would love to see more customization options in future updates.❤"];
  return (
    <div>
      <div className="carousel  ">
        <div className="absolute lg:top-[70px] lg:left-2 ">
        <FancyCarousel
          images={images} 
          setFocusElement={setFocusElement}
          carouselRadius={200}
          peripheralImageRadius={50}
          centralImageRadius={50}
          focusElementStyling={{border: '2px solid #ba4949'}}
          autoRotateTime={3}
          borderWidth={4}
          borderHexColor={'1c364f'}
        
        /> 
        </div>

        <div className="absolute h-44 w-60 lg:top-44 lg:right-20 bg-[#3785fa] text-white text-base rounded-md lg:p-5">
        <div className="info-box-wrapper  ">
        <p className=""> {info[focusElement]} </p>
      </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Circle;
