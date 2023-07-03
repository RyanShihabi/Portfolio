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
    background: "https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg",
    text: "ISS Text"
  }
];

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);

  const [background, setBackground] = useState(0);

  const swipeLeft = (ref, background, setBackground) => {
    console.log("Called");
    setBackground(background => (background - 1) % data.length);
    console.log(background);
    ref.current?.swipeTo(background);
  }
  
  const swipeRight = (ref, background, setBackground) => {
    console.log("Called");
    setBackground(background => (background + 1) % data.length);
    console.log(background);
    ref.current?.swipeTo(background);
  }  

  return (
    <div className="card" 
    style={{  
      backgroundImage: "url(" + data[background].background + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{ width: "100%", height: "100vh", position: "relative" }} >
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
                transitionTime={450}
              />
            );
          }}
        />
        <Fab
          className="card-button left"
          size="small"
          onClick={() => {swipeLeft(ref, background, setBackground)}}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="card-button right"
          size="small"
          onClick={() => {swipeRight(ref, background, setBackground)}}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};

export default CardExample;
