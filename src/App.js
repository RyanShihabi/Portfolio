import React, { useState } from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import { Fab } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    glb: "/ISS_stationary.jsx",
    title: "ISS Archaeology Project",
    backgroundPicture: "url(/space.jpg)",
    text: "ISS Text",
    textColor: "white"
  },
  {
    glb: "/ISS_stationary.jsx",
    title: "SAP Grocery Store Sale Detection",
    backgroundPicture: "url(/cover.jpg)",
    text: "GSD Text",
    textColor: "black"
  }
];

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);

  const [background, setBackground] = useState(0);

  const swipeLeft = (ref, background, setBackground) => {
    if(background > 0){
      setBackground(background - 1);
      ref.current?.goBack();
    }
  }
  
  const swipeRight = (ref, background, setBackground) => {
    if(background < data.length-1){
      setBackground(background + 1);
      ref.current?.goNext();
    }
  }  

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
                disableSwipe
                maxVisibleSlide={1}
                customScales={[1, 1]}
                transitionTime={0}
                height={window.innerHeight}
              />
            );
          }}
        />

        <Fab
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
        >
          <KeyboardArrowRightIcon style={{ height: "100%", fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};

export default CardExample;
