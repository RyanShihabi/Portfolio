import React, { useState } from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    glb: 0,
    title: "ISS Archaeology Project",
    backgroundPicture: "url(/space.jpg)",
    text: "ISS Text",
    textColor: "white"
  },
  {
    glb: 1,
    title: "SAP Grocery Store Sale Detection",
    backgroundPicture: "url(/cover.jpg)",
    text: "A freelance project for SAP with the challenge of verifying in-store grocery discounts for commercial products. I wanted to create an object detection model in order to instantly count and identify different sales found in pictures. The pictures would be taken through a mobile application by the store clerks or crowd-sourced users. I directed a team of five other students at my university to help develop my proposed solution. After labeling a sale dataset from scratch, the trained YOLOv5 object detection model is capable of recognizing and detecting differenct types sales with a 95% precision and recall. There is another project card that goes into detail of how I hosted the inference API at my university.",
    textColor: "black"
  }
];

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);

  const [background, setBackground] = useState(0);

  return (
    <div className="card" 
    style={{  
      backgroundImage: data[background].backgroundPicture,
      height: window.innerHeight,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{ width: "100%", height: "100%", position: "relative" }} >
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={width*0.5}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={1}
                customScales={[1, 1]}
                transitionTime={0}
                height={window.innerHeight}
                onActiveSlideChange={(activeSlide) => setBackground(activeSlide)}
              />
            );
          }}
        />

        {/* <Fab
          className="card-button left"
          size="large"
          onClick={() => {swipeLeft(ref, background, setBackground)}}
        >
          <KeyboardArrowLeftIcon style={{ height: "100%", fontSize: 30 }} />
        </Fab>
        
        <Fab
          className="card-button right"
          size="large"
          
          onClick={() => {swipeRight(ref, background, setBackground)}}
        > */}
          {/* <KeyboardArrowRightIcon style={{ height: "100%", fontSize: 30 }} /> */}
        {/* </Fab> */}
      </div>
    </div>
  );
};

export default CardExample;
